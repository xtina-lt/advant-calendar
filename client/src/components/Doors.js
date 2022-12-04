import React from 'react'
import { useState, useEffect } from "react";
const Doors = ({list, setList, date, setHeader, month}) => {

    useEffect(() => {
        var copy = [...list]
        for (var i = copy.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = copy[i];
            copy[i] = copy[j];
            copy[j] = temp;
        }
        console.log(copy)
        setList(copy)
    }, [setList])

    return (
        <>
            {
                (month == 11)
                ?
                list.map((item, key) => (
                    <div className={(item.num <= date) ? "days active" : "days"} key={key}>
                        {
                            (item.num <= date)
                                ?
                                <a href={`/${item.num}`}>
                                    {item.num}
                                </a>
                                :
                                <>
                                    {item.num}
                                </>
                        }
                    </div>
                ))
                :
                list.map((item, key) => (
                    <div className="days" key={key}>
                        {item.num}
                    </div>
                ))
            }
        </>
    )
}

export default Doors