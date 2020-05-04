import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import globalAxios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userID: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token,
      state.userID = userData.userId
    },
    storeUser(state, user) {
      state.user = user;
    },
    clearAuthData(state) {
      state.idToken = null;
      state.userID = null;
    }
  },
  actions: {
    setLogoutTimer({ commit, dispatch }, expirationTime) {
      setTimeout(() => {
        commit('clearAuthData');
        dispatch('logout');
      }, expirationTime * 1000)
    },
    signup({ commit, dispatch }, authData) {
      axios.post(':signUp?key=AIzaSyAT4zZeDe3VcyGLo9Xz3a4_aiHVNuYZDMQ', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res);
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          });
          const now = new Date();
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000);
          localStorage.setItem('token', res.data.idToken);
          localStorage.setItem('expiresIn', expirationDate);
          localStorage.setItem('userID', res.data.localId);
          dispatch('storeUser', authData);
          dispatch('setLogoutTime', res.data.expiresIn);
        })
        .catch(error => console.log(error))
    },
    login({ commit, dispatch }, authData) {
      axios.post(':signInWithPassword?key=AIzaSyAT4zZeDe3VcyGLo9Xz3a4_aiHVNuYZDMQ', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res);
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          const now = new Date();
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000);
          localStorage.setItem('token', res.data.idToken);
          localStorage.setItem('expiresIn', expirationDate);
          localStorage.setItem('userID', res.data.localId);
          router.push('/dashboard');
          dispatch('setLogoutTimer', res.data.expiresIn);
        })
        .catch(err => console.log(err))
    },
    tryAutoLogin({ commit }) {
      const token = localStorage.getItem('token');
      const userID = localStorage.getItem('userID');
      const expirationDate = localStorage.getItem('expiresIn');
      console.log(token, userID, expirationDate);
      if (!token) {
        return;
      }
      const now = new Date();
      if (now >= expirationDate) {
        return;
      }
      commit('authUser', {
        token: token,
        userID: userID
      });
    },
    logout({ commit }) {
      commit('clearAuthData');
      localStorage.removeItem('expiresIn');
      localStorage.removeItem('token');
      localStorage.removeItem('userID');
      router.replace('/signin');
    },
    storeUser({ commit, state }, userData) {
      if (!state.idToken) {
        return
      }
      globalAxios.post(`/users.json?auth=${state.idToken}`, userData)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    },
    fetchUser({ commit, state }) {
      if (!state.idToken) {
        return
      }
      globalAxios.get(`/users.json?auth=${state.idToken}`)
        .then(res => {
          console.log(res);
          const data = res.data;
          const users = []
          for (let key in data){
            const user = data[key]
            user.id = key
            users.push(user)
          }
          console.log(users);
          commit('storeUser', users[0])
        })
        .catch(err => console.log(err))
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    }
  }
})