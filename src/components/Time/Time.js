import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";

const morning = ["09:00","10:00","11:00","12:00"];
const noon = ["02:00","03:00","04:00","05:00"];

function Times (props) {

    const[event,setEvent]= useState(null)
    const[info,setInfo]= useState(false)

    function displayInfo(e){
        setInfo(true);
        setEvent(e.target.innerText);
    }
    return(
        <div className="times">{time.map(times => {
            return(
                <div><button onClick={(e)=>displayInfo(e)}>{times}</button>
                </div>
            )
        })}
        <div>
            {info ? 'Your appointment is set to ${event} ${props.date.toDateString()}':null}
        </div>
        </div>
    )
};

export default Times;