import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Package, Users, Star } from 'lucide-react';

const metrics = [
  { name: 'Monthly Revenue', value: '₹2,45,680', change: '+12.5%', trend: 'up', icon: DollarSign },
  { name: 'Total Orders', value: '158', change: '+8.2%', trend: 'up', icon: Package },
  { name: 'Active Clusters', value: '24', change: '+3', trend: 'up', icon: Users },
  { name: 'Average Rating', value: '4.8', change: '+0.2', trend: 'up', icon: Star },
];

const popularItems = [
  { name: 'Basmati Rice', orders: 45, revenue: '₹38,250', growth: '+15%' },
  { name: 'Toor Dal', orders: 38, revenue: '₹45,600', growth: '+22%' },
  { name: 'Sunflower Oil', orders: 32, revenue: '₹44,800', growth: '+8%' },
  { name: 'Onions', orders: 28, revenue: '₹7,000', growth: '-5%' },
  { name: 'Potatoes', orders: 25, revenue: '₹4,500', growth: '+12%' },
];

const clusterPerformance = [
  { name: 'Lajpat Nagar Cluster', orders: 25, revenue: '₹65,450', rating: 4.9 },
  { name: 'Karol Bagh Hub', orders: 22, revenue: '₹58,920', rating: 4.7 },
  { name: 'CP Market Zone', orders: 18, revenue: '₹42,650', rating: 4.8 },
  { name: 'Rohini Trade Hub', orders: 15, revenue: '₹38,230', rating: 4.6 },
  { name: 'Dwarka Commerce', orders: 12, revenue: '₹31,580', rating: 4.5 },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics & Insights</h1>
        <p className="text-gray-600">Track your business performance and growth</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div className={`p-2 rounded-lg ${
                metric.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <metric.icon className={`h-6 w-6 ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`} />
              </div>
              <div className={`flex items-center text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 mr-1" />
                )}
                {metric.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-4">{metric.value}</h3>
            <p className="text-sm text-gray-600 mt-1">{metric.name}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart Placeholder */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
          <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <p className="text-gray-600">Revenue chart visualization</p>
              <p className="text-sm text-gray-500">Integration with charting library</p>
            </div>
          </div>
        </div>

        {/* Order Volume Chart Placeholder */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Volume</h3>
          <div className="h-64 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Package className="w-12 h-12 text-green-600 mx-auto mb-2" />
              <p className="text-gray-600">Order volume chart</p>
              <p className="text-sm text-gray-500">Monthly order tracking</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Popular Items */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Most Popular Items</h3>
          <div className="space-y-4">
            {popularItems.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-medium text-blue-600">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.orders} orders</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{item.revenue}</p>
                  <p className={`text-sm ${
                    item.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {item.growth}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cluster Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Cluster Performance</h3>
          <div className="space-y-4">
            {clusterPerformance.map((cluster, index) => (
              <div key={cluster.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{cluster.name}</h4>
                  <div className="flex items-center mt-1 text-sm text-gray-600">
                    <span>{cluster.orders} orders</span>
                    <span className="mx-2">•</span>
                    <span>{cluster.revenue}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium text-gray-900">{cluster.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Business Insights */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">Business Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium mb-2">Top Growth Opportunity</h4>
            <p className="text-blue-100 text-sm">Expand in Dwarka area - 40% demand increase</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Repeat Order Rate</h4>
            <p className="text-blue-100 text-sm">78% of clusters place repeat orders monthly</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Best Delivery Time</h4>
            <p className="text-blue-100 text-sm">Morning deliveries get 15% higher ratings</p>
          </div>
        </div>
      </div>
    </div>
  );
}