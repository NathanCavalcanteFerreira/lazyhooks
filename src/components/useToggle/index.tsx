import { useState } from "react";

export interface IUseToggle {
  (arg: boolean) : [boolean, () => void];
} 

export const useToggle: IUseToggle = (arg) => {
  const [value, setValue] = useState(arg);

  function toggleValue() {
    setValue((currentValue: boolean) => !currentValue);
  }
  
  return [value, toggleValue]; 
};
