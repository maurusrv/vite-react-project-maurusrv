
import { useState } from 'react'
import './Header.css'
import NavItem from './NavItem'

const tabs = {
  SITE_NAME: 'SITE_NAME',
  ABOUT: 'ABOUT',
  CONTACT_US: 'CONTACT_US',
}

const Header = () => {  
  const [highlighted, setHighlighted] = useState('CONTACT_US')

  const onClick = (e, key) => {
    console.log({ e, key })
    setHighlighted(key)
  }

  return (
    <header>
      <nav>
        <ul className='flex gap-x-5'>
          {Object.keys(tabs).map(key => (
            <NavItem 
              key={key}
              label={key}
              className={`${highlighted === key ? 'bg-red-400' : ''}`}
              onClick={(e) => onClick(e, key)}
            />
          ))}
          {/* <li id="SITE_NAME" className={`border-2 ${highlighted === 'SITE_NAME' ? 'bg-red-400' : ''}`} onClick={onClick}>Bank Mo</li>
          <li id="ABOUT" className={`border-2 ${highlighted === 'ABOUT' ? 'bg-red-400' : ''}`} onClick={onClick}>About</li>
          <li id="CONTACT_US" className={`border-2 ${highlighted === 'CONTACT_US' ? 'bg-red-400' : ''}`} onClick={onClick}>Contact Us</li> */}
        </ul>
      </nav>
    </header>
    
  )
}

export default Header
