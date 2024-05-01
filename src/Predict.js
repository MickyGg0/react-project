import React, { useState } from 'react';
import Axios from "axios";
import './App.css';

const Predict = () => {
    const [name,setName] = useState("");
    const [details,setDetails] = useState()
    const fetchData = () => 
    {
        Axios.get(`https://api.agify.io?name=${name}`).then((response) => 
        {
            console.log(response.data)
            setDetails(response.data)
        })
        .catch((error) => 
        {
            console.log(`error${error.response.data}`)
        })
        }
    const nameToPredict = (name) => 
    {
        setName(name)
    }
  return (
        <div className='containerMain'>
            <nav>
                <h1>Age Predict</h1>
            </nav>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col1">
                            <input onChange={(event) => 
                                {
                                    nameToPredict(event.target.value)
                                }} placeholder="Enter a name" type="text" />
                        </div>
                        <div className="col2">
                            <button onClick={fetchData}>
                                Predict Age
                            </button>
                        </div>
                        <div className="col3">
                                <div className="col3-1">
                                <p>Name:</p>
                                <p>Predicted Age:</p>
                                <p>Count:</p>
                                </div>
                                <div className="col3-2">
                                    <p>{details?.name}</p>
                                    <p>{details?.age}</p>
                                    <p>{details?.count == 0 ? null:details?.count}</p>
                                </div>
                    
                        </div>
                    </div>
                </div>
            </main>
    
        </div>
  )
}

export default Predict;