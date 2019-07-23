import React from 'react';
import { styled } from "./cssInJs"

function App() {

  const style = { backgroundColor: "red", width: "200px", margin: "auto", padding: "10px", color: "white", textAlign: "center" };

  const style2 = { backgroundColor: "green", width: "200px", margin: "10px auto", padding: "10px", color: "white", textAlign: "center" };

  const StyledComponent = styled("div", style);
  const StyledComponentTwo = styled("p", style2);

  return (
    <div>
      <StyledComponent>Hello React London</StyledComponent>
      <StyledComponentTwo>Super simple. Super awesome CSS in JS.</StyledComponentTwo>
    </div>
  )
}

export default App;
