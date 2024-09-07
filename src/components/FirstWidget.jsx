import React, { useState } from 'react'
import Button from './Button'

const FirstWidget = () => {
  const buttons = ['About Me', 'Experiences', 'Recommended']

  const [clickedBtn, setClickedBtn] = useState('About Me')

  const handleBtnClick = type => {
    setClickedBtn(type)
  }
  return (
    <>
      <div className='w-[614px] h-[62px] flex items-center justify-between mx-auto p-[6px] bg-[#171717] rounded-[23px] space-x-2'>
        {buttons.map((btnName, index) => {
          return (
            <Button key={index} onClickBtn={handleBtnClick} type={clickedBtn}>
              {btnName}
            </Button>
          )
        })}
      </div>
      <div className='absolute top-28 right-1'>
        <img src='/rectangle.png' alt='' className='w-[16px] h-[64px]' />
      </div>
      <div className='w-[611px] h-[175px]flex justify-center mx-auto mt-8'>
        <p className='text-[#969696] text-[20px] font-jakarta font-normal leading-[25px] mx-auto'>
          {clickedBtn === 'About Me' && (
            <>
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now. <br /> <br />I
              was born and raised in Albany, NY& have been living in Santa Carla
              for the past 10 years my wife Tiffany and my 4 year old twin
              daughters- Emma and Ella. Both of them are just starting school,
              so my calender is usually blocked between 9-10 AM. This is a...
            </>
          )}
          {clickedBtn === 'Experiences' && (
            <>
              I’ve been working at Salesforce for 3 years now. <br /> <br />I
              was born and raised in Albany, NY& have been living in Santa Clara
              for the past 10 years my wife Tiffany and my 4 year old twin
              daughters - Emma and Ella. Both of them are just starting school,
              so my calender is usually blocked between 9-10 AM.
            </>
          )}
          {clickedBtn === 'Recommended' && (
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              <br />
              Totam, nisi! Ut voluptate molestias eaque officiis quibusdam id
              velit harum eius blanditiis animi repellendus porro, dignissimos
              doloremque fuga, dolorem tempore minus.
            </>
          )}
        </p>
      </div>
    </>
  )
}

export default FirstWidget
