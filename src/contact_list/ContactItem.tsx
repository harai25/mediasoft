import React from 'react'
import './ContactItem.css'
import profileImage from '../assets/profile.png'

function ContactItem() {

  const getHeart = () => {
    if (true) {
      return <i className='fas fa-heart'></i>
    } else {
      return <i className='far fa-heart'></i>
    }
  }

  return (
    <div className='contact-item'>

      <div className='contact-item__image'>
        <img src={profileImage} alt="profile" width="50px" height="50px"/>
      </div>


      <div className='contact-item__info'>
        <div className='contact-item__name'>
          Name
        </div>
        <div className='contact-item__phone'>
          Phone
        </div>
      </div>


      <div className='contact-item__actions'>
        <div className='contact-item__remove'>
          <i className='fa fa-times'></i>
        </div>

        <div className='contact-item__favorite'>
          {getHeart()}
        </div>
      </div>

    </div>
  )
}

export default ContactItem
