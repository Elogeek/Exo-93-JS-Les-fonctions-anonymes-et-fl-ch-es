let button1 = document.getElementById('alert');
let button2 = document.getElementById('somme');

button1.addEventListener("click",() => {
    alert("Hello world !");
})
button2.addEventListener("click", () => {
    let div = document.createElement("div");
    div.innerHTML = " 5 + 6 = " + (5 + 6);
    document.body.appendChild(div);
})