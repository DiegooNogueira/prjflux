import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import CousersList from './components/CousersList';

function App() {
  return (
    <Provider store={store}>
      <CousersList></CousersList>
    </Provider>
    
  );
}

export default App;
