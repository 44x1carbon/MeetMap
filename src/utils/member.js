import jdenticon from 'jdenticon'
import { md5 } from './util.js'

export class Member {
	constructor(id, name, position) {
		this.id = id
		this.name = name
		this.position = position
		this.icon = {
			iconUrl: 'data:image/svg+xml;utf8,' + jdenticon.toSvg(md5(id), 40),
			iconSize: [40, 40]
		}		
	}
}

