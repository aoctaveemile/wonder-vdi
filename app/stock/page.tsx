"use client";
import { useEffect, useState } from "react";
import { getData, saveData } from "@/lib/data";
import { AlertCircle } from "lucide-react";

export default function StockPage() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    setItems(getData().stock);
  }, []);

  const updateStock = (id: number, delta: number) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, qty: Math.max(0, item.qty + delta) };
      }
      return item;
    });
    setItems(newItems);
    const currentData = getData();
    currentData.stock = newItems;
    saveData(currentData);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Mon Stock</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{item.name}</h3>
                {item.qty < 3 && <AlertCircle size={16} className="text-red-500" />}
              </div>
              <p className="text-xs text-gray-500">{item.category} • {item.price}€</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => updateStock(item.id, -1)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">-</button>
              <span className={`font-bold w-6 text-center ${item.qty < 3 ? 'text-red-500' : 'text-slate-800'}`}>{item.qty}</span>
              <button onClick={() => updateStock(item.id, 1)} className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}