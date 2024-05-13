import logo from './logo.svg';
import './App.css';
// import { Header } from './Component/Header';
import { Provider } from 'react-redux';
import { Store,Persistor } from './Redux/store';
import { Router } from './Router/Broserroute';
import { PersistGate } from 'redux-persist/es/integration/react';
function App() {
  return (
    <Provider store={Store}>
      <PersistGate Loading={null} persistor={Persistor}>
    <div className="App">
<Router/>
    </div>
    </PersistGate>
    </Provider>
  );
}

export default App;
