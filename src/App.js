import { useState } from "react";
 
import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {

  const [userInput, setuserInput] = useState({
        initialInvestment :1000,
        annualInvestment : 1200,
        expectedReturn: 8,
        duration:10
    })

    function handleChange(indentifier, newValue){
        setuserInput((previousInput) =>{
            return {
                ...previousInput,
                [indentifier]:+newValue
            }
        });
    }

  return (
    <div>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results input={userInput}/>
    </div>
  );
}

export default App;
