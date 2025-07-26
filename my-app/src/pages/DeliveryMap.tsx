import React from 'react';
import { MapPin, Route, Truck, Clock, Package } from 'lucide-react';

const deliveryPoints = [
  {
    id: 1,
    cluster: 'Lajpat Nagar Cluster',
    address: 'Main Market, Lajpat Nagar-II, New Delhi',
    vendors: 8,
    orders: 3,
    weight: '145 kg',
    estimatedTime: '45 min',
    priority: 'high'
  },
  {
    id: 2,
    cluster: 'Karol Bagh Hub',
    address: 'Gaffar Market, Karol Bagh, New Delhi',
    vendors: 12,
    orders: 2,
    weight: '280 kg',
    estimatedTime: '30 min',
    priority: 'medium'
  },
  {
    id: 3,
    cluster: 'CP Market Zone',
    address: 'Connaught Place, Central Delhi',
    vendors: 6,
    orders: 1,
    weight: '95 kg',
    estimatedTime: '25 min',
    priority: 'low'
  },
  {
    id: 4,
    cluster: 'Rohini Trade Hub',
    address: 'Sector 11, Rohini, New Delhi',
    vendors: 10,
    orders: 4,
    weight: '220 kg',
    estimatedTime: '60 min',
    priority: 'high'
  }
];

const routes = [
  {
    id: 1,
    name: 'Route A - South Delhi',
    clusters: ['Lajpat Nagar Cluster', 'CP Market Zone'],
    distance: '15.2 km',
    duration: '70 min',
    fuel: '₹180'
  },
  {
    id: 2,
    name: 'Route B - Central & West',
    clusters: ['Karol Bagh Hub'],
    distance: '8.5 km',
    duration: '30 min',
    fuel: '₹100'
  },
  {
    id: 3,
    name: 'Route C - North Delhi',
    clusters: ['Rohini Trade Hub'],
    distance: '22.8 km',
    duration: '60 min',
    fuel: '₹250'
  }
];

export default function DeliveryMap() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Delivery Map Planner</h1>
          <p className="text-gray-600">Optimize your delivery routes and track drop points</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
          <Route className="w-4 h-4 mr-2" />
          Optimize Routes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Placeholder */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Delivery Map</h3>
              <p className="text-gray-600 mb-4">Google Maps integration would display delivery points and optimized routes</p>
              
              {/* Mock pins */}
              <div className="absolute top-16 left-20 w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
              <div className="absolute top-24 right-32 w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
              <div className="absolute bottom-20 left-32 w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
              <div className="absolute bottom-16 right-20 w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Delivery Summary */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Summary</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">Total Clusters</span>
                </div>
                <span className="font-semibold text-gray-900">4</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Package className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm text-gray-600">Total Orders</span>
                </div>
                <span className="font-semibold text-gray-900">10</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Truck className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-sm text-gray-600">Total Weight</span>
                </div>
                <span className="font-semibold text-gray-900">740 kg</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-orange-600 mr-2" />
                  <span className="text-sm text-gray-600">Est. Duration</span>
                </div>
                <span className="font-semibold text-gray-900">3.5 hrs</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Suggested Routes</h3>
            <div className="space-y-3">
              {routes.map((route) => (
                <div key={route.id} className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-1">{route.name}</h4>
                  <p className="text-xs text-gray-600 mb-2">{route.clusters.join(', ')}</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{route.distance}</span>
                    <span>{route.duration}</span>
                    <span>{route.fuel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Points List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Delivery Points</h3>
        </div>
        <div className="p-6">
          <div className="grid gap-4">
            {deliveryPoints.map((point) => (
              <div key={point.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h4 className="font-semibold text-gray-900 mr-3">{point.cluster}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(point.priority)}`}>
                      {point.priority.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{point.address}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{point.vendors} vendors</span>
                    <span>{point.orders} orders</span>
                    <span>{point.weight}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <Clock className="w-4 h-4 mr-1" />
                    {point.estimatedTime}
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200">
                    View on Map
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}