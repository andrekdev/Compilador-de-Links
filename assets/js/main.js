const audio = new Audio('https://www.followchain.org/wp-content/uploads/2022/11/goofy-ahh-sounds.mp3')


const load = document.querySelector('.load ')


console.log(load)

function funcaoLoad() {
    load.classList.remove('load')
    load.classList.add('loadON')
    setTimeout(() => {

        redirecionarUSU()
    }, 1000)

}


const load2 = document.querySelector('.load2')




function funcaoLoad2() {
    load2.classList.remove('load2')
    load2.classList.add('loadON2')
    setTimeout(() => {

        redirecionarUSU2()
    }, 2000)

}



function clicarImagem() {
    audio.play()
}

function redirecionarUSU() {
    location.href = 'cliqueAcesso.html';
}

function redirecionarUSU2() {
    location.href = 'index.html';
}



//location.href = 'home.html';