const url = 'https://api.adviceslip.com/advice'
const button = document.getElementById('btn')
const advice = document.querySelector('.advice')
const id = document.querySelector('.adviceId')

function apiAdvice() {
    fetch(url)
        .then(response => response.json()
        .then((data) => {
            advice.innerHTML = `"${data.slip.advice}"`
            id.innerHTML = `Advice #${data.slip.id}`
        }    
    ))
}
button.addEventListener('click', () => {
    apiAdvice();       
})