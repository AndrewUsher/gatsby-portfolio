import React from 'react'

const Contact = ({ children }) => (
  <div className="contact">
    <h2>Contact</h2>
    <p>Feel free to contact me through the email below, I'd love to chat!</p>
    <p>
      <a href="mailto:andrewusher00@gmail.com">andrewusher00@gmail.com</a>
    </p>
    {children}
  </div>
)

export default Contact
