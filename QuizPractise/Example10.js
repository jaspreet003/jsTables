/*
* Create a new css file as well as javascript and html files. Then, create a table with
* blue border and the header of the table should be light gray
*
* No tag of <p> is required but only use table. Also change the background of the page to
*  light pink
*
* Please note that since you have had the course of web development, this task should be menaingful
* to you.
* */


function createTable(){
    let content =
    `
    <table>
    
    <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Gender</th>
</tr>

<tr>
<td>Jaspreet</td>
<td>21</td>
<td>female</td>
</tr><tr>
<td>Jaspreet</td>
<td>21</td>
<td>female</td>
</tr><tr>
<td>Jaspreet</td>
<td>21</td>
<td>female</td>
</tr>
</table>
    `;
     return content;
}

document.addEventListener("DOMContentLoaded", function (){
    var textContainer = document.getElementById("content");
    textContainer.innerHTML = createTable();
});