const taskExecutor = require('../executors/taskExecutor');

const taskController = {
    async insert(req, res) {
        const title = req.body.title;
        const description = req.body.description;
        const deadline = req.body.deadline;
        const owner = req.body.owner;

        const newId = await taskExecutor.insert({
            title,
            description,
            deadline,
            owner
        });

        res.status(201).send(`Succesfully added a new task with id = ${newId}`);
    },

    async getById(req, res) {
        const id = req.params.id;
        const task = await taskExecutor.getById(id);
        res.status(200).send(task)
    },

    async update(req, res) {
        const id = req.body.id;
        const title = req.body.title;
        const description = req.body.decription;
        const deadline = req.body.deadline;
        const owner = req.body.owner;

        await taskExecutor.update(id, {
            title,
            description,
            deadline,
            owner
        });

        res.status(200).send(`Succesfully update task with id = ${id}`);
    },

    async deleteById(req, res) {
        const id = req.params.id;
        await taskExecutor.deleteById(id);
        res.status(200).send(`Task deleted. Was with id = ${id}`);
    },

    async getAll(req, res) {
        const tasks = await taskExecutor.getAll();
        res.status(200).send(tasks);
    }
}

module.exports = taskController;
