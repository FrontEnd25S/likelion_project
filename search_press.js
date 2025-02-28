let input = document.getElementById("search_input");
let buttons = document.getElementById("search_submit");
input.addEventListener("keyup", e=> {
e.preventDefault();
if (e.key === "Enter") {
    buttons.click();
}   
});