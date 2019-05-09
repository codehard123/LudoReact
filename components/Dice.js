import React from "react"
var element;
var rand;
const dice=()=>{
element=document.getElementById('dice');
rand=Math.floor(Math.random()*6)+1;
element.innerHTML=rand;
element.disabled=true;	

}
function Dice(){
	return(
		<button name="dice" id="dice" onClick={dice} style={{height:"50px",width:"50px",position:"absolute",top:"350px",left:"750px"}}></button>
		)
}
export default Dice