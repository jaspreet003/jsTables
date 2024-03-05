/*
* As mentioned earlier, javascript is not only for backend development. In this example, we will
* learn how to run an html code along with javascript.
* See below example.
*  */

// firstly, let's create a new div element
var newDiv = document.createElement("div")

// now we set HTML content for the div
newDiv.innerHTML = `
    <h1>Hello From JavaScript!</h1>
    <p>This HTML content is generated using JS.</p> 
`;
// now we can append the new div to the body of the document.
document.body.appendChild(newDiv)