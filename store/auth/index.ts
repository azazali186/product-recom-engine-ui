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
let token = ""
if (typeof window !== 'undefined') {
token = localStorage.getItem("search-engin-login-token")
  ? localStorage.getItem("search-engin-login-token")
  : state.token;
}
const headers = {};
if (token) {
  headers.authorization = "Bearer " + token;
}

async function checkAuth() {
  try {
    const response = await api.get("/auth/user", {
      headers: headers,
    });
    setAuth(response.data);
    navigateTo("/");
    // loading.value = false;
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
    await api.post("/user/logout");
  } catch (err) {
    // Force redirect
    window.location = "/#/login";
  }
}

export default {
  state: readonly(state),
  setAuth,
  checkAuth,
  logout,
};
