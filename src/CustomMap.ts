// Instruction to every other class on how they can be an argument to 'addMarker
export interface Mappable {
	location: {
		lat: number;
		lng: number;
	};
	markerContent(): string;
}

// facade for google map class
// only expose constructor and add marker function
export class CustomMap {
	private goolgeMap: google.maps.Map<HTMLElement>;

	constructor(divId: string) {
		this.goolgeMap = new google.maps.Map(document.getElementById(divId), {
			zoom: 1,
			center: { lat: 0, lng: 0 },
		});
	}

	addMarker(mappable: Mappable): void {
		const marker = new google.maps.Marker({
			map: this.goolgeMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng,
			},
		});
		const infoWindow = new google.maps.InfoWindow({
			content: mappable.markerContent(),
		});
		marker.addListener('click', () => {
			infoWindow.open(this.goolgeMap, marker);
		});
	}
}
