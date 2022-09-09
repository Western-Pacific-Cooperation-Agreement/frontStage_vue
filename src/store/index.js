import Vue from 'vue'
import Vuex from 'vuex'
import menus from "./modules/menus.js";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: ''

	},
	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token
			localStorage.setItem("token", token)
			console.log("系统设置了Token，token=",token)
			console.log("系统设置了Token，localStorage.getItem('token')=",localStorage.getItem("token"))
		},


	},
	actions: {},
	modules: {
		menus
	}
})
