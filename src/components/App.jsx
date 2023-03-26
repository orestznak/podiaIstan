import React from "react";
import Counter from "./Counter/Counter";
import Dropdown from "./Dropdown/Dropdown";
import ColorPicker from "./ColorPicker/ColorPicker";

const colorPickersOptions=[
  {label: 'red', color: '#F44336'},
  {label: 'green', color: '#4CAF50'},
  {label: 'blue', color: '#2196F3'},
  {label: 'grey', color: '#607D8B'},
  {label: 'pink', color: '#E91E63'},
  {label: 'indigo', color: '#3F51B5'}

]

export const App = () => {
  return (
    <div>
      <h1>Стан компонента</h1>
      <Counter />
      <Dropdown />
      <ColorPicker options={colorPickersOptions}/>
    </div>
  );
};
