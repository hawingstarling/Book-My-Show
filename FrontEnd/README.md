<span style="background-color:rgb(51, 53, 69); width: 100%; display: block; padding: 5px 10px; text-align: center">![logo](./src/assets/image/logo.svg)</span>

---
## Overview
This project use bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

The project is developed by [hawkstar](https://github.com/hawingstarling) and [GiaThuan](https://github.com/GiaThuanKaren) of SGUniversity in Ho Chi Minh city. If you have any problems or suggestions, please send email or put an **__ISSUE__** above.

## Installation
Create react app split two files into two packages: Back-end use _NodeJs_ and Client-UI.

**Create react app**
> Create react app set up a modern web app by running one command.
```sh
    npx create-react-app Cinema_booking_project
    cd Cinema_booking_project
    npm start
```

**SASS**
> Sass makes CSS fun again. Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more. It's translated to well-formatted, standard CSS using the command line tool or a plugin for your build system.
```sh
    npm install -D sass
```

**classnames**
> A simple JavaScript utility for conditionally joining classNames together.
```sh
    npm i classnames
```

**clsx**
```sh
    npm install clsx
```

**SwiperJs**
> Swiper is the most modern free mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps.
```sh
    npm install swiper
```

**React Router**
> Closing in on a decade of client-side routing, React Router v6 takes the best features from previous versions—and its sister project, Reach Router—in our smallest and most powerful package yet.
```sh
    npm install react-router-dom@6
```

## Config

**prettier**
> - An opinionated code formatter
> - Supports many languages
> - Integrates with most editors
> - Has few options

> **__NOTE:__** How to config ? Create an file ``.prettier``. On browser into homepage ``prettier.io`` > Playground > 'Config suitable' > Copy config JSON > 'Paste in file'

## Directory structure
```
    Cinema_booking_project/
        Backend
        clientui
            node_modules/
            public/
            src/
                assets/
                components/
                page/
                App.js
                index.js
                index.module.scss
                .gitignore
                .prettier
                package-lock.json
                pakage.json
```