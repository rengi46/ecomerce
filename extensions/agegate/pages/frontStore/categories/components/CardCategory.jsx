import React from 'react'
import "./cardCategory.scss"



const CardCategory = ({name,url,image}) => {

  return (
    <a href={url} >
    <div class="cardCategory flex items-start rounded-xl bg-white p-4 shadow-lg">
      {image &&
      <div class="cardCategory__image  flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
        <img src={image} alt="" />
      </div>
      }

      <div class="cardCategory__text ml-4">
        <h2 class="font-semibold">{name}</h2>
      </div>
    </div>
    </a>
  )
}

export default CardCategory