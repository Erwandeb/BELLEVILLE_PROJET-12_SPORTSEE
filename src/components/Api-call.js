import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Apicall = () => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        axios.get("../mock-api.js")
        .then((res)=> setData(res.data));

        const dataJSON = JSON.stringify(data);
        console.log("hello", dataJSON)

    },[])


   
    return (
        <div></div>
    );
};

export default Apicall;