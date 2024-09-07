import React from 'react'
import FirstWidget from './components/FirstWidget'
import Line from './components/Line'
import SecondWidget from './components/SecondWidget'
import WidgetContainer from './components/WidgetContainer'

function App() {
  return (
    <main className='w-100vw min-h-100vh flex items-center justify-center p-6'>
      <div className='flex justify-between space-x-4 p-8'>
        <div className='w-[836px] hidden md:block'></div>
        <div className='flex flex-col justify-between items-center gap-4'>
          <WidgetContainer type={'first'}>
            <FirstWidget />
          </WidgetContainer>
          <Line />
          <WidgetContainer type={'second'}>
            <SecondWidget />
          </WidgetContainer>
          <Line />
        </div>
      </div>
    </main>
  )
}

export default App
