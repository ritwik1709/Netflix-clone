import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Components/Home';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
