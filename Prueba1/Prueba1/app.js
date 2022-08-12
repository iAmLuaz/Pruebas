let counter = 0;
//Funcion para quitar acentos
const removeAccents = (param) => {
    return param.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
//Funcion para recibir los datos y filtrarlos
document.addEventListener('input', e =>{
    if (e.target.matches('.searcher')) {
        document.querySelectorAll('.name').forEach(toggleClass => {
            removeAccents(toggleClass.textContent).toUpperCase().includes(removeAccents(e.target.value).toUpperCase())
            ?toggleClass.parentElement.classList.remove('boxhidden')
            :toggleClass.parentElement.classList.add('boxhidden')
        })
    }
})
//Funcion para filtrar membresias gold
document.getElementById('gold').onclick = filterGold;
function filterGold() {
    document.querySelectorAll('.membership').forEach(member => {
        member.textContent.includes('Gold')
        ?member.parentElement.classList.remove('boxhidden')
        :member.parentElement.classList.add('boxhidden')
    });
}
//Funcion para filtrar membresias diamond
document.getElementById('diamond').onclick = filterDiamond;
function filterDiamond() {
    document.querySelectorAll('.membership').forEach(member => {
        member.textContent.includes('Diamond')
        ?member.parentElement.classList.remove('boxhidden')
        :member.parentElement.classList.add('boxhidden')
    });
}
//Funcion para filtrar membresias platinum
document.getElementById('platinum').onclick = filterPlatinum;
function filterPlatinum() {
    document.querySelectorAll('.membership').forEach(member => {
        member.textContent.includes('Platinum')
        ?member.parentElement.classList.remove('boxhidden')
        :member.parentElement.classList.add('boxhidden')
    });
}
//Funcion para filtrar membresias carbon
document.getElementById('carbon').onclick = filterCarbon;
function filterCarbon() {
    document.querySelectorAll('.membership').forEach(member => {
        member.textContent.includes('Carbon')
        ?member.parentElement.classList.remove('boxhidden')
        :member.parentElement.classList.add('boxhidden')
    });
}
//
//Funcion para borrar filtros
document.getElementById('clearFilters').onclick = clearFilters;
function clearFilters() {
    document.querySelectorAll('div.box div').forEach(member => {
        member.parentElement.classList.remove('boxhidden')
    });
}
console.log(counter)