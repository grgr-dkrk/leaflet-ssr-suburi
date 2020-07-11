import * as React from 'react'
import { Header } from './components/Header'
import { MapContainer } from './containers/MapContainer'

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <MapContainer />
    </React.Fragment>
  )
}
