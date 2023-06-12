import React from 'react';
import {Link} from "react-router-dom";


export default function NoMatch() {
    return (
        <div className='list-open'>
          <h1>Not Found 404</h1>
          <Link className='backButton' to={'/'}>Back to home</Link>
        </div>
    )
}
