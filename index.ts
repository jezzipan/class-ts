const input1 = document.getElementById("Num1") as HTMLInputElement;
const input2 = document.getElementById("Num2") as HTMLInputElement;
const button = document.getElementById("button")!;

function sum(a: number, b: number) {
    return a + b
}

button.addEventListener("click", () => {
    console.log(sum(Number(input1.value), Number(input2.value)));
});