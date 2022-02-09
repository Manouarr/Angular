
function additionner(nombre1 : number, nombre2: number) {
    console.log(nombre1 + nombre2);
}

document.querySelector("form").addEventListener("submit", function(e : Event) {
    e.preventDefault();
    let n1 = (document.querySelector("input[name=nombre1]") as HTMLInputElement).value;
    let n2 = (document.querySelector("input[name=nombre2]") as HTMLInputElement).value;

    additionner(+n1, +n2);
});