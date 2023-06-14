import React from 'react'
import list from "./data";
import {Navigate, useParams} from "react-router-dom";

export default function ListOpen() {
    let {id} = useParams();
    const activeItem = list.find(item => item.id === id)

    /**
     * if it dosen't match the id it stays at the home page
     */
    if (!activeItem) {
        return <Navigate to="/" replace={true}/>
    }


/**
 * I made a destructuring assignment to show wich list is clicked or is opend and shows us everything whats in there
 */
    const {name, description, image} = activeItem
    return (
        <div className='list-open'>
            <img src={image} alt={name}/>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    )
}
