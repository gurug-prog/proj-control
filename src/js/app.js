const { sequelize } = require('./api/modelsObj');
const server = require('./api/server');
const routes = require('./routes');

for (const route of routes) {
    server[route.method](route.path, route.func);
}

(async () => {
  await sequelize.sync({ force: false });

  server.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Server listening at port ${process.env.EXPRESS_PORT}`);
  });
})();
