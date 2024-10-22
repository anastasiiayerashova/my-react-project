// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import {Alert} from "./Alert"

// export default function App() {
//   return (<div>
//     <h1>Products</h1>
//     <Product name="Tacos With Lime"
//       price={10.99} />
//     <Product name="Fries and Burger"
//       imgUrl='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640'
//       price={14.29}/>
    
//   </div>)
// }
import { Button } from "./Button";
import { HiUser } from "react-icons/hi";
const LoginButton = () => {
  
  return <Button variant="info">Login</Button>;
};

// FollowButton.jsx
const FollowButton = () => {
  
  return <Button variant="secondary">Follow</Button>;
};
export const App = () => {
  return (
    <>
      <Alert variant="info"><HiUser size="24" color="black"/>
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" elevated>
        Please update your profile contact information
      </Alert>
      <LoginButton>Login</LoginButton>
    </>
  );
};