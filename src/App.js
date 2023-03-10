import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layaout";
import Home from "./components/Home";
import MasInformacion from "./components/MasInformacion";
import AllServicios from "./components/AllServices";
import Playas from "./components/Beach";
import "./App.css";
import "antd/dist/antd.min.css";


function App() {
	const renderRoutes = () => {
		return (
			<Routes>
				<Route exact path="/MyFirstPage/" element={<Home />} />
				<Route path="/MyFirstPage/Mas-informacion" element={<MasInformacion/>} />
				<Route path="/MyFirstPage/Servicios" element={<AllServicios/>} />
				<Route path="/MyFirstPage/Playas" element={<Playas/>} />
			</Routes>
		);
	};
	return (
		<Router>
			<Layout>{renderRoutes()}</Layout>
		</Router>
	);
}

export default App;
