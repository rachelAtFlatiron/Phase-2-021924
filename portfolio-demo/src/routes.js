import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails";
import CreateProject from "./pages/CreateProject";
import EditProject from "./pages/EditProject";

// IN ORDER TO USE HEADER YOU NEED CHILDREN OF APP


// ✅  1. Create routes.js
// ✅  1a. In `routes.js` create an array for routes.
// ✅  1b. Make a route for `<App />`
// ✅  1c. For the `<App />` route create an array of children that represent all the pages (Home, About, Projects, etc.)

//list of objects
//each object contains path, component to show when visiting said path
const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/projects",
				element: <ProjectsPage />,
			},
			{
				path: "/new",
				element: <CreateProject />,
			},
			//page dedicated solely to one single project card
			//we have to save some info as to which project to show
			//the info we will use is the project id (created by json-server)
			//id is going to be a variable
			//we will interpolate the value later on in component code
			{
				path: "/projects/:id",
				element: <ProjectDetails />,
			},
			{
				path: "/edit/:id",
				element: <EditProject />,
			},
		],
	},
];

export default routes;
