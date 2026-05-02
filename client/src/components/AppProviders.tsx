import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";

import App from './App.tsx'

function AppProviders() {

  return (
    <>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </>
  )
}

export default AppProviders
