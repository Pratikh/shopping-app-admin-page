import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Location from './Location'

const RouterPage = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/location' component={Location} />
                <Route exact path='*' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default RouterPage;