import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { value: 20 },
  { value: 40 },
  { value: 35 },
  { value: 50 },
  { value: 45 },
  { value: 70 },
  { value: 65 },
  { value: 85 },
  { value: 100 },
];

export default function StatsCard() {
  return (
    <div className="glass-card rounded-2xl p-5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] border border-white/60 transform transition-transform hover:scale-105 duration-300 bg-white/95 backdrop-blur-xl">
      <div className="flex justify-between items-start mb-4">
        <div>
            <h3 className="text-sm font-bold text-[#0A2E22]">Growth</h3>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">
            This Month
            </p>
        </div>
        <div className="bg-[#E6FFF5] p-1.5 rounded-lg">
            <TrendingUp className="w-4 h-4 text-[#0A2E22]" />
        </div>
      </div>
      
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-3xl font-extrabold text-[#0A2E22] tracking-tight">+240%</span>
        <span className="text-xs font-bold text-[#0A2E22] bg-[#E6FFF5] px-2 py-0.5 rounded-full">
            Organic
        </span>
      </div>

      <div className="h-16 w-full -ml-2 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#155E4A" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#155E4A" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#155E4A" 
              strokeWidth={3} 
              fillOpacity={1} 
              fill="url(#colorValue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}