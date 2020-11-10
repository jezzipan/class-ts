"use strict";
//boolean (true/false)
var isOpen;
isOpen = true;
//string
var message;
message = "foo " + isOpen;
// number (int, float, hex, binario)
var total;
total = 0xff0;
// array type[]
var items;
items = ["foo", "bar"];
//notação genérica de array[]
var values;
values = [1, 2, 3];
// tuple 
var title;
title = [1, "foo", true];
//enum chave/valor
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer coisa NÃO É uma boa prática)
var coisa;
coisa = [1];
// void (vazio, sem retorno)
function logger() {
    console.log('foo');
}
// never (nunca retorna) 
function error() {
    throw new Error("error");
}
// object
var cart;
cart = {
    key: "fi"
};
//inferencia de tipos p/ não ser redundante
var message2 = "mensagem definida";
message2 = "1";
window.addEventListener("click", function (e) {
    console.log(e.target);
});
