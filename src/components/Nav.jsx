import React from 'react'
import './Nav.scss'
import DateTime from './DateTime'

const Navbar = () => {
  return (
    <nav>

      {/* LEFT */}
      <div className="left">

        <div className="item apple"><img src="./navbar-icons/apple.svg" alt="" /></div>

        <div className="item user-name">Matadeen Yadav</div>

        <div className="item">File</div>
        <div className="item">Window</div>
        <div className="item">Terminal</div>

      </div>


      {/* RIGHT */}
      <div className="right">

        <div className="item"><img src="./navbar-icons/wifi.svg" alt="" /></div>

        <div className="item datetime">
          <DateTime />
        </div>

      </div>

    </nav>
  )
}

export default Navbar