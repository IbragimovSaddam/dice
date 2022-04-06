const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const h1 = document.querySelector('h1')

const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    const Random1 = Math.floor(Math.random() * 6 + 1)
    const Random2 = Math.floor(Math.random() * 6 + 1)

    img1.src = `images/dice${Random1}.png`
    img2.src = `images/dice${Random2}.png`

    if(Random1 > Random2) {
        h1.textContent = "birinchi o'yinchi g'olib "
    } else 
    if(Random1 < Random2) {
        h1.textContent =  "ikkinchi o'yinchi g'olib"
    } else 
    if(Random1 = Random2) {
        h1.textContent = "g'olib aniqlanmadi"
    }
})





