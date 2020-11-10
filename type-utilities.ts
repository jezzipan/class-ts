// São utilitarios p/ trabalhar com tipos. Com base em generics

type Todo = {
    title: string;
    description: string;
    completed: boolean;
};

// Readonly no objeto

const todo: Readonly<Todo> = {
    title: "Assistir Lovecraft Country",
    description: "Entender a estética de filmes de horror com viés racial",
    completed: false,
};

console.log(todo);

// todo.completed = true;

// Partial
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo, {completed: true})

console.log(todo2);

// Pick omitir 5-1

type TodoPreview = Pick<Todo, "title" | "completed"> 

const todo3: TodoPreview = {
    title: "Fechar",
    completed: false
}

//Omit pegar mais coisas  5-4
type TodoPreview2 = Omit<Todo, "description"> 

const todo4: TodoPreview = {
    title: "Fechar",
    completed: false
}
