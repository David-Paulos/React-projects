import { useEffect, useRef, useState } from 'react'
import './App.css';
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import '@tomtom-international/web-sdk-plugin-searchbox/dist/SearchBox.css'
import * as tt from '@tomtom-international/web-sdk-maps'
import { services } from '@tomtom-international/web-sdk-services'
import SearchBox from '@tomtom-international/web-sdk-plugin-searchbox'


function App() {
  const mapElement = useRef()
  const [ttMap, setTtMap] = useState({})
  const [coordinates, setCoordinates] = useState({
    start: [-0.118092, 51.509865],
    end: ''
  })
  const [mapZoom, setMapZoom] = useState(10);

  useEffect(()=>{
    // INITIATE THE MAP
    let map = tt.map({
      key: process.env.REACT_APP_TT_KEY,
      container: mapElement.current,
      zoom: mapZoom,
      center: coordinates.start,
      stylesVisibility: {
        trafficFlow: true,
        trafficIncidents: true
      }
    })
    setTtMap(ttMap)

    // ADD MARKER
    // STARTING POINT
    const startElement = document.createElement('div')
    startElement.className = 'startMarker'
    let startMarker = new tt.Marker({
      draggable: true,
      element: startElement
    }).setLngLat(coordinates.start).addTo(map)

    // END POINT
    if(coordinates.end){
      const endElement = document.createElement('div')
      endElement.className = 'endMarker'
      let endMarker = new tt.Marker({
      draggable: true,
      element: endElement
      }).setLngLat(coordinates.end).addTo(map)
      // MAP ROUTING
      const routing = services.calculateRoute({
        key: process.env.REACT_APP_TT_KEY,
        locations: `${coordinates.start[0]},${coordinates.start[1]}:${coordinates.end[0]},${coordinates.end[1]}`,
        traffic: true,
      }).then((response) => {
        const features = response.toGeoJson().features
        features.forEach((feature, index) => {
          map.addLayer({
            id: "route" + index,
            type: "line",
            source: {
              type: "geojson",
              data: feature,
            },
            paint: {
              'line-color': '#4a90e2',
              'line-opacity': 0.8,
              'line-width': 4,
              'line-dasharray': [1, 0, 1, 0],
            }
          })
        })})
    }

    // MAP CONTROLS
    // GEOLOCATION CONTROL
    const ttGeoControl = new tt.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
      },
      trackUserLocation: true
   })
    ttGeoControl.on('geolocate', (e) => setCoordinates(prevState => {
        return {
          ...prevState,
          start: [e.coords.longitude, e.coords.latitude]
        }
      }))
    map.addControl(ttGeoControl)
    
    // SEARCHBOX CONTROL
    const startSearchBoxOptions = {
      idleTimePress: 100,
      minNumberOfCharacters: 0,
      searchOptions: {
          key: process.env.REACT_APP_TT_KEY,
          language: 'en-GB'
      },
      autocompleteOptions: {
          key: process.env.REACT_APP_TT_KEY,
          language: 'en-GB'
      },
      labels: {
          noResultsMessage: 'No results found.',
          placeholder: 'Search / Starting Point'
      }
    }
    const endSearchBoxOptions = {
      idleTimePress: 100,
      minNumberOfCharacters: 0,
      searchOptions: {
          key: process.env.REACT_APP_TT_KEY,
          language: 'en-GB'
      },
      autocompleteOptions: {
          key: process.env.REACT_APP_TT_KEY,
          language: 'en-GB'
      },
      labels: {
          noResultsMessage: 'No results found.',
          placeholder: 'End Point'
      }
    }
    const startSearchBox = new SearchBox(services, startSearchBoxOptions)
    map.addControl(startSearchBox, 'top-left')
    startSearchBox.on('tomtom.searchbox.resultselected', (e)=> {
      setCoordinates(prevState => {
        return {
          ...prevState,
          start: [e.data.result.position.lng, e.data.result.position.lat]
        }
      })
    })
    const endSearchBox = new SearchBox(services, endSearchBoxOptions)
    map.addControl(endSearchBox, 'top-left')
    endSearchBox.on('tomtom.searchbox.resultselected', (e) =>{
      setCoordinates(prevState => {
        return {
          ...prevState,
          end: [e.data.result.position.lng, e.data.result.position.lat]
        }
      })
    })
    
    // NAVIGATION CONTROL
    map.addControl(new tt.NavigationControl({
      showZoom: true,
      showCompass: true,
      showExtendedRotationControls: true,
    }))
    // MAP CLEANUP
    return () => map.remove()
  }, [coordinates])

  return (
    <div className="mapContainer">
      <div ref={mapElement} className="map"></div>
    </div>
  );
}

export default App;
