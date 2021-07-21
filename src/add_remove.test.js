import { TestWatcher } from 'jest';
import { addNewTask, deleteTask } from './add_and_remove';
import localStorage from './localstorage';
import saveToLocalStorage from './saveToLocalStorage';
// import { activeListItem } from './utils';

let spy;

describe('Adding a task', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorage,
    });

    spy = jest.spyOn(document, 'getElementById');
  });

  test('saves the key to the storage', () => {
    // const tasks = [{ 'index': 1, 'description': 'Go shopping', 'completed': false }];
    saveToLocalStorage('tasks');
    expect(window.localStorage.getItem('key')).toEqual('tasks');
  });

  describe('with found element', () => {
    let list;
    let listItem;
    beforeAll(() => {
      list = document.createElement('ul');
      listItem = document.createElement('li');
      list.appendChild(listItem);
      spy.mockReturnValue(list);
    });

    it('add task to localStorage', () => {
      let task = { 'index': 1, 'description': 'Go shopping', 'completed': false };
      localStorage.setItem('key', task);
      // expect(Object.keys(localStorage.getItem('key')).length.toEqual(1));
      console.log(localStorage.getItem('key'));
      expect(list.childElementCount).toBe(1);
    });
  });
});