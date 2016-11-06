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
	}
}