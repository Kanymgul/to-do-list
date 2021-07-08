
const input = document.querySelector(".form-control")
const listGroup = document.querySelector(".list-group")
console.log(input);
const btn = document.querySelector(".btn")

//Получение данных из локалстореж и преобразование обратно в Жаваскрипт
const todo = JSON.parse(localStorage.getItem("todo"))

// если в переменной туду чтото есть мы его храним а в противном случае мы храним пустой массив
const todoList = todo ? todo : [];


//вешаем клик на переменную бтн
btn.addEventListener("click", () =>{
    // Добавляем новый элемент в массив тудулист
    todoList.push({
        value: input.value,
        checked: false,
    });
// Преобразуем жейсон массив тудулист
    const stringTodo = JSON.stringify(todoList)
    console.log(todoList);
    console.log(stringTodo);

    
    // чтобы добавить новый эллемент из инпута
    listGroup.insertAdjacentHTML("beforeend",  `
    <li class="list-group-item list-group-item-${(todoList.length - 1) % 2 === 0 ? `warning` : `info`}">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              ${input.value}
            </label>
            </li>`)
    input.value = ""
    console.log(todoList);
})

function drawList(){
    // чтобы перебирать массив
    for(let i = 0; i < todoList.length; i++ ){
        // чтобы добавить элемент из массива
        listGroup.insertAdjacentHTML("beforeend",  `
        <li class="list-group-item list-group-item-${i % 2 === 0 ? `warning` : `info`}">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" ${todoList[i].checked ? `checked` : ""} value="" id="flexCheckDefault">
                <label class="form-check-label ${todoList[i].checked ? `checkedText` : ""} " for="flexCheckDefault">
                  ${todoList[i].value}
                </label>
                </li>`)
    }
}

drawList()










