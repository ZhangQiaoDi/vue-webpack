import $ from "jquery";
window.$ = $;

import Vue from "vue";

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Vuex from 'vuex';
Vue.use(Vuex)

//引入mui
require("./mui/css/mui.css")
window.mui = require("mui")

require("./js/pullToRefresh.js");
require("./js/pullToRefresh.material.js");
//require("./js/mui.view.js");
//require("./js/feedback.js");

//组件
var index = require("./components/index.vue");
import carousel from "./components/index/carousel.vue";
import list from "./components/index/list.vue";
import ask from "./components/index/ask.vue";
import share from "./components/index/share.vue";
import job from "./components/index/job.vue";
import good from "./components/index/good.vue";
import xdetail from "./components/index/xdetail.vue"

var router = new VueRouter({
	routes:[{
			path:"/index",
			component:index,
			children: [{
				path: "ask",
				component: ask,
			},{
				path: "share",
				component: share,
			},{
				path: "job",
				component: job,
			},{
				path: "good",
				component: good,
			}]
		},{
			path: "/xdetail/:id",   
			component: xdetail,
		},{
			path: "/",   
			redirect: "/index"
		}
	]
});

var store = new Vuex.Store({
	state: {
		exchange: "测试"
	},
	mutations: {
		setExchange(state, data) {
			state.exchange = data
		}
	},
	getters: {
		getExchange(state) {
			return state.exchange
		}
	}
});

new Vue({
	el:"#demo",
	template:`
		<router-view></router-view>
	`,
	router,
	store,
	data:{
		name:"wscats",
	},		
})


