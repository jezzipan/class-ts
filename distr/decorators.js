"use strict";
// // // Declaração iniciada anexada numa classe, para add coisas novas, validações. feature experimental tanto no ts quanto no EC
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// // // @Component
// // // @Selector
// // // @useState("hellowwww")
// // // Factory
// // // function Logger(prefix: string) {
// // //     return (target) => {
// // //         console.log(`${prefix} - ${target}`);
// // //     };
// // // }
// // // function log(target) {
// // //     console.log(target);
// // // }
// // // @log
// // // class Foo {}
// // function setAPIVersion(apiVersion: string) {
// //     return (constructor) => {
// //         return class extends constructor {
// //             version = apiVersion
// //         }
// //     }
// // }
// // // decorator - anotar a versão da API
// // @setAPIVersion("2.0.0")
// // class API { }
// // console.log(new API());
// // // Class decorator
// // // Property decorator
// function minLenght(lengh: number) {
//     return (target: any, key: string) => {
//         let val = target[key]
//         const getter = () => val;
//         const setter = (value: string) => {
//             if (value.length < lengh) {
//                 console.log(`Erro: Não é possivel crir ${key} com tamanho menor que ${lengh}.`)     
//             } else {
//                 val = value
//             }
//         }
//         Object.defineProperty(target, key, {
//             get: getter,
//             set: setter,
//         });
//     };
// }
// class Movie {
//     //validação se for < 5 === error
//     @minLenght(5)
//     title: string;
//     constructor(t: string) {
//         this.title = t;
//     }
// }
// const movie = new Movie("A Cor Púrpura");
// console.log(movie.title);
// // // Method decorator (quando o metodo for chamado)
function delay(ms) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Esperando " + ms + "...");
            setTimeout(function () {
                originalMethod.apply(_this, args);
            }, ms);
            return descriptor;
        };
    };
}
var Greeter = /** @class */ (function () {
    function Greeter(g) {
        this.greeting = g;
    }
    //esperar um tempo
    // debouce (3000)
    Greeter.prototype.greet = function () {
        console.log("Ola! " + this.greeting);
    };
    __decorate([
        delay(2000)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
var pessoinha = new Greeter("Pessoinha!");
pessoinha.greet();
// // // Parameter decorator
// // // Acessor decorator
