export const initialData = {
    stats: {
      revenue: 2450,
      trend: 12,
      newClients: 3,
      activeOrders: 18,
      topProduct: "Elixir de Rose",
    },
    salesData: [
      { name: "Lun", sales: 120 },
      { name: "Mar", sales: 200 },
      { name: "Mer", sales: 150 },
      { name: "Jeu", sales: 320 },
      { name: "Ven", sales: 280 },
      { name: "Sam", sales: 450 },
      { name: "Dim", sales: 190 },
    ],
    categoryData: [
      { name: "Parfum", value: 60, fill: "#BE123C" },
      { name: "Maquillage", value: 25, fill: "#F472B6" },
      { name: "Soin", value: 15, fill: "#D4AF37" },
    ],
    stock: [
      { id: 1, name: "Elixir de Rose", category: "Parfum", qty: 12, price: 85 },
      { id: 2, name: "Rouge Velours", category: "Maquillage", qty: 2, price: 35 },
      { id: 3, name: "Sérum Or", category: "Soin", qty: 5, price: 120 },
      { id: 4, name: "Jardin d'Été", category: "Parfum", qty: 8, price: 75 },
    ],
    clients: [
      { id: 1, name: "Sophie Martin", lastPurchase: "2023-11-10", preference: "Floral", history: "Elixir de Rose" },
      { id: 2, name: "Julie Dupont", lastPurchase: "2023-10-25", preference: "Boisé", history: "Sérum Or" },
    ],
    orders: [
      { id: 101, client: "Sophie Martin", total: 85, status: "Livré", date: "2023-11-10" },
      { id: 102, client: "Julie Dupont", total: 120, status: "En cours", date: "2023-11-28" },
    ],
  };
  
  export const initStorage = () => {
    if (typeof window !== "undefined" && !localStorage.getItem("wonder_vdi_data")) {
      localStorage.setItem("wonder_vdi_data", JSON.stringify(initialData));
    }
  };
  
  export const getData = () => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("wonder_vdi_data");
      return data ? JSON.parse(data) : initialData;
    }
    return initialData;
  };
  
  export const saveData = (newData: any) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("wonder_vdi_data", JSON.stringify(newData));
    }
  };