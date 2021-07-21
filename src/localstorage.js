const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM();

const localStorage = (function () {
  let store = {

  };
  
  return {
    getItem: (key) => {
      return store[key];
    },

    setItem: (key, value) => {
      store[key] = value.toString();
    }
  }
})();

Object.defineProperty(dom.window, 'localStorage', { value: localStorage });

module.exports = localStorage;