// Intefaces

// Definição
interface Game {
    title: string;
}

interface DLC {
    extra: string;
}

// inteseção / extend

interface GameCollection extends Game, DLC {}

// implements

class CreateGame implements GameCollection { }

// declarar função

interface getSimilars {
    (title: string): void;
}

// =========== Diferenças ===========//
interface ID extends number {}

// não é possivel declarar Tuplas na interface
interface Tuple {
    0: number;
    1: number;
}

[1, 2, 3, 4, "ssas"] as Tuple;

// Pode ter múltiplas declarações e une o mesmo nome

interface JQuery {
    a: string;
}

interface JQuery {
    b: string;
}


const $: JQuery = {
    a: "bla",
    b: "foo",
};

//vantagem: pra criação de libs por ser + extensiva.
// criando objetos/classe (POO)
