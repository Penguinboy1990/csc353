import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Profile from './Profile.jsx'

/* This is JSX. There is no default "App" HTML tag.
      so clearly, it was custom made. We need pascal case for
      JSX, so that's why the tag is capitalized. It is no longer
      an HTML tag; it is a JSX / React component.*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Profile/>
    <App />
  </StrictMode>,
)
