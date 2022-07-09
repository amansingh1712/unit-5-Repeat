import { useState } from "react"

import useMergeState from "../hooks/useMergeState";


const CustomMergeState = () => {



    const { state, mergeState } = useMergeState({
        name: "",
        email: "",
        phone: ""
    });
    const [data, setData] = useState([]);

    // const handleSubmit = () => {
    //     setData(state);
    // }



    return (
        <form>
            <label>Name</label>
            <input
                type="text"
                value={state.name}
                onChange={e => mergeState({ name: e.target.value })}
            ></input>
            <label>Email</label>
            <input
                type="text"
                value={state.email}
                onChange={e => mergeState({ email: e.target.value })}
            ></input>
            <label>Phone</label>
            <input
                type="text"
                value={state.phone}
                onChange={e => mergeState({ phone: e.target.value })}
            ></input>
            <input type="submit" ></input>
        </form>
    )
};


export default CustomMergeState;