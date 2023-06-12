import React from 'react'
import list from "./data";
import {Link} from "react-router-dom";

export default function List() {
    return (
        <div className='list-wrapper'>
            {list.map((item, index) => {
                return (
                    <Link className='list-item' to={`/${item.id}`} key={index}>
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                        <span className='spacer'></span>
                        <i className="gg-chevron-right"></i>
                    </Link>
                )})}
        </div>
    )
}
