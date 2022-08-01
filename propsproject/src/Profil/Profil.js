import React, { Children } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './style.css';
import propTypes from 'prop-types'

const Profil = ({fullName,bio,profession,greeting,children}) => {

  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <div>{children}</div>
      <Card.Body>
        <Card.Title className="title" style={{fontSize:"25px",fontFamily:"times new roman"}}>{fullName}</Card.Title>
        <Card.Text style={{fontSize:"25px",fontFamily:"times new roman"}}>{profession}</Card.Text>
        <Card.Text style={{fontSize:"20px",fontFamily:"times new roman"}}>{bio}</Card.Text>
        <Button style={{ width:"300px",height:"30px"}} onClick={()=> greeting({fullName})}>View More</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

Profil.defaultProps={
  fullName:"Mohamed Ali ",
  }

Profil.propTypes = {
  fullName: propTypes.string,
  bio: propTypes.string,
  Profession: propTypes.string,
  };
  

export default Profil
