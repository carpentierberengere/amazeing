const main=document.querySelector("main")
main.className="sol"

const murMaze=document.createElement("div");
murMaze.className="mur";
main.appendChild(murMaze);

const solMaze=document.createElement("div");
solMaze.className="chemin";
main.appendChild(solMaze);

const multiline='***********.**S.....**.*.T*****.....*.******.***.*.******.*****.******.*****.******.......******.********.........****.******...***....********'

