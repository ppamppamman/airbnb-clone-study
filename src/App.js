import './App.css';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

// import NavContainer from './containers/NavContainer';

function App() {
  return (
    <>
      {/* <NavContainer /> */}
      <Route exact path="/" component={MainPage} />
    </>
  );
}

export default App;
