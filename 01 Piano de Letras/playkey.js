function removeTransition(e) {
    console.log(e)
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing')
    console.log(this)
}

function playSound(e) {
    console.log(e)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    // console.log(audio)
    if (!audio) return;

    key.classList.add('playing')
    audio.currentTime = 0
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));

// keys.forEach(key => (key.addEventListener('transitionend', removeTransition)))

window.addEventListener('keydown', playSound)
window.addEventListener('transitionend', removeTransition)