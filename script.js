let daily = document.querySelector('.daily')
let weekly = document.querySelector('.weekly')
let monthly = document.querySelector('.monthly')
let imgCard = document.querySelectorAll('.img_card')
let backgroundCard = document.querySelectorAll('.background')
let titleCard = document.querySelectorAll('.title_card')
let currentTime = document.querySelectorAll('.current_time')
let lastTime = document.querySelectorAll('.last_time')
let currentOption = 'weekly'

daily.addEventListener('click', () => {
    document.querySelector(`.${currentOption}`).classList.remove('current_option')
    daily.classList.add('current_option')
    currentOption = 'daily'
    setData()
})

weekly.addEventListener('click', () => {
    document.querySelector(`.${currentOption}`).classList.remove('current_option')
    weekly.classList.add('current_option')
    currentOption = 'weekly'
    setData()
})

monthly.addEventListener('click', () => {
    document.querySelector(`.${currentOption}`).classList.remove('current_option')
    monthly.classList.add('current_option')
    currentOption = 'monthly'
    setData()
})

function setData() {
    fetch('data.json').then((response) => {
        response.json().then((activities) => {
            for (let i = 0; i < titleCard.length; i++) {
                titleCard[i].innerHTML = activities[i].title
                currentTime[i].innerHTML = `${activities[i]['timeframes'][currentOption]['current']}hrs`
                lastTime[i].innerHTML =
                    `Last ${(currentOption.replace('ily','y').replace('ly', ''))} - ${activities[i]['timeframes'][currentOption]['previous']}hrs`
                backgroundCard[i].style.backgroundColor = `var(--${activities[i].color})`
                imgCard[i].src =
                    `images/icon-${((titleCard[i].innerHTML).replace(' ', '-')).toLocaleLowerCase()}.svg`
            }
        })
    })
}

setData()