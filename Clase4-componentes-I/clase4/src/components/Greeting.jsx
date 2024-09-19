import { useState } from "react";

const Greeting = ({message, otraProp}) => {

  const [count, setCount] = useState(0)
  const [countHover, setCountHover] = useState(0)

  const handleClick = () => {
    setCount(prevCount => prevCount + 1)
  }

  const handleHover = () => {
    setCountHover(prevCountHover => prevCountHover + 1)
  }
  
  return (
    <>
      <h1>{message}</h1>
      <button onClick={handleClick}>Hola!</button>
      <span>{count}</span>
      <div style={{width: 300, height: 200, backgroundColor: "gray"}} onMouseEnter={handleHover}>
        <span>{countHover}</span>
      </div>
    </>
  );
};

export default Greeting;
