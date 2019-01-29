import React from 'react'
import contactStyle from './contactStyle.module.css'

const Contact = () => {
  return (
    <div className={contactStyle.contactContainer}>
      <form
        action="https://formspree.io/mk@mariokennedy.com"
        method="POST"
        className={contactStyle.contactForm}
      >
        <input type="text" name="name" placeholder="Name"/>
        <input type="email" name="_replyto" placeholder="Email"/>
        <select name="guestCount">
          <option default>How many guests?</option>
          <option value="0-10">0-10</option>
          <option value="10-20">10-20</option>
          <option value="20-30">20-30</option>
          <option value="30+">30+</option>
        </select>
        <textarea rows="4" cols="50" name="message" placeholder="Your Message"/>
        <input type="submit" value="Send"/>
      </form>
    </div>
  )
}

export default Contact