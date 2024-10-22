// export default function Product({name, imgUrl='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640', price}) {

//   return (<div>
//     <h2>{name}</h2>
//    <img src={imgUrl} alt="Tacos With Lime" width="640" />
//     <p>Price: {price} credits</p>
//   </div>)
// }

import css from "./Alert.module.css";
import clsx from "clsx";




const getBgColor = (variant) => {
  switch (variant) {
    case 'info':
      return 'blue';
    case 'success':
      return 'green';
    case 'error':
      return 'red';
    case 'warning':
      return 'orange';
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

export const Alert = ({ variant, outlined, elevated, children }) => {

  return (
    <p className={clsx(css[variant], outlined && css.isOutlined, elevated && css.isElevated)}>
      {children}
    </p>
  );
};