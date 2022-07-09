import { useState } from "react"

import useMergeState2 from "../hooks/useMergeState2";


const CustomMergeState2 = () => {



    const [data, setData] = useMergeState2({
        name: "",
        email: "",
        phone: ""
    });





    return (
        <form>
            <label>Name</label>
            <input
                type="text"
                value={data.name}
                onChange={e => setData({ name: e.target.value })}
            ></input>
            <label>Email</label>
            <input
                type="text"
                value={data.email}
                onChange={e => setData({ email: e.target.value })}
            ></input>
            <label>Phone</label>
            <input
                type="text"
                value={data.phone}
                onChange={e => setData({ phone: e.target.value })}
            ></input>
            <input type="submit" ></input>
        </form>
    )
};


export default CustomMergeState2;