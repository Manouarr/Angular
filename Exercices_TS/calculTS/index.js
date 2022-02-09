function additionner(nombre1, nombre2) {
    console.log(nombre1 + nombre2);
}
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    var n1 = document.querySelector("input[name=nombre1]").value;
    var n2 = document.querySelector("input[name=nombre2]").value;
    additionner(+n1, +n2);
});
