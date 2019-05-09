import React from "react"
function Circle(props){
return(
	<div style={{position:"absolute",left:props.left,top:props.top,borderRadius:"25px",width:"50px",height:"50px",border:"1px solid black",zIndex:"5",backgroundColor:"white"}}/>
	)
}
export default Circle