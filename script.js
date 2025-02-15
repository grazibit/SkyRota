// Adiciona um evento de escuta ao objeto "window" para detectar a rolagem da página até o tamanho 400
window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 400)
})