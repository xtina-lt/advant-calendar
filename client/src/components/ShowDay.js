import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

const ShowDay = ({ list, month, date, setHeader }) => {
    let { id } = useParams();
    const [obj, setObj] = useState({})
    const [error, setError] = useState(false)

    useEffect(() => {
        if (id > 25) {
            setHeader(`Invalid date!`)
            setError(true)
        } else if (id > date){
            setHeader("Not available yet!")
            setError(true)
        } else if (month != 11) {
            setHeader("Come back in December!")
            setError(true)
        } else {
            setObj(list[id-1]);
            setHeader(`December ${obj.num}`)
        }
    }, [obj])
    
    return (
        <>
        {
            (!error)
            ?
            <>
                <div>
                    <img src={obj.gif} alt="gif of the day"/>
                </div>

                    <a href={obj.link} target="_blank">
                        <button>
                        Recieve Present!
                        <br/>
                        <img id="present-icon" src="https://gallery.yopriceville.com/var/albums/Animated-Gif-Images/Animated_%20Christmas_%20Gifts_and_Santa_Hat.gif?m=1399676400" alt="present"/>
                        </button>
                    </a>
            </>
            :
            <div>
                Try again!🥲
            </div>
        }
        </>
    )
}

export default ShowDay