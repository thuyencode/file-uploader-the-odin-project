import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const root = document.getElementById('root')

if (root === null) {
  throw new Error('Need an HTML element with an id of "root"')
} else {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
