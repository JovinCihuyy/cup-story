export const dataMenu = [
  {
    id: "M001",
    nama: "Signature Latte",
    kategori: "Kopi",
    harga: 32000,
    deskripsi: "Signature latte andalan Cup Story dengan racikan spesial",
    stok: 50,
    rating: 4.9
  },
  {
    id: "M002",
    nama: "Creamy Coffee Caramel",
    kategori: "Kopi",
    harga: 20000,
    deskripsi: "Espresso dengan sirup karamel manis dan krim lembut",
    stok: 40,
    rating: 4.7
  },
  {
    id: "M003",
    nama: "Matcha Latte",
    kategori: "Non-Kopi",
    harga: 30000,
    deskripsi: "Teh hijau Jepang premium dengan susu segar",
    stok: 35,
    rating: 4.8
  },
  {
    id: "M004",
    nama: "Americano",
    kategori: "Kopi",
    harga: 22000,
    deskripsi: "Espresso dengan air panas, rasa kopi kuat dan ringan",
    stok: 60,
    rating: 4.5
  },
  {
    id: "M005",
    nama: "Thai Tea",
    kategori: "Non-Kopi",
    harga: 25000,
    deskripsi: "Teh Thailand dengan susu kental manis yang creamy",
    stok: 45,
    rating: 4.7
  }
];

export function registerMenuTools(server: any) {
  server.tool(
    "get_menu",
    "Mendapatkan daftar menu Cup Story",
    {},
    async () => {
      return {
        content: [{
          type: "text",
          text: JSON.stringify(dataMenu)
        }]
      };
    }
  );
  console.error("✅ Tool get_menu terdaftar!");
}