const localStorage = (function () {
  let store = {
    tasks: '[]'
  };

  return {
    getItem: (key) => {
      return store[key];
    },
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {
        tasks: '[]'
      }
    }
  }
})();

Object.defineProperty(window, 'localStorage', { value: localStorage });