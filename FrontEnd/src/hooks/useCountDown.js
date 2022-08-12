import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {
    // 3 minutes + ms from 1 January 1970 to now.
    const countDownDate = new Date(targetDate).getTime()

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    useEffect(() => {
        const idTimer = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime())
        }, 1000)

        return () => clearInterval(idTimer)
    }, [countDownDate]);

    return getReturnValues(countDown)
}

const getReturnValues = (countDown) => {
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000)

    return [minutes, seconds]
}

export { useCountdown }