import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<ul>
				<li>Hacer la cama</li>
				<li>Leer un libro</li>
				<li>Hacer yoga</li>
				<li>Salir a dar un paseo</li>
			</ul>
		</div>
	);
};

export default Home;
