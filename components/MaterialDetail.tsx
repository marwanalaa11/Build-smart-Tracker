
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Material, PriceHistoryPoint, Supplier } from '../types';
import { PriceChart } from './PriceChart';
import { SupplierList } from './SupplierList';
import { ArrowLeftIcon, RefreshIcon, PriceTagIcon, ChartBarIcon, TruckIcon } from './Icons';

interface MaterialDetailProps {
  material: Material;
  onBack: () => void;
}

// Function to generate simulated historical price data
const generatePriceHistory = (basePrice: number): PriceHistoryPoint[] => {
  const history: PriceHistoryPoint[] = [];
  let currentPrice = basePrice * (1 + (Math.random() - 0.5) * 0.1); // Start with some variance
  for (let i = 29; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    currentPrice *= (1 + (Math.random() - 0.5) * 0.02); // Small daily fluctuation
    history.push({
      date: date.toLocaleDateString('en-CA'), // YYYY-MM-DD
      price: parseFloat(currentPrice.toFixed(2)),
    });
  }
  return history;
};

const StatCard: React.FC<{title: string, value: string | number, color: string, icon: React.ReactNode}> = ({title, value, color, icon}) => (
    <div className="bg-slate-50 p-4 rounded-xl border flex items-center space-x-4">
        <div className={`p-3 rounded-full ${color.replace('text', 'bg').replace('-600', '-100')}`}>
            {icon}
        </div>
        <div>
            <p className="text-sm font-medium text-slate-500">{title}</p>
            <p className={`text-xl sm:text-2xl font-bold ${color}`}>{value}</p>
        </div>
    </div>
);


export const MaterialDetail: React.FC<MaterialDetailProps> = ({ material, onBack }) => {
  const [suppliers, setSuppliers] = useState<Supplier[]>(material.suppliers);
  const [priceHistory, setPriceHistory] = useState<PriceHistoryPoint[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const stats = useMemo(() => {
    if (!suppliers || suppliers.length === 0) {
        return { bestPrice: 'AED 0.00', avgPrice: 'AED 0.00', supplierCount: 0 };
    }
    const prices = suppliers.map(s => s.price);
    const bestPrice = Math.min(...prices);
    const avgPrice = prices.reduce((acc, p) => acc + p, 0) / prices.length;
    return {
        bestPrice: `AED ${bestPrice.toFixed(2)}`,
        avgPrice: `AED ${avgPrice.toFixed(2)}`,
        supplierCount: suppliers.length
    };
  }, [suppliers]);

  useEffect(() => {
    setPriceHistory(generatePriceHistory(parseFloat(stats.avgPrice.replace('AED ', ''))));
  }, [material, stats.avgPrice]);

  const handleRefreshPrices = useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => {
        const newSuppliers = suppliers.map(supplier => {
            const fluctuation = (Math.random() - 0.5) * 0.05; // +/- 2.5% change
            const newPrice = supplier.price * (1 + fluctuation);
            return { ...supplier, price: parseFloat(newPrice.toFixed(2)) };
        });
        setSuppliers(newSuppliers);
        setIsRefreshing(false);
    }, 700); // Simulate network delay
  }, [suppliers]);

  return (
    <div className="animate-fadeIn">
      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-6 gap-4">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors group"
        >
          <ArrowLeftIcon className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-sm">Back to Materials</span>
        </button>
         <button
          onClick={handleRefreshPrices}
          disabled={isRefreshing}
          className="flex items-center justify-center w-full sm:w-auto space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-200 disabled:bg-slate-400 disabled:cursor-not-allowed shadow hover:shadow-md"
        >
          <RefreshIcon className={`h-5 w-5 ${isRefreshing ? 'animate-spin' : ''}`} />
          <span className="text-sm">{isRefreshing ? 'Updating...' : 'Refresh Prices'}</span>
        </button>
      </div>
      
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{material.name}</h2>
        <p className="text-base sm:text-lg text-slate-500 mt-1">Unit: {material.unit}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard title="Best Price" value={stats.bestPrice} color="text-green-600" icon={<PriceTagIcon className="h-6 w-6 text-green-600" />} />
        <StatCard title="Average Price" value={stats.avgPrice} color="text-orange-600" icon={<ChartBarIcon className="h-6 w-6 text-orange-600" />} />
        <StatCard title="Suppliers Tracked" value={stats.supplierCount} color="text-blue-600" icon={<TruckIcon className="h-6 w-6 text-blue-600" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 bg-white p-4 sm:p-6 rounded-2xl shadow-lg border">
            <h3 className="text-lg sm:text-xl font-bold text-slate-700 mb-4">30-Day Average Price Trend (Simulated)</h3>
            <PriceChart data={priceHistory} />
        </div>
        <div className="lg:col-span-2 bg-white p-4 sm:p-6 rounded-2xl shadow-lg border">
             <h3 className="text-lg sm:text-xl font-bold text-slate-700 mb-4">Live Supplier Prices</h3>
            <SupplierList suppliers={suppliers} />
        </div>
      </div>
    </div>
  );
};
