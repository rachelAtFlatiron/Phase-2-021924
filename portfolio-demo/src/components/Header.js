import React from 'react'

function Header({ handleClick, darkMode }) {
  //if we create darkMode in Header, there's no way to get it up to the parent (App)
  //App needs darkMode to set className for site
  return (
    <header>
        <h1><span className="logo">{'//'}</span>Portfolio Showcase</h1>
        {/* ✅ 1c.  Inside the `Header` component, invoke the callback function to update state in `App` */}
        <button onClick={handleClick}>
				{darkMode ? "Light Mode" : "Dark Mode"}
			</button>
    </header>
  )
}

export default Header