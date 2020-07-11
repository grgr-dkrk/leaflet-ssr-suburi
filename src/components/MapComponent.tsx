import * as React from 'react'
// @ts-ignore - TODO: fix declaration file on serverside
import { Map, TileLayer, Marker, Popup } from 'react-leaflet-universal'

export const MapComponent: React.FC = () => {
  return (
    <Map position={[51.505, -0.09]}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  )
}
