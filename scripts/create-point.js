
function populateUFs() {
    const ufSelect = document.querySelector("select[name=UF]");
    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
    fetch(url)
    .then( (res) => res.json())
    .then( states => {
        for (const state of states) {
            ufSelect.innerHTML += `<option value = "${state.id}">${state.nome}</option>`
        }
        
    })
}

populateUFs()

function getCities(event) {
    const citysSelect = document.querySelector("[name=city]");
    const stateInput = document.querySelector("[name=state]");
    const ufValue = event.target.value
    const indexOfSelectState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectState].text
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
        
    fetch(url)
    .then( (res) => res.json())
    .then( cities => {
        for (const city of cities) {
            citysSelect.innerHTML += `<option value = "${city.id}">${city.nome}</option>`
        }
        
        citysSelect.disabled = false;

    })
}


document
    .querySelector("select[name=UF]")
    .addEventListener("change", getCities)
