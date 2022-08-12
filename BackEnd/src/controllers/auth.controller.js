const User = require('../models/user.model')
const Role = require('../models/role.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AuthController {
    async register (req, res) {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)

            const user = new User({
                username: 'User',
                email: req.body.email,
                password: hashed,
                roles: 1
            })

            // save to mongodb
            const userMongoose = await user.save()
            res.status(200).json(userMongoose)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    generateAT (user) {
        return jwt.sign({
            id: user._id,
            role: user.roles
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s'})
    }

    generateRT (user) {
        return jwt.sign({
            id: user._id,
            role: user.roles
        }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d'})
    }

    async login (req, res) {
        try {
            const user = await User.findOne({ username: req.body.username })
                if (!user) {
                    res.status(404).json('Username not exist.')
                }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            )

            if (!validPassword) {
                res.status(404).json('Wrong password.')
            }

            if (user && validPassword) {
                const newAccessToken = AuthController.generateAT(user)
                const newRefreshToken = AuthController.generateRT(user)

                res.cookie('refreshToken', newRefreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: '/',
                    sameSite: 'strict'
                })

                res.status(200).json({ accessToken: newAccessToken })
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async refresh (req, res) {
        const refreshToken = req.cookie.refreshToken
        if (!refreshToken) return res.status(401).json('You are not authentication.')
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
            if (error) {
                console.log(error);
            }

            const newAccessToken = AuthController.generateAT(user)
            const newRefreshToken = AuthController.generateRT(user)

            res.cookie('refreshToken', newRefreshToken, {
                httpOnly: true,
                secure: false,
                path: '/',
                sameSite: 'strict'
            })

            res.status(200).json({ accessToken: newAccessToken })
        })
    }
}

module.exports = new AuthController()