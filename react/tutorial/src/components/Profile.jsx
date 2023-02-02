import React from 'react';

const Profile = ({image , image2}) => {
    return (
        <div  className="App">
            <div className='profile-box'>
            <img
            className ='profile'
            src = {image}
            alt="image" />
            <h1>풍경</h1>
            </div>
            <div className='profile-box'>
            <img
            className ='profile'
            src="https://images.unsplash.com/photo-1675271875614-7336620d3144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
            alt="image" />
            <h1>풍경</h1>
            </div>
            <div className='profile-box'>
            <img
            className ='profile'
            src={image2}
            alt="image" />
            <h1>풍경</h1>
            </div>
            <div className='profile-box'>
            <img
            className ='profile'
            src="https://images.unsplash.com/photo-1675271875614-7336620d3144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
            alt="image" />
            <h1>풍경</h1>
            </div>
        </div>
    );
};

export default Profile;