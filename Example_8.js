/*
* In this example we want to create table and display it over the html page.
* */
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
    var tableContainer = document.getElementById("tableContent");
    tableContainer.innerHTML = generateMyTable();
})