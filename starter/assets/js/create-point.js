// Dados da Entidade
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

  selectCities.innerHTML = '<option  value="">Selecione a Cidade</option>';
  selectCities.disabled = true;

  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${e.target.value}/municipios`)
    .then((res) => res.json())
    .then((cities) => {
      for (const city of cities) {
        selectCities.innerHTML += `<option  value="${city.nome}">${city.nome}</option>`;
      }

      selectCities.disabled = false;
    });
}

document
  .querySelector('[name=uf]')
  .addEventListener('change', getCities);

// Itens de Coleta
let selectedItems = [];
const itemsToCollect = document.querySelectorAll('.items-grid li');
const collectedItems = document.querySelector('[name=items]');


function handleSelectedItem(e) {
  const itemLi = e.target;

  // toggle class "selected"
  itemLi.classList.toggle('selected');

  const itemId = itemLi.dataset.id;

  // Selected Items
  const alreadySelected = selectedItems.findIndex((item) => item === itemId);

  if (alreadySelected >= 0) {
    const filteredItems = selectedItems.filter((item) => item !== itemId);

    selectedItems = filteredItems;
  } else {
    selectedItems.push(itemId);
  }

  collectedItems.value = selectedItems;
}

for (const item of itemsToCollect) {
  item.addEventListener('click', handleSelectedItem);
}
