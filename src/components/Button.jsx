import "./Alert.module.css";
import clsx from "clsx";
export const Button = ({ variant, children }) => {
  
  return <button className={clsx(variant)}>{children}</button>;
};