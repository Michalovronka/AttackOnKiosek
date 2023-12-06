// [] - pole
/*
const foo = [5,12];

//index - poradove cislo nejake hodnoty
//   index       0        1        2     3  4  5     6
const names = ["Pepa", "Radek", "Radim", 5, 8, 9, "Novak"]

console.log(names[2]); //vypíše Radim
console.log(names[4]); //vypíše 8
names[4] = "Honza";
console.log(names[4]); //vypíše Honza
*/

//js object - {}
/*
//key:value
const urban = {
    hp: 1000,
    dmg: 1,
    as: 0.01,
    speed: 0.1
}
console.log(urban.hp) //1000
urban.hp -=500;
console.log(urban.hp) //500
*/



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const keys = {};


document.addEventListener("keydown", (e) =>{
    keys[e.code] = true;
});

//hlavní smyčka hry
const gameLoop = () =>{

    //resize
    resizeCanvas();

    //clearCanvas
    clearCanvas();

    //update
    update();

    //render
    render();

    //fps
    getFps();

    window.requestAnimationFrame(gameLoop);
}


const resizeCanvas = () =>{ 
    canvas.width = 1280;
    canvas.height = 720;
};

const clearCanvas = () =>{ 
    ctx.fillStyle = "white";
    ctx.fillRect(0,0, 1280, 720);
};

const update = () =>{ };
const render = () =>{ };
const getFps = () =>{ };


//když se nám stránka načte,spustíme funkci
window.onload = () =>{

    window.requestAnimationFrame(gameLoop);
} 