import { useState } from 'react'

import './App.css'
import { Home } from './component/Home'
import { Cart } from './component/Cart'
import { Login } from './component/Login'
import { SignUp } from './component/SignUp'
import { Produtc } from './component/product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello app</h1>
      <Home/>
      <Cart/>
      <Login/>
      <SignUp/>
      <Produtc/>
    </>
  )
}

export default App
