import { useEffect, useState } from "react";
import getAllMenu from "../api/MenuService";

export default function SelectInput({ value, onChange }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await getAllMenu();
      setData(data);
    }
    loadData();
  }, []);

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm text-lg p-2"
    >
      {data.length === 0 && <option value="">Loading...</option>}

      {data.length > 0 && <option value="">Pilih kategori</option>}

      {data.map((item) => (
        <option value={item.id} key={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}
