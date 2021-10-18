
import './App.css';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import FirstComponent from './components/ComponentOne';
import SecondComponent from './components/ComponentTwo';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FirstComponent />
        <SecondComponent />
      </div>
    </Provider>

  );
}
export default App;
