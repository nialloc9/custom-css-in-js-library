import uniqid from "uniqid";

const styleMap = {
    backgroundColor: "background-color",
    color: "color",
    margin: "margin",
    padding: "padding",
    border: "border",
    width: "width",
    textAlign: "text-align"
}

/**
 * @description generates a css attribute
 * @param {string} attr 
 * @param {string} value 
 */
export const generateAttribute = (attr, value) => {
    if(!styleMap[attr]) {
        console.error(`${attr} not currently supported.`)
        return ""
    }

    return `${styleMap[attr]}: ${value}; `
}

/**
 * @description returns a unique string
 */
export const generateUniqueName = () => uniqid();