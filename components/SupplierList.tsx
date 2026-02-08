
import React from 'react';
import { Supplier } from '../types';
import { MapPinIcon, StarIcon } from './Icons';

interface SupplierListProps {
  suppliers: Supplier[];
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          className={`h-5 w-5 ${
            index < Math.round(rating) ? 'text-yellow-400' : 'text-slate-300'
          }`}
        />
      ))}
    </div>
  );
};


export const SupplierList: React.FC<SupplierListProps> = ({ suppliers }) => {
  const sortedSuppliers = [...suppliers].sort((a, b) => a.price - b.price);

  return (
    <div className="space-y-3">
        {sortedSuppliers.map((supplier) => (
            <div key={supplier.name} className="bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 hover:shadow-md hover:border-blue-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div className="flex-grow">
                        <h4 className="font-semibold text-base text-slate-800">{supplier.name}</h4>
                        <div className="flex items-center space-x-1.5 text-xs text-slate-500 mt-1">
                            <MapPinIcon className="h-4 w-4" />
                            <span>{supplier.location}</span>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                         <StarRating rating={supplier.rating} />
                    </div>
                </div>
                <div className="mt-3 flex justify-between items-center">
                    <div 
                        className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold ${
                            supplier.stockAvailability 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}
                    >
                        <span className={`h-2 w-2 rounded-full ${supplier.stockAvailability ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        <span>{supplier.stockAvailability ? 'In Stock' : 'Out of Stock'}</span>
                    </div>
                    <p className="text-xl font-extrabold text-blue-600 tracking-tight">
                        <span className="text-sm font-bold opacity-70">AED </span> {supplier.price.toFixed(2)}
                    </p>
                </div>
            </div>
        ))}
    </div>
  );
};
