import * as types from './mutation-types.js'

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
	[types.TOGGLE_TRACKING](state) {
		state.tracking = !state.tracking
	},
	[types.CHANGE_TRACKING](state, bool) {
		state.tracking = bool
	},
	[types.TOGGLE_CHATSHOW](state) {
		state.chatShow = !state.chatShow
	},
	[types.TOGGLE_MEMBERSHOW](state) {
		state.memberShow = !state.memberShow
	},
}