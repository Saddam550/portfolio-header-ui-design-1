const theme = document.querySelector('.themeColor')
function toggles() {
  theme.classList.toggle('themesChange')
}

const dynamicText = document.querySelector('#dynamicChange')
const dynamicWords = ['web desginer', 'web developer', 'public speaker']

let wordIndex = 0
let charIndex = 0
let wordDeleting = false

function typeEffect() {
  const carrentWord = dynamicWords[wordIndex]
  const currentCher = carrentWord.substring(0, charIndex)
  dynamicText.textContent = currentCher
  dynamicText.classList.add('stopBlinking')

  if (!wordDeleting && charIndex < carrentWord.length) {
    charIndex++
    setTimeout(typeEffect, 100)
  } else if (wordDeleting && charIndex > 0) {
    charIndex--
    setTimeout(typeEffect, 200)
  } else {
    wordDeleting = !wordDeleting
    dynamicText.classList.remove('stopBlinking')
    wordIndex = !wordDeleting
      ? (wordIndex + 1) % dynamicWords.length
      : wordIndex

    console.log(wordIndex)
    setTimeout(typeEffect, 1200)
  }
}
typeEffect()
