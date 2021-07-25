// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

let like = document.querySelectorAll(".like-glyph");
for (let x = 0; x < like.length; x++){
    like[x].addEventListener('click', () => heartSwitcher(like[x])
  )
}

function heartSwitcher(element){
  mimicServerCall()
  .then(()=> {if (element.innerHTML === EMPTY_HEART){
      element.innerHTML = FULL_HEART
      element.classList.add('activated-heart')
    }else if (element.innerHTML === FULL_HEART){
      element.innerHTML = EMPTY_HEART
      element.classList.remove('activated-heart') 
  }
  
})
  .catch((error)=>{
    const modal = document.querySelector("#modal")
    modalP = modal.querySelector("#modal-message")
    modal.classList.remove("hidden")
    modalP.innerText = error;
    setTimeout(()=>modal.classList.add("hidden"), 3000)
  
  })
}

// classList add, remove, contains
// cant seem to put functions between fetch/fetch equivalent and .then
//should catched come before .thens? does it matter? the instructions
//had the catch come first./