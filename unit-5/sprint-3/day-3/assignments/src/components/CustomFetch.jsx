import useFetch from "../hooks/useFetch"


// let url = "http://localhost:8080/data";
let url = "https://jsonplaceholder.typicode.com/todos";

const CustomFetch = () => {

    const { loading, error, data } = useFetch(url);
    console.log('data:', data)


    return (

        <>
            {loading && <div>Loading...</div>}
            {error && <div>Error...</div>}
            {data.map((row, index) => (<div key={index}>{row.title}</div>))}
        </>

    )



}


export default CustomFetch;