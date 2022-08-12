import { useCountdown } from '../hooks/useCountDown'
import ShowCounter from '../components/ShowCounter/ShowCounter'

const CountdownTimer = ({targetDate}) => {
    const [minutes, seconds] = useCountdown(targetDate)
    
    if (minutes + seconds <= 0) {
        return console.log('Countdown...');
    } else {
        return (
            <ShowCounter 
                minutes={minutes}
                seconds={seconds}
            />
        )
    }
}

export default CountdownTimer