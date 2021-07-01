import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Films from './Pages/Films'
import FilmDetails from './Pages/FilmDetails'
import People from './Pages/People'
import PeopleDetails from './Pages/PeopleDetails'
import Locations from './Pages/Locations'
import LocationDetails from './Pages/LocationDetails'
import Navbar from './components/Navbar'

const App = () =>{
    return (
        <BrowserRouter>
            <Navbar />
        <Switch>
           
            <Route exact path = '/'>
                <Home />
            </Route>
            <Route exact path = '/films'>
                <Films />
            </Route>
            <Route exact path = '/films/:filmid'>
                <FilmDetails />
            </Route>
            <Route exact path = '/people'>
                <People />
            </Route>
            <Route exact path = '/people/:peopleid'>
                <PeopleDetails />
            </Route>
            <Route exact path = '/locations'>
                <Locations />
            </Route>
            <Route exact path = '/locations/:locationsid'>
                <LocationDetails />
            </Route>
            <Route exact path = '*'>
                {()=> <h1>404: Not Found</h1>}
            </Route>
        </Switch>

</BrowserRouter>
    )
}

export default App