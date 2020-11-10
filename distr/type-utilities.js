"use strict";
// São utilitarios p/ trabalhar com tipos. Com base em generics
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Readonly no objeto
var todo = {
    title: "Assistir Lovecraft Country",
    description: "Entender a estética de filmes de horror com viés racial",
    completed: false,
};
console.log(todo);
// todo.completed = true;
// Partial
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
var todo3 = {
    title: "Fechar",
    completed: false
};
var todo4 = {
    title: "Fechar",
    completed: false
};
