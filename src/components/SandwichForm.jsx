import React,{useState} from 'react';

const SandwichForm = (props) => {


    // const [name,setName] = useState("");
    // const [protein,setProtein] = useState("");
    // const [bread,setBread] = useState("");
    // const [calories,setCalories] = useState(0);
    const [sandwich,setSandwich] = useState({
        name:"",
        protein: "",
        bread: "",
        calories: 0
    })
    const [display,setDisplay] = useState(null);
    // const [popup,setPopup] = useState(false);

    const handleSandwich = (e) => {
        setSandwich({
            ...sandwich,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert("You have built a sammich");
        setDisplay(sandwich);
        setSandwich({
            name:"",
            protein: "",
            bread: "",
            calories: 0
        })
    }
    return (
        <div>
            <form className="col-5 mx-auto my-5" onSubmit={handleSubmit}>
                <h2>Build A Sammich:</h2>
                <div className="form-group">
                    <label>Sandwich Name:</label>
                    <input 
                        className="form-control"
                        type="text"
                        name="name"
                        value={sandwich.name}
                        onChange={handleSandwich}
                    />
                </div>
                <div className="form-group">
                    <label>Protein:</label>
                    <input 
                        className="form-control"
                        type="text"
                        name="protein"
                        value={sandwich.protein}
                        onChange={handleSandwich}
                    />
                </div>
                <div className="form-group">
                    <label>Bread:</label>
                    <input 
                        className="form-control"
                        type="text"
                        name="bread"
                        value={sandwich.bread}
                        onChange={handleSandwich}
                    />
                </div>
                <div className="form-group">
                    <label>Calorie Count:</label>
                    <input 
                        className="form-control"
                        type="number"
                        name="calories"
                        value={sandwich.calories}
                        onChange={handleSandwich}
                    />
                </div>
                <input type="submit" className="btn btn-warning btn-outline-dark" value="Build" />
            </form>
            {
                display ? 
                <div>
                    <p>{display.name} has {display.calories} calories:</p>
                    <p>{display.bread}</p>
                    <p>{display.protein}</p>
                    <p>{display.bread}</p>
                </div> : null
            }
        </div>
    );
}

export default SandwichForm;