import React from 'react'
import list from "./data";
import {Navigate, useParams} from "react-router-dom";

export default function ListOpen() {
    let {id} = useParams();
    const activeItem = list.find(item => item.id === id)
    if (!activeItem) {
        return <Navigate to="/" replace={true}/>
    }

    const {name, description, image} = activeItem

    return (
        <div className='list-open'>
            <img src={image} alt={name}/>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    )
}
