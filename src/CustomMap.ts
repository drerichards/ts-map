// ensures that every param class meets args requirement for Map class
export interface Mapper {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mapper: Mapper): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapper.location.lat,
        lng: mapper.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mapper.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
