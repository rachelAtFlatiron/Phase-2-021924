import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from "./pages/Header";
// ✅ 3. Update `App.js` to include `Header` on every page.
// ✅ 3a. Import `Outlet` from `react-router-dom`.

//React Router
//useNavigate - navigates to a different page (NOT AN <a> TAG)
//NavLink - generates an <a> tag
//useParams - gets a parameter from URL (parameter is created in routes.js)

//create proxy for json-server (ex. "http://localhost:4000") so that you only have to set it once.  you can avoid passing around a url prop.  you can update http://localhost:4000 if needed in only one place (instead of 10 sprinkled all around your components)

//additional params for json-server to sort data as needed 

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const updateDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className={darkMode ? "App" : "App light"}>
      <Header updateDarkMode={updateDarkMode} darkMode={darkMode} />
      {/* ✅ 3b. Include the `Outlet` component in the `JSX`. */}
      <Outlet />
    </div>
  );
}


export default App;
