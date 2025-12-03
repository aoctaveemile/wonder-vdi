"use client";
import { useEffect, useState } from "react";
import { getData } from "@/lib/data";
import { Sparkles, MessageCircle } from "lucide-react";

export default function ClientsPage() {
  const [clients, setClients] = useState<any[]>([]);

  useEffect(() => {
    setClients(getData().clients);
  }, []);

  const generateAiMessage = (client: any) => {
    const suggestions: { [key: string]: string } = {
      "Floral": "Jardin d'Été",
      "Boisé": "Oud Mystique",
      "Fruité": "Pêche Divine"
    };
    const reco = suggestions[client.preference] || "Nouveauté";
    const msg = `Bonjour ${client.name.split(' ')[0]}, votre ${client.history} acheté le ${client.lastPurchase} arrive bientôt à terme. Voulez-vous tester notre nouveau ${reco} ?`;
    alert(`IA Suggestion SMS:\n\n"${msg}"`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Mes Clients</h1>
      <div className="space-y-4">
        {clients.map((client) => (
          <div key={client.id} className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-primary">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg">{client.name}</h3>
                <p className="text-xs text-gray-500">Dernier achat: {client.lastPurchase}</p>
              </div>
              <span className="bg-pink-50 text-pink-600 text-xs px-2 py-1 rounded-full">{client.preference}</span>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
               <div className="flex items-center gap-2 mb-2">
                 <Sparkles size={14} className="text-secondary" />
                 <span className="text-xs font-medium text-gray-600">
                   Basé sur "{client.preference}", suggérez: <span className="text-primary">Jardin d'Été</span>
                 </span>
               </div>
               <button 
                onClick={() => generateAiMessage(client)}
                className="w-full flex items-center justify-center gap-2 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition">
                 <MessageCircle size={16} />
                 Générer une relance IA
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}