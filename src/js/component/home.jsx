import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="imgHome">
			<div className="container">
			<h1>To do list!</h1>
			<ul>
				<li><input type="text"
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
				onKeyPress={(e) => {
					if (e.key === "Enter") {
						setTodos(todos.concat(inputValue));
						setInputValue("");
					}
				 }}
				placeholder="¿Qué necesitas hacer hoy?"></input></li>
				{todos.map((item, index) => (
					<li>{item}<i className="trash" class="fa-solid fa-trash fa-2x" onClick={() =>
						setTodos(
							todos.filter(
								(t, currentIndex) =>
								index != currentIndex
							))}></i></li>
				))
				}
				
			</ul>
			<div>{todos.length} tareas</div>
		</div>
		</div>
		
	);
};

export default Home;
