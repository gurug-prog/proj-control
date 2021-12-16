const { modelsObj } = require('../api/modelsObj');

const taskRepo = modelsObj.taskRepo;
const taskExecutor = {
    async insert(task) {
        const newTask = await taskRepo.create(task);
        return newTask.dataValues.id;
    },

    async getById(id) {
        const task = await taskRepo.findByPk(id);
        return task;
    },

    async update(id, task) {
        await taskRepo.update(task, {
            where: { id: id }
        });
    },

    async deleteById(id) {
        await taskRepo.destroy({
            where: { id: id }
        });
    },

    async getAll() {
        const tasks = await taskRepo.findAll();
        return tasks;
    }
}

module.exports = taskExecutor;
