import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {

  CONFIGURATION = {
    "locations": [
      {
        "title": "R. Cel. Pompeu, 125",
        "address1": "R. Cel. Pompeu",
        "address2": "125 - Centro, Aracati - CE, 62800-000, Brazil",
        "coords": { "lat": -4.562249420634167, "lng": -37.769477906745905 },
        "placeId": "ChIJoejbV_yyuQcRByIER7pxZy0"
      }
    ],
    "mapOptions": {
      "center": { "lat": 38.0, "lng": -100.0 },
      "fullscreenControl": true,
      "mapTypeControl": false,
      "streetViewControl": false,
      "zoom": 4,
      "zoomControl": true,
      "maxZoom": 17,
      "mapId": ""
    },
    "mapsApiKey": "API_KEY",
    "capabilities": {
      "input": false,
      "autocomplete": false,
      "directions": false,
      "distanceMatrix": false,
      "details": false,
      "actions": false
    }
  };

  ngAfterViewInit(): void {
    this.configureLocator()
  }

  configureLocator(): void {
    // Certifique-se de que os componentes personalizados estejam definidos
    customElements.whenDefined('gmpx-store-locator').then(() => {
      const locator: any = document.querySelector('gmpx-store-locator');
      if (locator) {
        locator.configureFromQuickBuilder(this.CONFIGURATION);
      }
    });
  }

}
