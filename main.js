
const hands = [...document.querySelectorAll('.section-hands i')]
const btnPlay = document.querySelector('.play')
const showPlayerHand = document.querySelector('.player-hand')
const showComputerHand = document.querySelector('.computer-hand')
const result = document.querySelector('.result')
const errorMsg = document.querySelector('.error')


const gameSummary = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const handChoice = {
    playerHand: '',
    computerHand: ''
}


const computerChoice = () => {
    const computer = hands[Math.floor(Math.random() * hands.length)].dataset.item
    handChoice.computerHand = computer

}

function playerChoice() {
    hands.forEach(hand => {
        hand.style.transform = 'scale(1.0)'
    })
    const player = this.dataset.item
    handChoice.playerHand = player 
    this.style.transform = 'scale(1.3)'
    
}


const showYourChoice = (player) => {
    if(player === 'rock'){
        showPlayerHand.innerHTML = '<i class="fa-solid fa-hand-back-fist rock"></i>'
    }else if (player === 'paper') {
        showPlayerHand.innerHTML = '  <i class="fa-solid fa-hand paper"></i>'
    }else if (player === 'scissors'){
        showPlayerHand.innerHTML = '<i class="fa-solid fa-hand-scissors scissors"></i>'
    }
    
}

const showComputerChoice = (computer) => {
    if(computer === 'rock'){
        showComputerHand.innerHTML = '<i class="fa-solid fa-hand-back-fist rock"></i>'
    }else if (computer === 'paper') {
        showComputerHand.innerHTML = '  <i class="fa-solid fa-hand paper"></i>'
    }else if (computer === 'scissors'){
        showComputerHand.innerHTML = '<i class="fa-solid fa-hand-scissors scissors"></i>'
    }
}

const showDown = (player, computer) => {
    if((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')){
        result.textContent = 'You won'
        result.style.color = 'green'
        document.querySelector('.player-score span').textContent = ++gameSummary.wins
    }else if(player === computer){
        result.textContent = 'Draw'
        result.style.color = 'yellow'
        document.querySelector('.draw span').textContent = ++gameSummary.draws;
    }else {
        result.textContent = 'You lost'
        result.style.color = 'red'
        document.querySelector('.computer-score span').textContent = ++gameSummary.losses
    }
}


const startGame = () => {
    if(handChoice.playerHand === ''){
        errorMsg.style.visibility = 'visible'
        return
    }
    
   
    errorMsg.style.visibility = 'hidden'
    computerChoice()
    showYourChoice(handChoice.playerHand)
    showComputerChoice(handChoice.computerHand)
    showDown(handChoice.playerHand , handChoice.computerHand)
    document.querySelector('.rounds span').textContent = ` ${++gameSummary.games}`

    hands.forEach(hand => {
        hand.style.transform = 'scale(1.0)'
    })

    handChoice.playerHand = ''
}


hands.forEach(hand => {
    hand.addEventListener('click', playerChoice)
})

btnPlay.addEventListener('click', startGame)


