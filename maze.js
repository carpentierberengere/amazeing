const main = document.querySelector("main");

const multiline = 
`***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********`;

multiline.split('\n');

for (let i = 0; i < multiline.length; i++) { 
    const labyrinthe = document.createElement("div");
    labyrinthe.className = "labyrinthe";
    main.appendChild(labyrinthe);

    labyrinthe.textContent = multiline[i].split('');

    switch (multiline[i]) {
        case "*":
            labyrinthe.className = "mur";
            labyrinthe.textContent = "";
            break;
        case ".":
            labyrinthe.className = "chemin";
            labyrinthe.textContent = "";
            break;
        case "S":
            labyrinthe.className = "start";
            labyrinthe.textContent = "";
            break;
        case "T":
            labyrinthe.className = "finish";
            labyrinthe.textContent = "";
            break;
        case '\n': 
            labyrinthe.style.display = "none";
    }
};

//----------------------------------------------------PERSONNAGE CREATION BIBI-------------------------------------------------//

const bibi = document.createElement("div");
bibi.className = "bibi";
document.querySelector("body > main > div:nth-child(16)").appendChild(bibi);

//---------------------------------------------------TREASURE CREATION POUR LE FINISH LINE-------------------------------------//
const treasure = document.createElement("div");
treasure.className = "treasure";
document.querySelector("body > main > div:nth-child(27)").appendChild(treasure);

//------------------------------------------------------EVENT LISTENER TOUCHE POUR BOUGER R2D2-----------------------------------//

let pos = 16;

document.body.addEventListener("keydown", function move(e) {
    
    switch (e.code){
    case "ArrowLeft":
        pos-=1;
        if(document.querySelector("body > main > div:nth-child(" + pos + ")").classList.contains("mur")){
            console.log("NO");
            pos+=1;
        } else {
            document.querySelector("body > main > div:nth-child(" + pos + ")").appendChild(bibi);
        }
        break;

    case "ArrowRight":
        pos+=1;
        if (document.querySelector("body > main > div:nth-child(" + pos + ")").classList.contains("mur")){
            console.log("NO NO");
            pos-=1;
        } else if (document.querySelector("body > main > div:nth-child(" + pos + ")").classList.contains("finish")){
            document.querySelector("body > main > div:nth-child(" + pos + ")").appendChild(bibi);
            pos+=1;
            document.querySelector("body > main > div:nth-child(27)").removeChild(treasure);
            alert("YAY YOU FOUND ME!"); //---------MESSAGE POUR LE FINISH------------//
            
        } else {
        document.querySelector("body > main > div:nth-child(" + pos + ")").appendChild(bibi);
        }
        break;

    case "ArrowUp":
        pos -= 14;
        if(document.querySelector("body > main > div:nth-child(" + pos + ")").classList.contains("mur")){
            console.log("NO NO NO");
            pos += 14;
        } else {
        document.querySelector("body > main > div:nth-child(" + pos + ")").appendChild(bibi);
        }
        break;

    case "ArrowDown":
        pos += 14;
        if(document.querySelector("body > main > div:nth-child(" + pos + ")").classList.contains("mur")){
            console.log("NO NO NO NO");
            pos -= 14;
        } else {
        document.querySelector("body > main > div:nth-child(" + pos + ")").appendChild(bibi);
        }
        break;
    }
});
