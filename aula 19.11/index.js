const addButton = document.getElementById("add-task");
const taskInput = document.querySelector("#new-task input");
const tasksContainer = document.getElementById("tasks");
const taskCount = document.getElementById("task-count"); // Elemento onde a quantidade será mostrada

// Função para carregar as tarefas do localStorage
function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (savedTasks) {
    savedTasks.forEach((task) => createTask(task.content, task.completed));
  }
  updateTaskCount();
}

// Função para salvar as tarefas no localStorage
function saveTasks() {
  const tasks = [];
  const taskDivs = tasksContainer.querySelectorAll(".task");

  taskDivs.forEach((taskDiv) => {
    const taskText = taskDiv.querySelector(".task-text").textContent;
    const taskCheckbox = taskDiv.querySelector(".task-checkbox");
    tasks.push({
      content: taskText,
      completed: taskCheckbox.checked,
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Função para atualizar a quantidade de tarefas
function updateTaskCount() {
  const taskCountText = tasksContainer.children.length;
  taskCount.textContent = `Tarefas: ${taskCountText}`;
}

// Função para criar uma tarefa
function createTask(taskContent, completed = false) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  // checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("task-checkbox");
  checkbox.checked = completed; // Definir se a tarefa está concluída ou não

  // texto da tarefa criada
  const taskText = document.createElement("span");
  taskText.classList.add("task-text");
  taskText.textContent = taskContent;

  // adicionar o evento de mudança no checkbox para alterar o estilo do texto
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      taskText.classList.add("completed");
    } else {
      taskText.classList.remove("completed");
    }
    saveTasks(); // Salva as tarefas sempre que o estado do checkbox mudar
  });

  // botão de excluir a tarefa
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");

  const trashIcon = document.createElement("i");
  trashIcon.classList.add("ph", "ph-trash");
  deleteButton.appendChild(trashIcon);

  deleteButton.addEventListener("click", function () {
    tasksContainer.removeChild(taskDiv);
    saveTasks(); // Salva as tarefas após excluir uma
    toggleTasksVisibility(); // Verifica se há tarefas para mostrar ou ocultar o container
    updateTaskCount(); // Atualiza a contagem de tarefas
  });

  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(taskText);
  taskDiv.appendChild(deleteButton);

  tasksContainer.appendChild(taskDiv);
  updateTaskCount();
  saveTasks(); // Salva as tarefas sempre que uma nova tarefa for criada
}

// Função de adicionar a tarefa
function addTask() {
  const taskContent = taskInput.value.trim();

  if (taskContent !== "") {
    createTask(taskContent);
    taskInput.value = "";
    toggleAddButton(); // Verifica se o botão deve ser desabilitado após adicionar
  }
}

// Função que permite criar uma tarefa ao pressionar a tecla enter
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Evento para habilitar/desabilitar o botão ao digitar no campo
taskInput.addEventListener("input", toggleAddButton);

addButton.addEventListener("click", addTask);

// Função para verificar se há tarefas, caso exista, mostrar o container
function toggleTasksVisibility() {
  if (tasksContainer.children.length === 0) {
    tasksContainer.style.display = "none";
  } else {
    tasksContainer.style.display = "block";
  }
}

// Função para verificar se o campo de entrada está vazio e habilitar/desabilitar o botão
function toggleAddButton() {
  if (taskInput.value.trim() === "") {
    addButton.disabled = true;
    addButton.classList.add("disabled");
  } else {
    addButton.disabled = false;
    addButton.classList.remove("disabled");
  }
}

// Inicializa a visibilidade das tarefas, o estado do botão e carrega as tarefas salvas
toggleTasksVisibility();
toggleAddButton();
loadTasks();
