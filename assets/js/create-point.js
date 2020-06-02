function loadStates() {
  const selectUfs = document.querySelector('[name=uf]');

  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then((res) => res.json())
    .then((states) => {
      for (const state of states) {
        selectUfs.innerHTML += `<option  value="${state.id}">${state.nome}</option>`;
      }
    });
}

loadStates();

function getCities(e) {
  const selectCities = document.querySelector('[name=city]');
  const stateInput = document.querySelector('[name=state]');

  const index = e.target.selectedIndex;
  stateInput.value = e.target.options[index].text;

  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${e.target.value}/municipios`)
    .then((res) => res.json())
    .then((cities) => {
      for (const city of cities) {
        selectCities.innerHTML += `<option  value="${city.id}">${city.nome}</option>`;
      }

      selectCities.disabled = false;
    });
}

document
  .querySelector('[name=uf]')
  .addEventListener('change', getCities);
