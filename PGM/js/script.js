const tbody = document.querySelector('tbody');
const addForm = document.querySelector('.add-form');
const inputTask = document.querySelector('.input-task');

const fetchTasks = async () => {
  const response = await fetch('http://35.173.247.188:3000/tasks')
  const tasks = await response.json()
  return tasks;
}

const addTask = async (event) => {
  event.preventDefault();

  const task = { title: inputTask.value, cervello: ' ', created_at: new Date(), updated_at: ' ' };

  await fetch('http://35.173.247.188:3000/tasks', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });


  loadTasks();
  inputTask.value = '';
}

const deleteTask = async (id) => {
  await fetch(`http://35.173.247.188:3000/tasks/${id}`, {
    method: 'delete',
  });

  loadTasks();
}

const updateTask = async ({ id, title, cervello, status, updated_at }) => {

  await fetch(`http://35.173.247.188:3000/tasks/${id}`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, cervello, status, updated_at, created_at: new Date() }),
  });

  loadTasks();
}

const formatDate = (dateUTC) => {
  const options = { dateStyle: 'long', timeStyle: 'short' };
  const date = new Date(dateUTC).toLocaleString('pt-br', options);
  return date;
}

const createElement = (tag, innerText = '', innerHTML = '') => {
  const element = document.createElement(tag);

  if (innerText) {
    element.innerText = innerText;
  }

  if (innerHTML) {
    element.innerHTML = innerHTML;
  }

  return element;
}

const createSelect = (value) => {
  const options = `
  <option value="pendente">pendente</option>
  <option value="Pendente Usuário">Pendente Usuário</option>
  <option value="Segunda Tentativa de Contato">Segunda Tentativa de Contato</option>
  <option value="Terceira Tentativa de Contato">Terceira Tentativa de Contato</option>
  <option value="Aguardando Estoque">Aguardando Estoque</option>
  <option value="Solicitar tecnico">Aguardando Disponibiilidade Técnica</option>
  <option value="em andamento">em andamento</option>
  <option value="Solicitar tecnico">Solicitar tecnico</option>
  <option value="concluída">concluída</option>
  <option value="Aguardando Transportadora">Aguardando Transportadora</option>
  <option value="Tecnico no Local">Tecnico no Local</option>
  <option value="Tecnico a Caminho">Tecnico a Caminho</option>
  <option value="Solicitar tecnico">Solicitar tecnico</option>
  <option value="Soliictar troca">Solicitar troca</option>
  <option value="Solicitado Compra">Tecnico solicitado</option>
  <option value="Solicitado Troca">Solicitado Troca</option>
  <option value="Solitado Compra">Solitado Compra</option>
  <option value="Aguardando RAT">Aguardando RAT</option>
  <option value="Correção no Totvs">Correção no Totvs</option>
  <option value="Aguardando comercial">Aguardando comercial</option>
  <option value="NF Emitida">NF Emitida</option>
  <option value="Aguardando compra">Aguardando compra</option>
  <option value="Aguardando produção">Aguardando produção</option>
  `;

  const select = createElement('select', '', options);

  select.value = value;

  return select;
}

const createRow = (task) => {

  const { id, title, cervello, created_at, status, updated_at } = task;

  const tr = createElement('tr');
  const tdTitle = createElement('td', title);
  const tdCervello = createElement('td', cervello);
  const tdCreatedAt = createElement('td', formatDate(created_at));
  const tdStatus = createElement('td');
  const tdDate = createElement('td', updated_at);
  const tdActions = createElement('td');

  const select = createSelect(status);

  select.addEventListener('change', ({ target }) => updateTask({ ...task, status: target.value }));

  const editButton = createElement('button', '', '<span class="material-symbols-outlined">edit</span>');
  const deleteButton = createElement('button', '', '<span class="material-symbols-outlined">delete</span>');
  
  const editForm = createElement('form');
  const editFormDate = createElement('form');
  const editFormCervello = createElement('form');

  const editInput = createElement('input');
  const editInputDate = createElement('input');
  const editCervello = createElement('input');

  editInput.value = title;
  editForm.appendChild(editInput);

  editCervello.value = cervello;
  editFormCervello.appendChild(editCervello);

  editInputDate.value = updated_at;
  editFormDate.appendChild(editInputDate);
  
  editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    updateTask({ id, title: editInput.value, cervello: cervello, status, updated_at: editInputDate.value });
  });

  editFormDate.addEventListener('submit', (event) => {
    event.preventDefault();
    
    updateTask({ id, title: editInput.value, cervello: cervello, status, updated_at: editInputDate.value});
  });

  editFormCervello.addEventListener('submit', (event) => {
    event.preventDefault();
    
    updateTask({ id, title: title, cervello: editCervello.value, status, updated_at: editInputDate.value});
  });

  editButton.addEventListener('click', () => {
    tdTitle.innerText = '';
    tdCervello.innerText = '';
    tdDate.innerText = '';
    tdTitle.appendChild(editForm);
    tdCervello.appendChild(editFormCervello);
    tdDate.appendChild(editFormDate);
  });

  editButton.classList.add('btn-action');
  deleteButton.classList.add('btn-action');

  deleteButton.addEventListener('click', () => deleteTask(id));
  
  tdStatus.appendChild(select);

  tdActions.appendChild(editButton);
  tdActions.appendChild(deleteButton);

  tr.appendChild(tdTitle);
  tr.appendChild(tdCervello);
  tr.appendChild(tdCreatedAt);
  tr.appendChild(tdStatus);
  tr.appendChild(tdDate);
  tr.appendChild(tdActions);

  return tr;
}

const loadTasks = async () => {
  const tasks = await fetchTasks();

  tbody.innerHTML = '';

  tasks.forEach((task) => {
    const tr = createRow(task);
    tbody.appendChild(tr);
  });
}


addForm.addEventListener('submit', addTask);

loadTasks();