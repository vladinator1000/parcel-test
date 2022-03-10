import React from 'react'
import { render } from 'react-dom'

const App = () => <h1>Hello, world!</h1>

const renderTarget = document.getElementById('root')
render(<App />, renderTarget)