import React from 'react'

function Header(props) {
  return (
    <div className='Todo-header'>
      {props.title}
    </div>
  )
}

export default Header
