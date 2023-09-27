import React from 'react'
import './aboutCard.scss'

const AboutCard = ({
  reverse = false,
  title,
  subTitle,
  text,
  image,
  video
}) => { 
  return (
    <div className={`aboutCard ${reverse && "reverse"}`}>
      <div className='textSection'>
        <p className='textSection__subTitle' >{subTitle}</p>
        <h2 className='textSection__title' >{title}</h2>
        <p className='textSection__text' >{text}</p>
      </div>
      <div className='imageSection'>
        {
          video  && <iframe className='imageSection__video'  src={video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        }
        {
          image && <img className='imageSection__image' src={image} />
        }
        
      </div>
    </div>
  )
}

export default AboutCard