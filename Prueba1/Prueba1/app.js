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
document.getElementById('filtermember').onclick = filterGold;
function filterGold() {
    document.getElementsByClassName('membership')
    if (condition) {
        
    }
    console.log('working')
}