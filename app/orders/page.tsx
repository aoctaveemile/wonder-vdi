"use client";
import { useEffect, useState } from "react";
import { getData, saveData } from "@/lib/data";
import { Plus } from "lucide-react";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    setOrders(getData().orders);
  }, []);

  const addMockOrder = () => {
    const newOrder = {
      id: Math.floor(Math.random() * 1000),
      client: "Nouveau Client",
      total: 0,
      status: "En attente",
      date: new Date().toLocaleDateString('fr-FR')
    };
    const updated = [newOrder, ...orders];
    setOrders(updated);
    const data = getData();
    data.orders = updated;
    saveData(data);
  };

  const getStatusColor = (status: string) => {
    if (status === "Livré") return "bg-green-100 text-green-700";
    if (status === "En cours") return "bg-yellow-100 text-yellow-700";
    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="p-6 pb-24">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Commandes</h1>
        <button onClick={addMockOrder} className="bg-primary text-white p-2 rounded-full shadow-lg">
          <Plus size={24} />
        </button>
      </div>
      <div className="space-y-3">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
            <div>
              <h3 className="font-semibold">#{order.id} {order.client}</h3>
              <p className="text-xs text-gray-500">{order.date}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">{order.total}€</p>
              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}