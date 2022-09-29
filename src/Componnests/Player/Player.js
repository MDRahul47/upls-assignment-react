import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Player.css';

const Player = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('Fakedata.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className='main'>
            <h1 className='pL' >Player section </h1>
            <div className='details-main'>
            <h1 className='lol'>  I HAVE NO IDEA FOR THIS ONE BRO!!</h1>
            </div>
        <div className="cartss">
            

            {
                users?.map(user => <Card
                    key={user._id}
                    user={user}

                ></Card>)
            }
        </div>
        
        </div>
    );
};
export default Player;