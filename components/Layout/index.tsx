import React from 'react'
import NavBar from '../NavBar'

export default function Layout({ children }) {
  return (
    <>
    <NavBar />
      {children}
    <footer>This is the footer</footer>
    </>
  )
}
