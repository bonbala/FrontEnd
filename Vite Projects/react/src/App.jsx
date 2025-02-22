import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StudentManager from './components/StudentManager'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StudentManager/>
    </>
  )
}

export default App
