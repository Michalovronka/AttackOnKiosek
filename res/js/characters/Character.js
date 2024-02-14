export class Character {
  static charactersData;
  /*
  const foo = new Character();
  foo.name; - jmeno patri nejakemu objektu

  Když dana vec patri tride - je static
  Character.charactersData - zapis vypada takto
  foo.characterData - nebude fungovat
  */

  constructor(type) {
    this.img = new Image();
    this.setType(type);
    this.img.src = this.path;
    this.ratio = 0.3;
    this.size = {
      width: 600 * this.ratio,
      height: 634 * this.ratio,
    };
    
    this.frame = {
      counter: 0,
      index: 1,
      maxIndex: 11,
      width: 100,
      height: 100
    }

    this.state = 0;
    this.animationSpeed = 4;
  }

  // == - porovnáváme JEN hodnotu
  // === - porovnáváme hodnotu i datový typ (string, int...)
  setType(type) {
    Character.charactersData.map((obj)=>{
      if(type === obj.name){
        this.sprites = obj.sprites;
        this.hp = obj.stats.hp;
        this.maxHp = this.hp;
        this.dmg = obj.stats.dmg;
        this.speed = obj.stats.speed;
        this.side = obj.stats.side;
        this.velocity = {
          x: obj.stats.velocity * this.speed,
        };
        this.position = {
          x: obj.stats.position,
          y: 350
        }
        return;
      }
    })
  }

  animate(ctx){
    let movementX = this.position.x;
    if( this.side === 1){
      movementX = 0;
    }
    ctx.drawImage(
      this.img,
      this.frame.width * this.frame.index,
      0,
      this.frame.width,
      this.frame.height,
      movementX,
      this.position.y,
      this.size.width,
      this.size.height
    );

    if(this.frame.index >= this.frame.maxIndex) return this.frame.index = 0;
    this.frame.counter++;

    if(this.frame.counter >= this.animationSpeed){
      this.frame.index++;
      this.frame.counter = 0;
    }
    

  }

  draw(ctx) {
    ctx.save();

    if (this.side === 0) {
      this.animate(ctx);
      return ctx.restore();
    }
    ctx.translate(this.position.x + this.size.width, 0);
    ctx.scale(-1, 1);
    this.animate(ctx);
    ctx.restore();
  }

  update() {
    switch (this.state) {
      case 0:
        this.img.src = this.sprites.movement.path;
        this.frame.maxIndex = this.sprites.movement.frames;
        this.frame.width = this.sprites.movement.size.width;
        this.frame.height = this.sprites.movement.size.height;
        this.move();
        break;
      case 1:
        this.img.src = this.sprites.attack.path;
        this.frame.maxIndex = this.sprites.attack.frames;
        this.frame.width = this.sprites.attack.size.width;
        this.frame.height = this.sprites.attack.size.height;
        break;
      case 2:
        console.log(this.name + " dies ");
        this.hp = this.maxHp;
        if(this.side === 0) return this.position.x = -200;
        this.position.x = 1400;
        break;
      default:
    }
  }

  move() {
    this.position.x += this.velocity.x;
  }

  attack(enemy){
    if(enemy === undefined){
      enemy.state = 2;
    }
    enemy.hp -= this.dmg;
    if(enemy.hp <= 0){
      enemy.state = 2;
    }
  }

  static detectCollision(friendly, enemy){
    if
    (friendly.position.x <
      enemy.position.x + enemy.size.width * 0.3 + enemy.size.width * 0.2 &&
    friendly.position.x +
      friendly.size.width / 2 +
      friendly.size.width * 0.2 >
      enemy.position.x + enemy.size.width * 0.3){

        friendly.state = 1;
        enemy.state = 1;
        friendly.attack(enemy);
        enemy.attack(friendly);
        friendly.update();
        enemy.update();
      }
      friendly.state = 0;
      enemy.state = 0;
      friendly.update();
      enemy.update();
  }
}

//this - slovo které ukatuje na daný objekt
//funkce - stoji sama o sobě
//metoda - taky funkce, ale patří nějakýmu objektu
//instance - kopie od šablony - object
//constructor - metoda, ktera se vola kdyz vytvorime instanci
//name - parametr, "Urban"... - argument

//př. - const myCharacter = new Character("Urban", 100, 5, 0,5);
//("Urban...") - argumenty , (name, hp...) - parametry
