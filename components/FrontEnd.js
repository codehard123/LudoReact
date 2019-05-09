import React from "react"
import Box from "./box"
import Capture from "../Capture.PNG"
import Circle from "./circle"
import Pawn from "./pawn"
import Dice from "./Dice"



function FrontEnd(){
return (

	<div>
	<Pawn/>
	<Dice/>
	<Circle left="50px" top="50px"/>
	<Circle left="190px" top="50px"/>
	<Circle left="50px" top="170px"/>
	<Circle left="190px" top="170px"/>
	

	<Circle left="50px" top="500px"/>
	<Circle left="190px" top="500px"/>
	<Circle left="50px" top="620px"/>
	<Circle left="190px" top="620px"/>

	<Circle left="500px" top="50px"/>
	<Circle left="650px" top="50px"/>
	<Circle left="500px" top="170px"/>
	<Circle left="650px" top="170px"/>

	<Circle left="500px" top="500px"/>
	<Circle left="650px" top="500px"/>
	<Circle left="500px" top="620px"/>
	<Circle left="650px" top="620px"/>
	
	
	<img src={Capture} style={{position:"absolute",left:"300px",top:"300px",height:"150px",width:"150px"}}/>
	<Box top="0px" left="0px" height="300px" width="300px" color="red"/>
    <Box top="450px" left="0px" height="300px" width="300px" color="yellow"/>
    <Box top="0px" left="450px" height="300px" width="300px" color="blue"/>
    <Box top="450px" left="450px" height="300px" width="300px" color="green"/>

    <Box top="0px" left="300px" width="50px" height="50px" dir="3"/>
    <Box top="0px" left="350px" width="50px" height="50px" dir="3"/>
	<Box top="0px" left="400px" width="50px" height="50px" dir="5"/>

	<Box top="50px" left="300px" width="50px" height="50px" dir="1"/>
    <Box top="50px" left="350px" width="50px" height="50px" dir="5" color="blue"/>
	<Box top="50px" left="400px" width="50px" height="50px" dir="5" color="blue"/>

	<Box top="100px" left="300px" width="50px" height="50px" dir="1"/>
    <Box top="100px" left="350px" width="50px" height="50px" dir="5" color="blue"/>
	<Box top="100px" left="400px" width="50px" height="50px" dir="5"/>
	
	<Box top="150px" left="300px" width="50px" height="50px" dir="1"/>
    <Box top="150px" left="350px" width="50px" height="50px" dir="5" color="blue"/>
	<Box top="150px" left="400px" width="50px" height="50px" dir="5"/>

	<Box top="200px" left="300px" width="50px" height="50px" dir="1"/>
    <Box top="200px" left="350px" width="50px" height="50px" dir="5" color="blue"/>
	<Box top="200px" left="400px" width="50px" height="50px" dir="5"/>
	
	<Box top="250px" left="300px" width="50px" height="50px" dir="1"/>
    <Box top="250px" left="350px" width="50px" height="50px" dir="5" color="blue"/>
	<Box top="250px" left="400px" width="50px" height="50px" dir="4"/>

	<Box top="300px" left="0px" width="50px" height="50px" dir="3" />
    <Box top="350px" left="0px" width="50px" height="50px" dir="1" />
	<Box top="400px" left="0px" width="50px" height="50px" dir="1" />

		<Box top="300px" left="450px" width="50px" height="50px" dir="3" />
	    <Box top="350px" left="450px" width="50px" height="50px" dir="1" color="green"/>
		<Box top="400px" left="450px" width="50px" height="50px" dir="1" />

		<Box top="300px" left="500px" width="50px" height="50px" dir="3" />
	    <Box top="350px" left="500px" width="50px" height="50px" dir="1" color="green"/>
		<Box top="400px" left="500px" width="50px" height="50px" dir="1" />

		<Box top="300px" left="500px" width="50px" height="50px" dir="3" />
	    <Box top="350px" left="500px" width="50px" height="50px" dir="1" color="green"/>
		<Box top="400px" left="500px" width="50px" height="50px" dir="1" />

		<Box top="300px" left="550px" width="50px" height="50px" dir="3" />
	    <Box top="350px" left="550px" width="50px" height="50px" dir="1" color="green"/>
		<Box top="400px" left="550px" width="50px" height="50px" dir="1" />

		<Box top="300px" left="600px" width="50px" height="50px" dir="3" />
	    <Box top="350px" left="600px" width="50px" height="50px" dir="1" color="green"/>
		<Box top="400px" left="600px" width="50px" height="50px" dir="1" />

		<Box top="300px" left="650px" width="50px" height="50px" dir="3" />
	    <Box top="350px" left="650px" width="50px" height="50px" dir="1" color="green"/>
		<Box top="400px" left="650px" width="50px" height="50px" dir="1" color="green"/>

		<Box top="300px" left="700px" width="50px" height="50px" dir="5" />
	    <Box top="350px" left="700px" width="50px" height="50px" dir="1" />
		<Box top="400px" left="700px" width="50px" height="50px" dir="1" />



	<Box top="300px" left="50px" width="50px" height="50px" color="red" type="S" dir="3"/>
    <Box top="350px" left="50px" width="50px" height="50px" color="red" dir="3"/>
	<Box top="400px" left="50px" width="50px" height="50px" dir="7" />
	<Box top="300px" left="100px" width="50px" height="50px" dir="3"/>
    <Box top="350px" left="100px" width="50px" height="50px" color="red" dir="3"/>
	<Box top="400px" left="100px" width="50px" height="50px" dir="7"/>
	<Box top="300px" left="150px" width="50px" height="50px" dir="3"/>
    <Box top="350px" left="150px" width="50px" height="50px" color="red" dir="3"/>
	<Box top="400px" left="150px" width="50px" height="50px" dir="7"/>
	<Box top="300px" left="200px" width="50px" height="50px" dir="3"/>
    <Box top="350px" left="200px" width="50px" height="50px" color="red" dir="3"/>
	<Box top="400px" left="200px" width="50px" height="50px" dir="7"/>
	<Box top="300px" left="250px" width="50px" height="50px" dir="2"/>
    <Box top="350px" left="250px" width="50px" height="50px" color="red" dir="3"/>
	<Box top="400px" left="250px" width="50px" height="50px" dir="7"/>
	
	<Box top="450px" left="300px" width="50px" height="50px" dir="3"/>
    <Box top="450px" left="350px" width="50px" height="50px" dir="3" color="yellow"/>
	<Box top="450px" left="400px" width="50px" height="50px" dir="5"/>

	<Box top="500px" left="300px" width="50px" height="50px" dir="1"/>
    <Box top="500px" left="350px" width="50px" height="50px" dir="5" color="yellow"/>
	<Box top="500px" left="400px" width="50px" height="50px" dir="5"/>

	<Box top="550px" left="300px" width="50px" height="50px" dir="1"/>
    <Box top="550px" left="350px" width="50px" height="50px" dir="5" color="yellow"/>
	<Box top="550px" left="400px" width="50px" height="50px" dir="5"/>
	
	<Box top="600px" left="300px" width="50px" height="50px" dir="1"/>
    <Box top="600px" left="350px" width="50px" height="50px" dir="5" color="yellow"/>
	<Box top="600px" left="400px" width="50px" height="50px" dir="5"/>

	<Box top="650px" left="300px" width="50px" height="50px" dir="1" color="yellow"/>
    <Box top="650px" left="350px" width="50px" height="50px" dir="5" color="yellow"/>
	<Box top="650px" left="400px" width="50px" height="50px" dir="5"/>
	
	<Box top="700px" left="300px" width="50px" height="50px" dir="1"/>
    <Box top="700px" left="350px" width="50px" height="50px" dir="5"/>
	<Box top="700px" left="400px" width="50px" height="50px" dir="4"/>

	</div>
	)

}
export default FrontEnd