// client-jsx/src/routes.js
const Routes = {
  home: "/",
  login: "/login",
  register: "/register",
  createTask: "/create",
  taskDetails: (slug) => `/task/${slug}`,
};

export default Routes;
