import React from 'react';
import { Plus, Package, Truck, TrendingUp, Users, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { name: 'New Group Orders', value: '12', icon: Package, color: 'text-blue-600', bg: 'bg-blue-100' },
  { name: 'Orders in Progress', value: '8', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-100' },
  { name: 'Monthly Earnings', value: '₹45,280', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-100' },
  { name: 'Deliveries Today', value: '5', icon: Truck, color: 'text-purple-600', bg: 'bg-purple-100' },
];

const recentOrders = [
  { id: '1', cluster: 'Lajpat Nagar Cluster', items: 'Rice, Dal, Oil', vendors: 8, amount: '₹12,450', status: 'pending' },
  { id: '2', cluster: 'Karol Bagh Hub', items: 'Vegetables, Spices', vendors: 12, amount: '₹8,920', status: 'confirmed' },
  { id: '3', cluster: 'CP Market Zone', items: 'Dry Goods', vendors: 6, amount: '₹15,650', status: 'delivered' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, Rajesh Suppliers</p>
        </div>
        <div className="flex space-x-3">
          <Link
            to="/products"
            className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Link>
          <Link
            to="/orders"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            <Truck className="w-4 h-4 mr-2" />
            Fulfill Orders
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className={`p-2 rounded-lg ${stat.bg}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Group Orders</h2>
            <Link to="/orders/new" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{order.cluster}</h3>
                  <p className="text-sm text-gray-600">{order.items}</p>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    {order.vendors} vendors
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{order.amount}</p>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    order.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {order.status === 'pending' && <AlertCircle className="w-3 h-3 mr-1" />}
                    {order.status === 'confirmed' && <Clock className="w-3 h-3 mr-1" />}
                    {order.status === 'delivered' && <CheckCircle className="w-3 h-3 mr-1" />}
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                to="/products"
                className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
              >
                <Plus className="w-5 h-5 text-blue-600 mr-3" />
                <span className="font-medium text-blue-700">Add New Product</span>
              </Link>
              <Link
                to="/delivery-map"
                className="flex items-center p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors duration-200"
              >
                <Truck className="w-5 h-5 text-emerald-600 mr-3" />
                <span className="font-medium text-emerald-700">Plan Deliveries</span>
              </Link>
              <Link
                to="/analytics"
                className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200"
              >
                <TrendingUp className="w-5 h-5 text-purple-600 mr-3" />
                <span className="font-medium text-purple-700">View Analytics</span>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Trust Score</h3>
            <div className="flex items-center">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <span className="text-3xl font-bold">4.8</span>
                  <span className="text-blue-200 ml-1">/5.0</span>
                </div>
                <div className="w-full bg-blue-500 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{width: '96%'}}></div>
                </div>
              </div>
              <div className="ml-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
              </div>
            </div>
            <p className="text-blue-100 text-sm mt-2">Excellent supplier rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}