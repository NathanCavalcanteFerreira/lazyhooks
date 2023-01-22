import { useState } from "react";

interface IUseToggle {
  (arg: boolean) : [boolean, () => void];
} 

export const useToggle: IUseToggle = (arg) => {
  const [value, setValue] = useState(arg);

  function toggleValue() {
    setValue((currentValue: boolean) => !currentValue);
  }
  
  return [value, toggleValue]; 
};
