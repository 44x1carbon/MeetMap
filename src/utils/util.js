import CryptoJS from 'crypto-js'

export const md5 = (value) => {
	return CryptoJS.MD5(value).toString()
}