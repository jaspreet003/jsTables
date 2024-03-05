/*
* Write a simple javascript code with paragraph tag. Then develop a driver HTML code to
* call the JS file. Finally, you should be able to run your html code over the browser.
* */
function generateSomeText(){
    var content = `
        <h2>Welcome to my WebPage Written with JavaScript and HTML.</h2>
        <p>This is amazing that JS is the most attractive front-back dev language in the world</p>
        <p>There are a lot of textbooks for learning JavaScript, just ask Mohammad!
    `;
    return content;
}

document.addEventListener("DOMContentLoaded", function (){
    var textContainer = document.getElementById("content");
    textContainer.innerHTML = generateSomeText();
});