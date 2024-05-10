import logo from './logo.svg';
import './App.css';
// import { Header } from './Component/Header';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { Router } from './Router/Broserroute';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
<Router/>
    </div>
    </Provider>
  );
}

export default App;
