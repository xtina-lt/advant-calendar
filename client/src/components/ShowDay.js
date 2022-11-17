import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const ShowDay = ({ list, date, setHeader }) => {
    let { id } = useParams();
    const obj = list[id-1]
    setHeader(`December ${obj.num}`)
    return (
        <>
        {
            (date >= id)
            ?
            <>
                <div>
                    <img src={obj.gif} alt="gif of the day"/>
                </div>
                <div>
                    <a href={obj.link} target="_blank">
                        Present
                    </a>
                </div>
            </>
            :
            <div>
                Not available yet🥲
            </div>
        }
        </>
    )
}

export default ShowDay