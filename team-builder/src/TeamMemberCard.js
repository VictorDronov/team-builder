import React, {useState,useEffect} from 'react';

export default function TeamMemberCard(props) {
const { details } = props

if (!details){
    return <h1>Finding Your Team...</h1>
}
return (
    <div className="teamMember">
        <h3>Name: {details.name}</h3>
        <p>Email: {details.email}</p>
        <p>Role: {details.role}</p>
    </div>
    );
}
