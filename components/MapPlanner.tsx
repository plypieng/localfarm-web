'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export function MapPlanner() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [activeLayer, setActiveLayer] = useState<'satellite' | 'soil' | 'terrain'>('satellite');

  useEffect(() => {
    // For demo purposes, we're not using an actual API key
    // In a real application, you'd store this in environment variables
    const loader = new Loader({
      apiKey: 'GOOGLE_MAPS_API_KEY_PLACEHOLDER',
      version: 'weekly',
    });

    loader
      .load()
      .then(() => {
        if (!mapRef.current) return;

        // Niigata, Japan coordinates
        const niigata = { lat: 37.9161, lng: 139.0364 };
        
        const map = new google.maps.Map(mapRef.current, {
          center: niigata,
          zoom: 15,
          mapTypeId: 'satellite',
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
        });

        // Add farm plot outlines (mock data for demonstration)
        const farmPlots = [
          [
            { lat: 37.9161, lng: 139.0364 },
            { lat: 37.9171, lng: 139.0374 },
            { lat: 37.9181, lng: 139.0364 },
            { lat: 37.9171, lng: 139.0354 },
          ],
          [
            { lat: 37.9141, lng: 139.0344 },
            { lat: 37.9151, lng: 139.0354 },
            { lat: 37.9161, lng: 139.0344 },
            { lat: 37.9151, lng: 139.0334 },
          ],
          [
            { lat: 37.9131, lng: 139.0384 },
            { lat: 37.9141, lng: 139.0394 },
            { lat: 37.9151, lng: 139.0384 },
            { lat: 37.9141, lng: 139.0374 },
          ],
        ];

        // Add the polygons to the map
        const cropColors = ['#4ade80', '#fbbf24', '#60a5fa'];
        const cropNames = ['Rice Field A', 'Vegetable Garden', 'Rice Field B'];
        
        farmPlots.forEach((plotCoords, index) => {
          const farmPlot = new google.maps.Polygon({
            paths: plotCoords,
            strokeColor: cropColors[index],
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: cropColors[index],
            fillOpacity: 0.35,
            editable: true,
          });
          
          farmPlot.setMap(map);
          
          // Add a label to each plot
          const bounds = new google.maps.LatLngBounds();
          plotCoords.forEach(coord => bounds.extend(coord));
          const center = bounds.getCenter();
          
          new google.maps.Marker({
            position: center,
            map: map,
            label: {
              text: cropNames[index],
              color: 'black',
              fontWeight: 'bold',
            },
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 0,
            },
          });
        });

        setMapLoaded(true);
      })
      .catch(e => {
        // In a real app, we'd handle the error better
        console.error('Error loading Google Maps API:', e);
      });
  }, []);

  return (
    <div className="h-full flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveLayer('satellite')}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg ${
              activeLayer === 'satellite'
                ? 'bg-primary-50 text-primary-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Satellite View
          </button>
          <button
            onClick={() => setActiveLayer('soil')}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg ${
              activeLayer === 'soil'
                ? 'bg-primary-50 text-primary-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Soil Analysis
          </button>
          <button
            onClick={() => setActiveLayer('terrain')}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg ${
              activeLayer === 'terrain'
                ? 'bg-primary-50 text-primary-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Terrain
          </button>
        </div>
        <div className="space-x-2">
          <button className="px-3 py-1.5 text-sm font-medium bg-white border border-gray-300 rounded-lg">
            Add Plot
          </button>
          <button className="px-3 py-1.5 text-sm font-medium bg-white border border-gray-300 rounded-lg">
            Draw Area
          </button>
        </div>
      </div>
      
      <div 
        ref={mapRef} 
        className="flex-1 rounded-lg border border-gray-200 w-full h-full bg-gray-100"
      >
        {!mapLoaded && (
          <div className="h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        )}
      </div>
      
      <div className="mt-4 text-sm text-gray-500">
        <p>
          <span className="font-medium">Map Instructions:</span> Drag boundaries to adjust plot sizes. 
          Click on a plot to select it and view/edit crop assignments.
        </p>
      </div>
    </div>
  );
}
