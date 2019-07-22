import React from "react"
import { generateAttribute, generateUniqueName } from "./utils"

/**
 * @description creates a react component and attaches style to head for component
 * @returns {ReactNode}
 */
export default (element, style) => {
    const css = Object.keys(style).reduce((total, curr) => {
        total += generateAttribute(curr, style[curr]);
        return total;
    }, " ") 

    const className = generateUniqueName();

    const totalStyle = `.${className} {${css}}`

    const head = document.head || document.getElementsByTagName('head')[0];

    const styleElement = document.createElement('style');

    head.appendChild(styleElement);

    styleElement.type = 'text/css';

    styleElement.appendChild(document.createTextNode(totalStyle));

    return (props) => React.createElement(element, { ...props, className });
}