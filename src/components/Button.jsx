import React from 'react'

const Button = ({ children, type, onClickBtn }) => {
  return (
    <button
      onClick={() => onClickBtn(children)}
      className={`text-[#A3ADB2] w-full h-full text-lg rounded-xl font-poppins ${
        type === children &&
        'bg-[#28292F] text-[#fff] shadow-[20px_25px_30px_10px_#171717]'
      }`}
    >
      {children}
    </button>
  )
}

export default Button
