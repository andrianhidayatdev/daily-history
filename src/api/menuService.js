import { supabase } from "../supabaseClient";

export default async function getAllMenu() {
  const { data, error } = await supabase.from("menu").select("*");

  if (error) {
    console.error(error);
    return []; // balikan array kosong biar aman
  }

  return data; // ini harus ada
}
