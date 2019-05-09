import React from "react"
function Box(props){
	return(
		<div turn={props.turn} dir={props.dir} type={props.type} stop={props.stop}style={{border:"1px solid black",position:"absolute",backgroundColor:props.color,height:props.height,width:props.width,top:props.top,left:props.left}}>

		</div>
		)
}
export default Box