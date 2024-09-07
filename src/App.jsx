import React from 'react'
import FirstWidget from './components/FirstWidget'
import Line from './components/Line'
import SecondWidget from './components/SecondWidget'
import WidgetContainer from './components/WidgetContainer'

function App() {
  return (
    <main className='min-h-[100vh] flex items-center justify-center bg-custom-gradient lg:px-6 py-6'>
      <div className='w-full flex justify-center lg:justify-between lg:space-x-4 lg:px-8 py-8'>
        <div className='w-full max-w-[836px] hidden lg:block'></div>
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
