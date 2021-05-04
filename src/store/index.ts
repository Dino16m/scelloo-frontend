import Vue from "vue";
import Vuex from "vuex";
import LeaveRequests from './leaverequests'

Vue.use(Vuex);


const store = new Vuex.Store({});
store.registerModule("leaveRequests", LeaveRequests)

export default store