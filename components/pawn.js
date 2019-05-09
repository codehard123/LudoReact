import React from "react"
import Button from "./button"
import Dice from "./Dice"

class Pawn extends React.Component{
	constructor()
	{
		super()
		this.state={
		pawn:[{
			color:"red",
			top:50,
			left:50,
			startTop:50,
			startLeft:50,
			inHouse:false,
			onStar:false,
			disappear:false

		},
		{
			color:"red",
			top:50,
			left:190,
			startTop:50,
			startLeft:190,
			inHouse:false,
			onStar:false,
			disapper:false


		},
		{
			color:"red",
			top:170,
			left:50,
			startTop:170,
			startLeft:50,
			inHouse:false,
			onStar:false,
			disappear:false

		},
		{
			color:"red",
			top:170,
			left:190,
			startTop:170,
			startLeft:190,
			inHouse:false,
			onStar:false,
			disappear:false

		},
		{
			color:"blue",
			top:50,
			left:500,
			startTop:50,
			startLeft:500,
			inHouse:false,
			onStar:false,
			disappear:false

		},
		{
			color:"blue",
			top:50,
			left:650,
			startTop:50,
			startLeft:650,
			inHouse:false,
			onStar:false,
			disappear:false

		},
		{
			color:"blue",
			top:170,
			left:500,
			startTop:170,
			startLeft:500,
			inHouse:false,
			onStar:false,
			disappear:false

		},
		{
			color:"blue",
			top:170,
			left:650,
			startTop:170,
			startLeft:650,
			inHouse:false,
			onStar:false,
			disappear:false

		},
		{
			color:"yellow",
			top:500,
			left:50,
			startTop:500,
			startLeft:50,
			inHouse:false,
			onStar:false,
			disappear:false

		},
		{
			color:"yellow",
			top:500,
			left:190,
			startTop:500,
			startLeft:190,
			inHouse:false,
			onStar:false,
			disappear:false

		},
		{
			color:"yellow",
			top:620,
			left:50,
			startTop:620,
			startLeft:50,
			inHouse:false,
			onStar:false,
			disappear:false

		},
		{
			color:"yellow",
			top:620,
			left:190,
			startTop:620,
			startLeft:190,
			inHouse:false,
			onStar:false,
			disappear:false

		},
		{
			color:"green",
			top:500,
			left:500,
			startTop:500,
			startLeft:500,
			inHouse:false,
			onStar:false,
			disappear:false

		},
		{
			color:"green",
			top:500,
			left:650,
			startTop:500,
			startLeft:650,
			inHouse:false,
			onStar:false,
			disappear:false

		},
		{
			color:"green",
			top:620,
			left:500,
			startTop:620,
			startLeft:500,
			inHouse:false,
			onStar:false

		},
		{
			color:"green",
			top:620,
			left:650,
			startTop:620,
			startLeft:650,
			inHouse:false,
			onStar:false

		}
		]


	}
}
	movepawn=()=>{
		console.log("hero");
	}

	render(){
		return(
			<div>
			{this.state.pawn.map((item,index)=> <Button item={item} key={index}/>)}
			</div>
		)
	}
	
}

export default Pawn