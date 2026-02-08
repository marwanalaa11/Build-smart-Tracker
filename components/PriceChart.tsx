
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PriceHistoryPoint } from '../types';

interface PriceChartProps {
  data: PriceHistoryPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const formattedDate = new Date(label).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
        <p className="font-semibold text-gray-700">{formattedDate}</p>
        <p className="text-blue-600 font-bold">{`Avg. Price: AED ${payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }
  return null;
};


export const PriceChart: React.FC<PriceChartProps> = ({ data }) => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: -15,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12, fill: '#6b7280' }} 
            tickFormatter={(tick) => new Date(tick).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          />
          <YAxis 
            tick={{ fontSize: 12, fill: '#6b7280' }} 
            domain={['dataMin - 20', 'dataMax + 20']}
            tickFormatter={(tick) => `AED ${tick}`}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontSize: '14px', paddingTop: '10px' }}/>
          <Area type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2.5} fillOpacity={1} fill="url(#colorPrice)" activeDot={{ r: 8, strokeWidth: 2 }} name="Average Price (AED)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
