import React from 'react';
import '../style.scss';

const Card = ({ name, email, phone, company, website, address, image }) => {
    return (
        <div className="cardContainer">
            <div className="image">
                <img height='200px' width='200px' src={image} />
            </div>
            <div className="details">
                <h2 className="name">{name}</h2>
                <UserDetail label="Email" value={email} />
                <UserDetail label="Phone" value={phone} />
                <UserDetail label="Company" value={company} />
                <UserDetail label="Website" value={website} />
                <UserDetail label="Address" value={address} />
            </div>
        </div>
    )
}

const UserDetail = ({ label, value }) => <div className="user-detail"><strong>{label}: </strong>{value}</div>

export default Card;