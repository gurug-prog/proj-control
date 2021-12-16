const taskController = require("../controllers/taskController");

const routes = [
  { path: "/tasks/create", method: "post", func: taskController.insert },
  { path: "/tasks/read/:id", method: "get", func: taskController.getById },
  { path: "/tasks/update/", method: "put", func: taskController.update },
  { path: "/tasks/delete/:id", method: "delete", func: taskController.deleteById },
  { path: "/tasks/list", method: "get", func: taskController.getAll },
];

module.exports = routes;
