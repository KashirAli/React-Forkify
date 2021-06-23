import React, { useState } from 'react'
import Style from './Form.module.css'
const Form =(props)=>{
    const[value,setValue] = useState('');
    const [list] = useState(["carrot",
        "broccoli",
        "asparagus",
        "cauliflower",
        "corn",
        "cucumber",
        "green pepper",
        "lettuce",
        "mushrooms",
        "onion",
        "potato",
        "pumpkin",
        "red pepper",
        "tomato",
        "beetroot",
        "brussel sprouts",
        "peas",
        "zucchini",
        "radish",
        "sweet potato",
        "artichoke",
        "leek",
        "cabbage",
        "celery",
        "chili",
        "garlic",
        "basil",
        "coriander",
        "parsley",
        "dill",
        "rosemary",
        "oregano",
        "cinnamon",
        "saffron",
        "green bean",
        "bean",
        "chickpea",
        "lentil",
        "apple",
        "apricot",
        "avocado",
        "banana",
        "blackberry",
        "blackcurrant",
        "blueberry",
        "boysenberry",
        "cherry",
        "coconut",
        "fig",
        "grape",
        "grapefruit",
        "kiwifruit",
        "lemon",
        "lime",
        "lychee",
        "mandarin",
        "mango",
        "melon",
        "nectarine",,
        "orange",
        "papaya",
        "passion fruit",
        "peach",
        "pear",
        "pineapple",
        "plum",
        "pomegranate",
        "quince",
        "raspberry",
        "strawberry",
        "watermelon",
        "salad",
        "pizza",
        "pasta",
        "popcorn",
        "lobster",
        "steak",
        "bbq",
        "pudding",
        "hamburger",
        "pie",
        "cake",
        "sausage",
        "tacos",
        "kebab",
        "poutine",
        "seafood",
        "chips",
        "fries",
        "masala",
        "paella",
        "som tam",
        "chicken",
        "toast",
        "marzipan",
        "tofu",
        "ketchup",
        "hummus",
        "chili",
        "maple syrup",
        "parma ham",
        "fajitas",
        "champ",
        "lasagna",
        "poke",
        "chocolate",
        "croissant",
        "arepas",
        "bunny chow",
        "pierogi",
        "donuts",
        "rendang",
        "sushi",
        "ice cream",
        "duck",
        "curry",
        "beef",
        "goat",
        "lamb",
        "turkey",
        "pork",
        "fish",
        "crab",
        "bacon",
        "ham",
        "pepperoni",
        "salami",
        "ribs"]);
        const [suggestion,setSuggestion]=useState([]);
        const onTextChange = (e)=>{
            let suggestion = [];
            setValue(e.target.value) ;
            if(value.length>0 ){
                const regex = new RegExp(`^${value}`,'i');
                suggestion = list.sort().filter(v=>regex.test(v)).slice(0,6);
            }
            setSuggestion({suggestion})
        }
        console.log(suggestion.suggestion)
        const updateValue = (value)=>{
            setValue(value);
            setSuggestion([]);
        }
      
    return(
        
        <form >
        <input className={Style.desc} type="text" placeholder="Search over 1,000,000 recipes..." value={value} onChange={(e)=>onTextChange(e)}/>
                {suggestion.suggestion && value ? ( <ul className={Style.unorder}>
                { suggestion.suggestion.map(v=> <li onClick={()=>updateValue(v)}>{v}</li>)}
            </ul>):null}
           
                
            
        {/* {renderSuggestion} */}
        <button onClick={(event)=>{
            event.preventDefault();
            setValue("")
            return props.submitHandler(value)} 
            }
            className={Style.submit}>
            <i className='fa fa-search'></i> Search

        </button>
        </form>
    )
}
export default Form;