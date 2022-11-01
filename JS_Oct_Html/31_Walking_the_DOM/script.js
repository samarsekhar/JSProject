// The DOM allows us to do anything with elements and their contents, but first we need to reach the corresponding DOM object.

// All operations on the DOM start with the document object. That’s the main “entry point” to DOM. From it we can access any node.

// Here’s a picture of links that allow for travel between DOM nodes:

for (let i=0; i<document.body.childNodes.length; i++) {
    alert(document.body.childNodes[i]);
    // Text, div, text, ul....., script
}