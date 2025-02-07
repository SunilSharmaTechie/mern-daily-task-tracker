const RoutesConfig = {
  home: "/",
  login: "/login",
  register: "/register",
  createTask: "/create",
  taskDetails: (slug) => `/task/${slug}`,
};

export default RoutesConfig;
