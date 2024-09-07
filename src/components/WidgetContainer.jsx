import React from 'react'

function WidgetContainer({ children, type }) {
  return (
    <div
      className={`h-[316px] w-[720px] flex flex-col bg-[#363C43] shadow-[5px_5px_6px_0_#171717] py-4 relative ${
        type === 'first' ? 'rounded-sm' : 'rounded-xl'
      }`}
    >
      <div className='h-[165px] flex flex-col justify-between absolute top-4 left-3'>
        <span className='text-3xl text-transparent bg-gradient-to-tl from-[#4A4E54] to-[#A3ADBA] bg-clip-text'>
          <i className='fa-regular fa-circle-question'></i>
        </span>
        <img
          src="data:image/svg+xml,%3csvg%20width='24'%20height='31'%20viewBox='0%200%2024%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20x='10.6878'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20y='10.6879'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20x='10.6878'%20y='10.6879'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20y='21.3756'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20x='10.6878'%20y='21.3756'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3c/svg%3e"
          alt='img1'
        />
      </div>
      {children}
    </div>
  )
}

export default WidgetContainer
