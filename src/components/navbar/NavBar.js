import React from 'react'
import "./NavBar.css";
function NavBar() {
  return (
    <div className='navbar'>
        <img className='logo' src='data:image/png;base64,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'alt=''/>
        <img className='flix' src='data:image/jpeg;base64,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'alt=''/>
         </div>
  )
}

export default NavBar