import React from 'react';
import {Link} from 'react-router';

export default () => {
  return(
    <div className="boxed-view">
      <div className='boxed-view__box'>
        <h1>Page Not Found</h1>
        <p>You sure that u want to see 401?</p>
        <Link to="/" className="button button--link">Head home</Link>
      </div>
    </div>
  );
};