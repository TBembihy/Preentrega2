const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
let tasks = [];

// Función para agregar una tarea
function addTask(event) {
    event.preventDefault();
    const task = taskInput.value;
    if (task) {
        const newTask = {
            id: Date.now(),
            name: task,
            completed: false
        };
        tasks.push(newTask);
        taskInput.value = '';
        renderTasks();
    }
}

// Función para renderizar las tareas en el DOM
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.name;
        taskList.appendChild(li);
    });
}

// Evento para agregar una tarea
taskForm.addEventListener('submit', addTask);

// Buscar tarea por id
function findTaskById(id) {
    return tasks.find(task => task.id === id);
}

// Filtrar tareas completadas
function filterCompletedTasks() {
    return tasks.filter(task => task.completed);
}

// Filtrar tareas incompletas
function filterIncompleteTasks() {
    return tasks.filter(task => !task.completed);
}

// Capturar entradas mediante prompt() y realizar operaciones
function captureInputsAndOperate() {
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));
    
    const sum = add(num1, num2);
    const difference = subtract(num1, num2);
    const product = multiply(num1, num2);
    const quotient = divide(num1, num2);
    const percentage = calculatePercentage(num1, num2);
    const concatenated = concatenate(num1, num2);
    
    console.log(`Suma: ${sum}`);
    console.log(`Resta: ${difference}`);
    console.log(`Multiplicación: ${product}`);
    console.log(`División: ${quotient}`);
    console.log(`Porcentaje: ${percentage}%`);
    console.log(`Concatenación: ${concatenated}`);
    
    alert(`Suma: ${sum}\nResta: ${difference}\nMultiplicación: ${product}\nDivisión: ${quotient}\nPorcentaje: ${percentage}%\nConcatenación: ${concatenated}`);
}

// Funciones para realizar operaciones
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : 'No se puede dividir por cero';
}

function calculatePercentage(a, b) {
    return (a / b) * 100;
}

function concatenate(a, b) {
    return `${a}${b}`;
}

// Capturar entradas y operar al cargar la página
document.addEventListener('DOMContentLoaded', captureInputsAndOperate);
