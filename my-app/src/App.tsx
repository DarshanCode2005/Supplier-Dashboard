import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import NewOrders from './pages/NewOrders';
import FulfillOrders from './pages/FulfillOrders';
import DeliveryMap from './pages/DeliveryMap';
import Analytics from './pages/Analytics';
import Ratings from './pages/Ratings';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="orders/new" element={<NewOrders />} />
            <Route path="orders" element={<FulfillOrders />} />
            <Route path="delivery-map" element={<DeliveryMap />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="ratings" element={<Ratings />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;