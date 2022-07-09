
import useTimeout from "../hooks/useTimeout"

let time = 5000;
const Timeout = () => {

    const { ready, timeout, timeoff } = useTimeout(time);

    return (
        <>
            {ready && <div>Ready</div>}
            {!ready && <div>Not Ready</div>}
            {!ready && <button onClick={timeout}>Click here to get it ready</button>}
            {ready && <button onClick={timeoff}>Click here to get it not ready</button>}
        </>
    )
}


export default Timeout;