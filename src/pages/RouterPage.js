import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';

const RouterPage = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='*' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default RouterPage;