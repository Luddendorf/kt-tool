import React, { useState } from 'react'
import Form from './components/form/Form'
import SendData from './components/send-data/sendData'

function App() {
  const [state, setState] = useState(false)

  const changeWindow = state ? (
      <SendData onClick={openInformation} onClick2={openInformation2} />) : (
      <Form state={state} setState={setState} />
  )

  function openInformation(event) {
    setState(false)
    // event.preventDefault();

  }

  function openInformation2(event) {
    if ( event.target.id !== 'pop-up' && event.target.id === 'pop-up2') {
      setState(false)
    }
  }

  return <div>{changeWindow}</div>
}

export default App
