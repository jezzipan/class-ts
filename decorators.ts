// // // Declaração iniciada anexada numa classe, para add coisas novas, validações. feature experimental tanto no ts quanto no EC

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
function delay(ms: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args) {
            console.log(`Esperando ${ms}...`);
            setTimeout(() => {
                originalMethod.apply(this, args)
            }, ms);
            return descriptor;

        };
    };
}

class Greeter {
    greeting: string;

    constructor(g: string) {
        this.greeting = g;
    }

//esperar um tempo
    @delay(2000)
        // debouce (3000)
    greet() {
        console.log(`Ola! ${this.greeting}`);
        
    }
}

const pessoinha = new Greeter("Pessoinha!");
pessoinha.greet();



// // // Parameter decorator
// // // Acessor decorator


