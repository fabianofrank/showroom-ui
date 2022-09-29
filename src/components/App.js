import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Login from './Login';
import SignUp from './Signup';
import Cars from './Cars';
import CarDetails from './CarDetails';
import store from '../redux/configureStore';
import Navbar from './Navbar';
import '../App.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="bar">
        <Navbar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/car_details" element={<CarDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
