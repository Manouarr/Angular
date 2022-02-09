
function additionner(nb1, nb2) {
    return nb1 + nb2;
}

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    let resAddition = additionner(
        parseInt(this.nombre1.value),
        +this.nombre2.value);

    console.log(resAddition);
    // console.log(typeof this.nombre1.valueAsNumber);
});

