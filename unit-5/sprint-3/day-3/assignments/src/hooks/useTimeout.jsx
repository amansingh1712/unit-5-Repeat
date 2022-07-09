import { useState, useRef } from "react";


const useTimeout = (time) => {


    const [ready, setReady] = useState(false);
    const timerId = useRef();

    const timeout = () => {

        if (!timerId.current) {
            timerId.current = setInterval(() => {
                setReady(true);
            }, time)
        }
    };

    const timeoff = () => {
        clearInterval(timerId.current);
        timerId.current = null;
        setReady(false);

    }

    return { ready, timeout, timeoff };
}


export default useTimeout;