import React, { useState } from 'react'
import Button from './Button'

const FirstWidget = () => {
  const buttons = ['About Me', 'Experiences', 'Recommended']

  const paragraphs = {
    'About Me':
      'Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, voluptas nobis? Repellat esse similique repudiandae harum, quos exercitationem distinctio, dolores saepe ab labore consequuntur hic tempora blanditiis. Veritatis, eveniet iste.',
    Experiences:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quae laborum exercitationem rem, dolorum impedit, minus reiciendis eius recusandae fugit mollitia eaque ex in ad necessitatibus esse, facilis quos deserunt.',
    Recommended:
      'Reiciendis ipsum nemo maiores architecto temporibus tempore aperiam, error quod magnam officiis quae sapiente a eveniet blanditiis nihil eius enim nobis consequuntur esse accusantium laboriosam? Vitae mollitia itaque sint quae! Deserunt omnis reiciendis ab maiores delectus modi laboriosam tempore provident exercitationem deleniti, excepturi est voluptatibus ratione quod cum beatae? Minus magni provident deserunt atque mollitia quaerat explicabo beatae aliquam obcaecati.'
  }

  const [clickedBtn, setClickedBtn] = useState('About Me')

  const handleBtnClick = type => {
    setClickedBtn(type)
  }
  return (
    <>
      <div className='w-[614px] h-[62px] flex items-center justify-between mx-auto p-2 bg-[#171717] rounded-2xl space-x-2'>
        {buttons.map((btnName, index) => {
          return (
            <Button key={index} onClickBtn={handleBtnClick} type={clickedBtn}>
              {btnName}
            </Button>
          )
        })}
      </div>
      <div className='w-[94%] flex justify-center mx-auto mt-8 overflow-y-scroll'>
        <p className='text-[#969696] text-[20px] font-normal leading-[25px] mx-auto px-2 w-[611px] h-[175px]'>
          {paragraphs[clickedBtn]}
        </p>
      </div>
    </>
  )
}

export default FirstWidget
