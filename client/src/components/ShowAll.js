import React from 'react'
import { useState, useEffect } from "react";

const ShowAll = ({ list, setHeader }) => {

    setHeader('Showing All')
    return (
        <>
        {
            list.map((item, key) => (
                <div key={key}>
                    {item.num}
                    <br/>
                    <img src={item.gif} alt="gif of the day"/>
                    <br/>
                    <a href={item.link} target="_blank">
                        {item.link}
                    </a>
                </div>
            ))
        }
        </>
    )
}

export default ShowAll