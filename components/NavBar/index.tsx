import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div>
      <nav>
        <menu>
          <Link href="/">
            Home         
          </Link>
          <Link href="/about">
            About
          </Link>
        </menu>
      </nav>
    </div>
  )
}

