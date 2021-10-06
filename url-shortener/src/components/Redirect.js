import React, {useEffect} from 'react';


import { Spinner } from 'react-bootstrap';
export default function Redirect(props){
    useEffect(() =>{
        async function getLink(){
            if(props.code !== undefined){
                await  fetch("http://localhost:61292/shorten?", {
                method: "GET",
                credentials: 'omit',
                headers:{
                    'Key': props.code,
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin":"*"
                },
                mode:"cors"
            }).then(res => res.text())
            .then(target => {
                window.location.assign(target);
            })
        }
        }
        getLink();
    }, []);

    return (
        <div className="App-header">
         <Spinner animation="grow" />
        </div>
    )
}