import { reactive, readonly } from "vue";
import { api } from "~/config/axios";

const state = reactive({
  loggedIn: false,
  user: null,
  token: null,
  roles: [],
  permissions: [],
  languages: [],
});

function setAuth(data) {
  state.loggedIn = true;
  state.user = data.user;
  state.token = data.token;
  state.user.roles = data?.roles || [];
  state.user.permissions = data.permissions?.map((p) => p.name) || [];
  localStorage.setItem("search-engin-login-token", data.token);
}
let token = "";
if (typeof window !== "undefined") {
  token = localStorage.getItem("search-engin-login-token")
    ? localStorage.getItem("search-engin-login-token")
    : state.token;
}
let headers = {};
if (token) {
  headers.authorization = "Bearer " + token;
}

async function checkAuth() {
  try {
    console.log(token);
    headers = {
      authorization: "Bearer " + token,
    };
    const response = await useCustomFetch({
      url: "/users/user",
      method: "GET",
    });
    console.log("res", response);
    setAuth(response.data);
    // navigateTo("/");
  } catch (err) {
    await logout();
    console.log(err);
  }
}

async function logout() {
  try {
    state.loggedIn = false;
    state.user = null;
    state.token = null;
    localStorage.removeItem("search-engin-login-token");
    localStorage.removeItem("search-engin-login-user");
    await await useCustomFetch({
      url: "/user/logout",
      method: "POST",
    });
  } catch (err) {
    // Force redirect
    navigateTo("/login");
  }
}

export default {
  state: readonly(state),
  setAuth,
  checkAuth,
  logout,
};
