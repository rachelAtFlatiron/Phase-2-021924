import React from "react";
//react-router-dom <a> tag
import { NavLink } from 'react-router-dom'

// ✅ 4. Add `NavLink`'s throughout the site.
// ✅ 4a. Add `NavLink`s in `Header`.
// ✅ 4b. In `Home` add `NavLink` to button `View All Projects`.  Direct it to `/projects`.
function Header({ updateDarkMode, darkMode }) {
	return (
		<header>
			<h1>
				<NavLink to={'/'}>
				<span className="logo">{"//"}</span>
				Project Showcase
				</NavLink>
			</h1>
			<button onClick={updateDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
			{/* <a href="/" className="button">Home</a> */}
			<NavLink to={'/'} className="button">
				Home
			</NavLink>
			<NavLink to={'/about'} className="button" >
				About
			</NavLink>
			<NavLink to={'/new'} className="button" >
				New Project
			</NavLink>
			<NavLink to={'/projects'} className="button" >
				All Projects
			</NavLink>
		</header>
	);
}

export default Header;
