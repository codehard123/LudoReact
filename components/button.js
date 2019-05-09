import React from "react"
import Pawn from "./pawn"
function button(props)
{
	return(
		<button onClick={movepawn} style={{position:"absolute",top:props.item.top,left:props.item.left,zIndex:"10",backgroundColor:props.item.color,height:"50px",width:"50px",borderRadius:"25px"}}/>
		)
}
export default button
