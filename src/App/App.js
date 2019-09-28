import React from 'react'
import Home from '../Home/Home'
import PlayScreen from '../PlayScreen/PlayScreen'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

const App = () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/playscreen" component={PlayScreen}></Route>
        </Switch>
    </BrowserRouter>
    )
}

export default App