import * as types from './mutation-types.js'
import { Member } from '../utils/member.js'

export const addMember = ({dispatch}, id, name, position) => {
	dispatch(types.ADD_MEMBER, new Member(id, name, position))
}

export const changePosition = ({dispatch}, id, position) => {
	dispatch(types.CHANGE_POSITION, id, position)
}

export const setCenter = ({dispatch}, position) => {
	dispatch(types.SET_CENTER, position)
}

export const toggleTracking = ({dispatch}) => {
	dispatch(types.TOGGLE_TRACKING)
}

export const changeTracking = ({dispatch}, bool) => {
	dispatch(types.CHANGE_TRACKING, bool)
}

export const toggleChatShow = ({dispatch}) => {
	dispatch(types.TOGGLE_CHATSHOW)
}

export const toggleMemberShow = ({dispatch}) => {
	dispatch(types.TOGGLE_MEMBERSHOW)
}

