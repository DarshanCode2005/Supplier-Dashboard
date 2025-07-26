import React, { useState } from 'react';
import { Clock, Truck, CheckCircle, Upload, Eye, Users } from 'lucide-react';

const orders = [
  {
    id: 1,
    cluster: 'Lajpat Nagar Cluster',
    vendors: 8,
    items: 'Rice, Dal, Oil',
    amount: 12450,
    acceptDate: '2025-01-15',
    deliveryDate: '2025-01-20',
    status: 'pending',
    progress: 25
  },
  {
    id: 2,
    cluster: 'Karol Bagh Hub',
    vendors: 12,
    items: 'Vegetables, Spices',
    amount: 8920,
    acceptDate: '2025-01-14',
    deliveryDate: '2025-01-18',
    status: 'ready',
    progress: 50
  },
  {
    id: 3,
    cluster: 'CP Market Zone',
    vendors: 6,
    items: 'Dry Goods',
    amount: 15650,
    acceptDate: '2025-01-13',
    deliveryDate: '2025-01-17',
    status: 'out_for_delivery',
    progress: 75
  },
  {
    id: 4,
    cluster: 'Rohini Trade Hub',
    vendors: 10,
    items: 'Pulses, Grains',
    amount: 11230,
    acceptDate: '2025-01-12',
    deliveryDate: '2025-01-16',
    status: 'delivered',
    progress: 100
  }
];

const tabs = [
  { id: 'all', name: 'All Orders', count: 4 },
  { id: 'pending', name: 'Pending', count: 1 },
  { id: 'ready', name: 'Ready to Ship', count: 1 },
  { id: 'out_for_delivery', name: 'Out for Delivery', count: 1 },
  { id: 'delivered', name: 'Delivered', count: 1 }
];

export default function FulfillOrders() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredOrders = activeTab === 'all' 
    ? orders 
    : orders.filter(order => order.status === activeTab);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'ready': return 'bg-blue-100 text-blue-800';
      case 'out_for_delivery': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'ready': return <CheckCircle className="w-4 h-4" />;
      case 'out_for_delivery': return <Truck className="w-4 h-4" />;
      case 'delivered': return <CheckCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Pending';
      case 'ready': return 'Ready to Ship';
      case 'out_for_delivery': return 'Out for Delivery';
      case 'delivered': return 'Delivered';
      default: return status;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Fulfill Orders</h1>
        <p className="text-gray-600">Track and manage your accepted group orders</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
                <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                  activeTab === tab.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <div key={order.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{order.cluster}</h3>
                    <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {order.vendors} vendors
                      </div>
                      <div>Items: {order.items}</div>
                    </div>
                    <div className="text-sm text-gray-500">
                      Accepted: {new Date(order.acceptDate).toLocaleDateString()} | 
                      Delivery: {new Date(order.deliveryDate).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">₹{order.amount.toLocaleString()}</p>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-1">{getStatusText(order.status)}</span>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{order.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${order.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200">
                      <Eye className="w-4 h-4 inline mr-1" />
                      View Details
                    </button>
                    {order.status === 'delivered' && (
                      <button className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors duration-200">
                        <Upload className="w-4 h-4 inline mr-1" />
                        Upload Invoice
                      </button>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {order.status === 'pending' && (
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
                        Mark Ready
                      </button>
                    )}
                    {order.status === 'ready' && (
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors duration-200">
                        Out for Delivery
                      </button>
                    )}
                    {order.status === 'out_for_delivery' && (
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200">
                        Mark Delivered
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
              <p className="text-gray-500">Orders matching your filter will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}