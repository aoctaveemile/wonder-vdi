"use client";
import { useEffect, useState } from "react";
import { initStorage, getData } from "@/lib/data";
import { BarChart, Bar, XAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users, ShoppingBag, Award } from "lucide-react";

export default function Dashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    initStorage();
    setData(getData());
  }, []);

  if (!data) return <div className="p-8 text-center">Chargement...</div>;

  return (
    <div className="p-6 space-y-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Bonjour, Lili !</h1>
        <p className="text-gray-500">Voici vos performances de la semaine.</p>
      </header>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-pink-100">
          <div className="flex items-center gap-2 mb-2 text-primary">
            <TrendingUp size={18} />
            <span className="text-xs font-bold text-green-600">+{data.stats.trend}%</span>
          </div>
          <p className="text-2xl font-bold">{data.stats.revenue}€</p>
          <p className="text-xs text-gray-400">CA TOTAL</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-pink-100">
          <div className="flex items-center gap-2 mb-2 text-secondary"><Users size={18}/></div>
          <p className="text-2xl font-bold">+{data.stats.newClients}</p>
          <p className="text-xs text-gray-400">NOUVEAUX</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-pink-100">
          <div className="flex items-center gap-2 mb-2 text-blue-500"><ShoppingBag size={18}/></div>
          <p className="text-2xl font-bold">{data.stats.activeOrders}</p>
          <p className="text-xs text-gray-400">COMMANDES</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-pink-100">
          <div className="flex items-center gap-2 mb-2 text-yellow-500"><Award size={18} /></div>
          <p className="text-sm font-bold truncate">{data.stats.topProduct}</p>
          <p className="text-xs text-gray-400">TOP PRODUIT</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h3 className="font-semibold mb-4">Ventes par jour</h3>
        <div className="h-40 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.salesData}>
              <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
              <Bar dataKey="sales" fill="#BE123C" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm mb-16">
        <h3 className="font-semibold mb-4">Répartition</h3>
        <div className="h-40 w-full flex justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data.categoryData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} paddingAngle={5} dataKey="value">
                {data.categoryData.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-4 text-xs text-gray-500 mt-2">
           <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-primary"></div> Parfum</span>
           <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-pink-400"></div> Maquillage</span>
           <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-secondary"></div> Soin</span>
        </div>
      </div>
    </div>
  );
}