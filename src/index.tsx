import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './app'

const appRoot = document.getElementById('app')
const isRender = appRoot?.childElementCount === 0 ?? false
const renderWrapper = isRender ? ReactDOM.render : ReactDOM.hydrate

console.log(`render: ${isRender ? 'ReactDOM.render' : 'ReactDOM.hydrate'}`)

renderWrapper(<App />, appRoot)
