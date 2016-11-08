import CryptoJS from 'crypto-js'

export const md5 = (value) => {
	return CryptoJS.MD5(value).toString()
}

export const posArrToObj = (latlng) => {
	let {lat,lng} = latlng
	return { lat, lng }
}

export const posObjToArr = (latlng) => {
	let {lat,lng} = latlng
	return [ lat, lng ]
	
}