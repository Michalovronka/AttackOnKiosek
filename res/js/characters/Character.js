export class Character{

    constructor(name, hp, dmg, speed){
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.speed = speed;
        console.log(this);
    }

}

//funkce - stoji sama o sobě
//metoda - taky funkce, ale patří nějakýmu objektu
//instance - kopie od šablony - object
//constructor - metoda, ktera se vola kdyz vytvorime instanci
//name - parametr, "Urban"... - argument

//př. - const myCharacter = new Character("Urban", 100, 5, 0,5);