//boolean (true/false)
let isOpen: boolean
isOpen = true

//string
let message: string
message = `foo ${isOpen}`


// number (int, float, hex, binario)
let total: number
total = 0xff0

// array type[]
let items: string[]
items = ["foo", "bar"]

//notação genérica de array[]
let values: Array<number>
values = [1, 2, 3]

// tuple 
let title: [number, string, boolean]
title = [1, "foo", true]

//enum chave/valor
enum Colors {
    white = '#fff',
    black = '#000'
}

// any (qualquer coisa NÃO É uma boa prática)
let coisa: any;
coisa = [1];

// void (vazio, sem retorno)
function logger(): void {
    console.log('foo')
}

// null / underfined não foi definido o valor. Não é bom atribuir a tipos primitivos
type Bla = string | undefined

// never (nunca retorna) 

function error(): never {
    throw new Error("error");
}

// object
let cart: object
cart = {
    key: "fi"
}

//inferencia de tipos p/ não ser redundante

let message2 = "mensagem definida"
message2 = "1"

window.addEventListener("click", (e) => {
    console.log(e.target);
});

