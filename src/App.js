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
				<Route exact path="/" element={<Home />} />
				<Route path="/Mas-informacion" element={<MasInformacion/>} />
				<Route path="/Servicios" element={<AllServicios/>} />
				<Route path="/Playas" element={<Playas/>} />
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
