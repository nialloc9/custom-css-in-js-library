# custom-css-in-js-library

<img src="https://raw.githubusercontent.com/nialloc9/custom-css-in-js-library/master/assets/result.png" alt='css in js' width="100">

# Redux Push

An example of how to create a CSS in JS library.

### How it works

- styled function using element type and style object

        import { styled } from "redux";
        
        const style = { backgroundColor: "red", width: "200px", margin: "auto", padding: "10px", color: "white", textAlign: "center" };

        const style2 = { backgroundColor: "green", width: "200px", margin: "10px auto", padding: "10px", color: "white", textAlign: "center" };

        const StyledComponent = styled("div", style);

        return <StyledComponent>Hello React London</StyledComponent>

- creates style element 

- generates string containing css class with unique name

- puts the string inside style element and attaches to head

- adds classname to component and renders component


### Getting started
    $ yarn start
