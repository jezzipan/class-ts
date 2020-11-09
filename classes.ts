// protected: nas subclasse ou classes extendidas | private: dentro da classe
// readonly não pode ser editado na classe
// set | get definir novos valores ou funcoes
// classe abstrata são modelos p/ outras classe mas n é possivel criar novos objetos


abstract class UserAccount {
    public name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old`);
        
    }
}

class CharAccount extends UserAccount {
    nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }

    get getLevel() {
        console.log("---GET---");     
        return this.level
    }
    set setLevel(level: number) {
        console.log("---SET---");     
         this.level = this.level
    }

    logCharDetails(): void {
        console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} 
        at level ${this.level}`
        );
    }
}

// const jezz = new UserAccount("Jessica", 30);
// console.log(jezz);
// jezz.logDetails();

const maria = new CharAccount("Maria", 35, " mariamariah", 80);
console.log(maria);
console.log(maria.level);
maria.logDetails();
maria.logCharDetails();

maria.setLevel = 499;

console.log(maria.getLevel);
