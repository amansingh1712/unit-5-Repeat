import { useState } from "react";


const useMergeState = (initState = {}) => {

    const [state, setState] = useState(initState);


    const mergeState = (newState) => {
        setState(prevState => (
            {
                ...prevState,
                ...newState
            }
        ))
    };


    return { state, mergeState };

}


export default useMergeState;