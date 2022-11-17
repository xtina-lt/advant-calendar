import React from 'react'
import { useState, useEffect } from "react";
const Doors = ({list, setList, date}) => {
   
    const shuffleArray = (arr) => {
        var copy = [...list]
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        console.log(copy)
        return copy
    };

    useEffect(() => {
        setList(shuffleArray(list))
    }, [])
    return (
        <>
            {
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
            }
        </>
    )
}

export default Doors