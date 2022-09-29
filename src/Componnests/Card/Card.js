import React from 'react';
import './Card.css';

const Card = ({user}) => {
    const { name, age, star ,Details,img} = user;
    return (

        <div class="card">
            <img src={img} alt="" />
          <h2 class=""><span>Name:</span> {name}</h2>
          <p><span>Age:</span> {age}</p>
          <p><span>star:</span> {star}</p>
          <p><span>Details:</span> {Details}</p>
          <button>Seleted</button>
        </div>
     
    );
};

export default Card;