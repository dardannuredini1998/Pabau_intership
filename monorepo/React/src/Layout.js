import React from 'react'
import {Outlet} from "react-router-dom";
import Header from "./Header";

export default function List() {

    return (
        <div className={'main'}>
            <Header/>
            <div className={'content'}>
                <Outlet/>
            </div>
            <footer>
                <p>created by: Dardan Nuredini</p>
            </footer>
        </div>
    )
}
