const input = document.querySelector(".ship-id");
const btn = document.getElementById("btn-check");
const message = document.querySelector(".message");

const id1 = '#DE324544JK'
const id2 = '#BC434555ER'

function disableButton() {
    btn.disabled = true;
}

function enableButton() {
    btn.disabled = false;
}
disableButton();

// Disable the button

input.addEventListener('input', (e)=> {
    const userInput = e.target.value;
    if(userInput === ''){
        disableButton()
    } else if ( userInput.trim().length <= 10) {
        disableButton()
        message.innerText= 'Shipping id less than 10 characters'
    } else{
        enableButton();
        message.innerText= ''
        // packageStatus(userInput)
    }
} )

btn.addEventListener('click',packageStatus)


function packageStatus(e) {
    e.preventDefault();
    const userInput = input.value;
    const trackId = document.querySelector('.track-id')
    console.log(userInput)
    const trackingResult = document.querySelector('.package')
    
    if(userInput === id1 || userInput === id2 ){
        trackingResult.style.display = 'block'
        trackId.innerHTML= `<strong>Tracking #:</strong> <br> ${userInput}`

    } else{
        trackingResult.style.display = 'none'
        message.innerText = "Incorrect Shiping Details , Check your details and fill in correctly."
    }
    
}



