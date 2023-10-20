import React from 'react'
import ContactForm from './components/formContact/ContactForm'
import './contact.scss'

const Contact = ({}) => {
  const modal = document.querySelector('.modal'); modal.style.backgroundColor = 'red';
  return (
    <div className='contact' >
      <div className='contact__container' >
        <h1 className='contact__container__title'>Contact</h1>
        <p className='contact__container__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact

export const layout = {
  areaId: 'content',
  sortOrder: 1
}