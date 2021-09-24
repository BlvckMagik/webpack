import renderTasks from './scripts/render';
import initHandlers from './scripts/initHandlers';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initHandlers();
});

const onStorageChange = event => {
  if (event.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
