import React, { useState } from 'react'


const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0])
  return (
    <>
      <div className='main-bg'>
        <img src={main.url} alt='main' className='main-img' />
      </div>
      <div className='gallery'>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? 'active' : null}`}
            />
          )
        })}
      </div>
    </>
  )
}

export default ProductImages
