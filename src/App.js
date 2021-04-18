import { Provider } from 'react-redux';
import './App.css';
import { RouterPage } from './pages'
import Store from './reduxStore'

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <RouterPage />
      </div>
    </Provider>
  );
}

export default App;
