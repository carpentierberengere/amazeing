//-----------------------------------------------------------//

const main = document.querySelector('main')
main.className = 'main'

const mur = document.createElement('div')
mur.className = 'mur'

const way = document.createElement('div')
way.className = 'way'

const start = document.createElement('div')
start.className = 'start'

const finish = document.createElement('div')
finish.className = 'finish'


//-------------MULTILINE-------------------------------------//
const multiline = `***********.**S.....**.*.T*****.....*.******.***.*.******.*****.******.*****.******.......******.********.........****.******...***....********`

console.log(multiline.split(' ')) //-------['line1", 'line2', 'line3']------//

console.log(multiline[0].split('')) //------['l', 'i', 'n', 'e', '1]----------//

for (let i=0; i<multiline.length;i++){
    const ligne = document.createElement('div')
    ligne.className = 'line'

    if (multiline[i] == '*') {
        line.className = 'mur'
    }
    
    if (multiline[i] == '.') {
        line.className = 'way'
    }
    
    if (multiline[i] == 'S') {
        line.className = 'start'
    }
    
    if (multiline[i] == 'T') {
        line.className = 'finish'
    }

    main.appendChild(ligne)
    ligne.appendChild(start)

}

//--------------------CONST JOUEUR--------------------------  //

const character = document.createElement('div')
character.className = 'bibi'
document.querySelector("main> div.start").appendChild(character)

//--------------------Labyrinthe------------------------------//

let posX = 15

document.addEventListener('keydown', function(e){
    if (e.key === 'ArrowRight'){
        console.log(e)
        posX++
        if (document.querySelector('main > div:nth-child('+ posX +')').classList.contains('mur')){
            posX -= 1
            document.querySelector('main > div:nth-child('+posX+')').appendChild(character)
        }else {
            document.querySelector('main > div:nth-child(' + posX + ')').appendChild(character)
        }
    }

    if (e.key === 'ArrowLeft') {
        console.log(e)
        posX--
        if (document.querySelector('main > div:nth-child(' + posX + ')').classList.contains('mur')) {
            posX += 1
            document.querySelector('main > div:nth-child(' + posX + ')').appendChild(character)
        } else {
            document.querySelector('main > div:nth-child(' + posX + ')').appendChild(character)
        }


    }

    if (e.key === 'ArrowUp') {
        console.log(e)
        posX -= 13
        if (document.querySelector('main > div:nth-child(' + posX + ')').classList.contains('mur')) {
            posX += 13
            document.querySelector('main > div:nth-child(' + posX + ')').appendChild(character)
        } else {
            document.querySelector('main> div:nth-child(' + posX + ')').appendChild(character)
        }

    }

    if (e.key === 'ArrowDown') {
        console.log(e)
        posX += 13
        if (document.querySelector('main > div:nth-child(' + posX + ')').classList.contains('mur')) {
            posX -= 13
            document.querySelector('main > div:nth-child(' + posX + ')').appendChild(character)
        }else {
            document.querySelector('main > div:nth-child(' + posX + ')').appendChild(character)
        }


    }

    if(document.querySelector('main > div:nth-child(' + posX + ')').classList.contains('finish')) {
        alert('You win!')
    }
})
