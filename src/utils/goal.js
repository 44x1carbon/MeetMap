import goal_img from '../img/goal.png' 

export default class Goal {
	constructor(position) {
		this.name = '目的地'
		this.position = position
		this.icon = {
			iconUrl: goal_img,
			iconSize: [40, 40]
		}		
	}
}