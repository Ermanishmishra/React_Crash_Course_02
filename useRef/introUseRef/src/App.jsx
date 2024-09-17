import { useState } from 'react'

import './App.css'
import ChangeBackgroundColor from './components/changeBackgroundColor'
import FocusInput from './components/focusInput'
import UncontrolledInput from './components/uncontrolledInput'

function App() {
 

  return (
    <>
  <ChangeBackgroundColor/>
  <FocusInput/>
  <UncontrolledInput/>
    </>
  )
}

export default App
