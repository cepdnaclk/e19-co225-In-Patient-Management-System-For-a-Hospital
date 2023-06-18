
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index element = {<DashBoard/>}/>
          <Route path = "/" element = {<DashBoard/>}></Route>
          <Route path = "/admin" element = {<DashBoard/>}></Route>

        </Routes>


    
    </BrowserRouter>
    </>
  );
}

export default App;
