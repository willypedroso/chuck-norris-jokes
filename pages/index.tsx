import React, { useState } from "react";
import axios from "axios";

const Home = () => {
	const [joke, setJoke] = useState("");
	
	function getJoke(url: string){
		axios.get(url).then(response => {
			setJoke(response.data.value);
		});
	}

	return (
		<div id="screen">
			<h1>CHUCK NORRIS JOKES</h1>
			<main>
				<h1>{joke}</h1>
				<button id="btnJoke" onClick={() => getJoke("https://api.chucknorris.io/jokes/random")}>Get a Chuck Norris Joke</button>
				<button onClick={() => setJoke("")}>Clear</button>
			</main>
		</div>
	);
};

export default Home;
