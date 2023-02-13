import React from 'react';
import { useRouteError } from 'react-router-dom';
import './Error.css';

const Error = () => {
    const err = useRouteError();
    console.log(err);
    const{status,statusText} = err;
  return (
    <div className='error'>
        <img src='https://icon2.cleanpng.com/20180319/vlw/kisspng-kfc-hamburger-fast-food-drink-no-food-5aaf554a8f0237.4042143815214400745858.jpg' alt="No page found"/>
        <h2>Oops! Seems like your bowl is empty!🥣</h2>
        <h4>{status}</h4>
        <p>{statusText}</p>
    </div>
  )
}

export default Error