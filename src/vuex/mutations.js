import * as types from './mutation-types.js'
import Goal from '../utils/goal.js'

export default {
	[types.ADD_MEMBER](state, member) {
		state.members.push(member)
	},
	[types.CHANGE_POSITION](state, id, position) {
		let member = state.members.filter((m) => { return m.id === id})[0]	
		member.position = position
	},
	[types.SET_CENTER](state, position) {
		state.center = position
	},
	[types.TOGGLE_TRACKING_MODE](state) {
		state.trackingMode = !state.trackingMode
	},
	[types.CHANGE_TRACKING_MODE](state, bool) {
		state.trackingMode = bool
	},
	[types.TOGGLE_CHATSHOW](state) {
		state.chatShow = !state.chatShow
	},
	[types.TOGGLE_MEMBERSHOW](state) {
		state.memberShow = !state.memberShow
	},
	[types.SET_GOAL](state, position) {
		state.goal = new Goal(postiion)
	},
	[types.TOGGLE_GOAL_SET_MODE](state) {
		state.setGoal = !state.setGoal
	}
}