import { addNewElem, onDeleteTask, turnElChecked } from './changingList';

export default () => {
  const createTaskBtn = document.querySelector('.create-task-btn');
  createTaskBtn.addEventListener('click', addNewElem);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', turnElChecked);
  listElem.addEventListener('click', onDeleteTask);
};
