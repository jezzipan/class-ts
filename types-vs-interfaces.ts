// Types

// Definição

type Jogo = {
    title: string;
};

type DLCT = {
    extra: string;
};

// Intersection

type GameCollectionT = Game & DLCT;

// implements

class CreateJogo implements GameCollection { }

// declarar função

type getSimilar = (title: string) => void;

// =========== Diferenças ===========//

// permite declarar tipos primitivos
type Ident = string | number;

// pode declarar tuplar normalmente

type TupleT = [number, number];

[1, 2, 3] as TupleT;

// Apenas uma declaração por escopo

type JQueryT = { a: string };
type JQueryT = { b: string };

// Mais usado e recomendado; Bom para iniciar
// React - Props

//CONSISTÊNCIAS!