import './App.css';
import Main from './Pages/Main';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SingleItem from './Pages/SingleItem';

function App() {
  return (
    <div className="App">
      <NavBar/>
       <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/:id" element={<SingleItem />}></Route>
            </Routes>
       </BrowserRouter>
       <footer className="mt-auto" style={{padding: '10px'}}>
        <Footer/>
       </footer>
    </div>
  );
}

export default App;
