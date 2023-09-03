import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/HomeHeader';
import Menu from './screens/Menu';
import Orders from './screens/Orders';
import Layout from './screens/components/Layout';

function App() {
  return (
    <div className="App d-flex flex-column" style={{ height: "100vh" }}>
      <BrowserRouter>

        <Layout>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/menu' Component={Menu} />
            <Route path='/orders' Component={Orders} />
          </Routes>
        </Layout>

      </BrowserRouter>

    </div>
  );
}

export default App;
