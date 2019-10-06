const routes = [
];

module.exports = app => {
  routes.forEach(({path, router}) => app.use(path, router));
};