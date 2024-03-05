function generateSomeText(){
    var content = `
        <h2>Welcome to my WebPage Written with JavaScript and HTML.</h2>
        <p>This is amazing that JS is the most attractive front-back dev language in the world</p>
        <p>There are a lot of textbooks for learning JavaScript, just ask Mohammad!
    `;
    return content;
}

function generateMyTable(){
    var tableContent = `
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Diego</td>
                    <td>23</td>
                    <td>Montreal</td>
                </tr>
                <tr>
                    <td>Lingfang</td>
                    <td>20</td>
                    <td>Toronto</td>
                </tr>
            </tbody>
        </table>
    `;
    return tableContent;
}
document.addEventListener("DOMContentLoaded", function (){
    var textContainer = document.getElementById("content");
    textContainer.innerHTML = generateSomeText();
});

document.addEventListener("DOMContentLoaded", function (){
    var tableContainer = document.getElementById("tableContent");
    tableContainer.innerHTML = generateMyTable();
})