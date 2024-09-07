import React, { useRef, useState } from 'react'
import GalleryImage from './GalleryImage'

const SecondWidget = () => {
  const [images, setImages] = useState([])
  const [indexNumber, setIndexNumber] = useState(0)

  const inputRef = useRef()

  const handleIndexNumber = type => {
    if (images.length >= 3) {
      if (type === 'increment') {
        if (indexNumber >= images.length - 2) {
          return
        }
        setIndexNumber(indexNumber + 1)
      } else {
        if (indexNumber <= 0) {
          return
        } else {
          setIndexNumber(indexNumber - 1)
        }
      }
    }
  }

  const changeFileintoUrl = e => {
    const imgUrl = URL.createObjectURL(e.target.files[0])

    setImages([...images, imgUrl])

    if (images.length > 2) {
      setIndexNumber(images.length - 2)
    }
  }

  return (
    <>
      <div className='w-[614px] flex items-center justify-between mx-auto'>
        <div className='w-[149px] h-[62px] bg-[#171717] rounded-2xl text-white flex justify-center items-center font-poppins'>
          Gallery
        </div>
        <div className='flex items-center space-x-8'>
          <input
            type='file'
            ref={inputRef}
            onChange={changeFileintoUrl}
            className='hidden'
          />
          <button
            onClick={() => {
              inputRef.current.click()
            }}
            className='w-[131.3px] flex justify-center items-center h-[46px] text-white uppercase font-poppins font-medium rounded-3xl text-sm cursor-pointer shadow-[5px_5px_6px_0_#171717,-1px_-3px_6px_0_#ffffff40]'
          >
            + Add Image
          </button>
          <div className='flex space-x-5'>
            <button
              onClick={() => handleIndexNumber('decrement')}
              className='w-[45px] h-[45px] rounded-full bg-[#303439] text-[#969696] shadow-[15px_8px_25px_0_#171717,0_-1px_20px_0_#ffffff40]'
            >
              <i className='fa-solid fa-arrow-left'></i>
            </button>
            <button
              onClick={() => handleIndexNumber('increment')}
              className='w-[45px] h-[45px] rounded-full bg-[#303439] text-[#969696] shadow-[15px_8px_25px_0_#171717,0_-1px_20px_0_#ffffff40]'
            >
              <i className='fa-solid fa-arrow-right'></i>
            </button>
          </div>
        </div>
      </div>
      <div className='w-[614px] flex justify-between space-x-2  mt-8 mx-auto'>
        <GalleryImage imgUrl={images[indexNumber]} />
        <GalleryImage imgUrl={images[indexNumber + 1]} />
        <GalleryImage imgUrl={images[indexNumber + 2]} />
      </div>
    </>
  )
}

export default SecondWidget
