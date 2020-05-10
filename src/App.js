import React, { useState } from "react";
import "./App.css";
import CustomButton from "./Components/CustomButton";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [totalValue, setTotalValue] = useState(0);
  const [buttonValue, setButtonValue] = useState([
    { id: 0, value: 0, count: 0, flag: false, intValue: 12, operator: "+" },
    { id: 1, value: 0, count: 0, flag: false, intValue: 3, operator: "+" },
    { id: 2, value: 0, count: 0, flag: false, intValue: -2, operator: "-" },
  ]);

  const clickHandler = (id) => {
    console.log("clicked", id);
    const newButtonArray = [...buttonValue];

    newButtonArray[id].count = newButtonArray[id].count + 1;
    console.log("count value ", newButtonArray[id].count);

    newButtonArray[id].value =
      newButtonArray[id].intValue * newButtonArray[id].count;
    console.log("button value ", newButtonArray[id].value);

    //let newtotalValue = computeTotal();

    let newtotalValue =
      buttonValue[0].value + buttonValue[1].value + buttonValue[2].value;

    console.log("totalvalue", newtotalValue);

    setTotalValue(newtotalValue);

    newButtonArray[id].flag = true;

    console.log("Button Array value ", newButtonArray);
    setButtonValue(newButtonArray);
  };

  const computeTotal = () => {
    buttonValue.forEach((button) => {
      let value = 0;
      value = parseInt(value) + parseInt(button.value);
      console.log("value ", value);
      return value;
    });
  };

  return (
    <div className="App">
      <h2 className="App-header">Counter APP</h2>
      {buttonValue.map((button) => (
        <CustomButton
          key={button.id}
          operator={button.operator}
          intValue={button.intValue}
          value={button.value}
          count={button.count}
          id={button.id}
          clickHandler={clickHandler}
        />
      ))}
      <hr></hr>
      <h4>
        <span>Total Value = {totalValue}</span>
      </h4>
      <hr></hr>
    </div>
  );
}

export default App;
