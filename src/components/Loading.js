// Loading.js
import React from 'react';
import './loading.css';

const Loading = () => {
  return (
    <div className="loading-root"> {/* add a class name to the root div */}
      <ul>
        <li>L</li>
        <li>O</li>
        <li>A</li>
        <li>D</li>
        <li>I</li>
        <li>N</li>
        <li>G</li>
      </ul>
      <p className='loading_about'>COPYRIGHT &copy; 2023 ALL RIGHTS RESERVED TO SOME GUY FROM STACKOVERFLOW &reg; <span>MIRZA</span>ASCERIC</p>
    </div>
  );
};

export default Loading;
