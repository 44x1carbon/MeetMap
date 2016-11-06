var setUp = false;

export const load = () => {
	if(!setUp){
		const leafletCss = document.createElement('LINK')
		leafletCss.setAttribute('rel', 'stylesheet')
		leafletCss.setAttribute('href', 'https://unpkg.com/leaflet@1.0.0-rc.3/dist/leaflet.css')
		document.head.appendChild(leafletCss)
	}
}