import React from "react";
import { Title } from "./Title";
import { List } from "./List";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	//this is where to do state goes
	return (
		<div className="d-flex justify-content-center align-items-center flex-column">
			<Title title={"hello"}/>
			<List />
		</div>
	);
};

export default Home;