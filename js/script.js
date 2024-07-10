const body = document.getElementById('body');
const btn = document.getElementById('btn');
const icon = document.getElementById('btn_icon')


btn.addEventListener('click', () => {
    body.classList.toggle('darkmode');
    if (body.classList.contains('darkmode')) {
        icon.src = './assets/img/luna.png'
    }else {
        icon.src = "./assets/img/sol.png"
    }
})

