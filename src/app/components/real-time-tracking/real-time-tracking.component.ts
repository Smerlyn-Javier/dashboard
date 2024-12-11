import { Component, input, signal, } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { Marker } from '../../interfaces';

@Component({
  selector: 'app-real-time-tracking',
  standalone: true,
  imports: [GoogleMap, MapMarker],
  templateUrl: './real-time-tracking.component.html',
  styleUrl: './real-time-tracking.component.scss'
})
export class RealTimeTrackingComponent {
  center = signal<google.maps.LatLngLiteral>({ lat: 18.4804935, lng: -69.9500823 });
  zoom = 14;


  markers = input.required<Array<Marker>>();
  newMarkers = signal<Array<Marker>>([]);
  ngOnInit(): void {
    this.newMarkers.set(this.markers())
  }



  apiLoaded = false;
  markerPosition2 = signal({ lat: 0, lng: 0 });
  center2 = signal({ lat: 0, lng: 0 });
  routeCoordinates: google.maps.LatLngLiteral[] = [];
  routeIndex = 0;
  calculateRoute(): void {
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(

      {
        origin: { lat: 18.482852, lng: -69.945455 }, // Inicio
        destination: { lat: 18.501165, lng: -69.950980 }, // Destino
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === google.maps.DirectionsStatus.OK && response?.routes[0]) {
          // Extrae los puntos de la ruta
          const route = response.routes[0].overview_path;
          this.routeCoordinates = route.map((point) => ({
            lat: point.lat(),
            lng: point.lng(),
          }));
          this.markerPosition2.set(this.routeCoordinates[0]); // Inicializa el marcador
          this.center2.set(this.markerPosition2());
          // this.animateMarker();
          console.log(route);

        } else {
          console.error('Error fetching directions', status);
        }
      }
    );
  }

  startMarkersMovement() {
    setInterval(() => {
      this.markers().forEach(marker => {
        if (marker.routeIndex < marker.route.length) {
          marker.position = marker.route[marker.routeIndex];
          marker.routeIndex++;
          // this.calculateRoute();
          this.newMarkers.set([...this.markers(), marker]);
        } else {
          marker.routeIndex = 0;
        }
      });
    }, 1000);
  }

}
