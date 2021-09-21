//these 3 line for text.
let text = "Second line is you can write here.";
let paragraph = "hi my name is shanto kumar saha, i am from singair manokgonj. my school name is singair pilot high school.";

//this 4 line for showing full date.
const date = new Date();
const datename = date.getDate();
const monthname = date.getMonth();
const year = date.getFullYear();

//functional component
function Card(props){
  
  //Distructer props
  const {text, paragraph} = props;

  return <div className= "card">
            <h2 className= "cardTitle">{text}</h2>
            <p className= "cardDesc">{paragraph}</p>
            <p className= "cardFooter">{datename +"/ "+ monthname +"/ "+ year}</p>
        </div>
}

export default Card;