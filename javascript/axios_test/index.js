const { default: axios } = require("axios");

(function () {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((result) => result.data)
    .then((result) => console.log(result));
})();
