import "./Button.css";

function Button(props:any){
    return(
        <div>
<button 
onClick={props.onClick} 
style={{height:`${props.height}`,
width:`${props.width}`,
borderRadius:`${props.borderRadius}`}} 
className="choicesbutton" 
data-testid={props.testid} 
>{props.name}</button>
        </div>
    )
}
export default Button;