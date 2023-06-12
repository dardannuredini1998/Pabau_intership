import React from 'react'
import {Link, useParams} from "react-router-dom";
import list from "./data";


export default function Header() {
    let {id} = useParams();

    const activeItem = list.find(item => item.id === id)

    if (!activeItem) {
        return (
            <header>
                <div>
                    <h1>Choose service</h1>
                    <h2>Step: 1/2</h2>
                </div>
            </header>
        )
    }
    return (
        <header>
            <Link className='backButton' to={'/'}>Back</Link>
            <div>
                <h1>{activeItem.name}</h1>
                <h2>Step: 2/2</h2>
            </div>
        </header>
    )
}