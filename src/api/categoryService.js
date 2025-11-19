import { supabase } from "../supabaseClient";

export async function getAllCategory() {
  const { data, error } = await supabase
    .from("category")
    .select("id,name,menu_id,menu:menu_id(id,name)");
  if (error) {
    console.error("Gagal mengambil kategori:", error);
    return [];
  } else {
    return data;
  }
}

export async function insertCategory(CategoryData) {
  const { data, error } = await supabase
    .from("category")
    .insert([CategoryData]);

  if (error) return error;

  return data;
}

export async function deleteCategoryById(id) {
  const { data, error } = await supabase.from("category").delete().eq("id", id);

  if (error) return error;

  return data;
}

export async function updateCategoryById(id, dataCategory) {
  const { data, error } = await supabase
    .from("category")
    .update(dataCategory)
    .eq("id", id);
  console.log(id);
  console.log(dataCategory);

  if (error) return error;
  else return data;
}
