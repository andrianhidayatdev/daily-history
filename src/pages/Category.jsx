import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import {
  deleteCategoryById,
  getAllCategory,
  insertCategory,
  updateCategoryById,
} from "../api/categoryService";
import ModalCategory from "../components/ModalCategory";

export default function Category() {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [name, setName] = useState("");
  const [menuId, setMenuId] = useState("");
  const [category, setCategory] = useState([]);
  const handleDelete = async (id) => {
    await deleteCategoryById(id);
  };
  useEffect(() => {
    const fetchCategory = async () => {
      setCategory(await getAllCategory());
    };
    fetchCategory();
  }, [isOpenAdd, handleDelete]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      menu_id: menuId,
    };

    const result = await insertCategory(data);
    console.log("Insert result:", result);
    setName("");
    setMenuId("");
    setIsOpenAdd(false);
  };

  const handleClose = () => {
    setIsOpenAdd(false);
  };

  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [nameEdit, setNameEdit] = useState("");
  const [menuIdEdit, setMenuIdEdit] = useState("");
  const [categoryId, setCategoryId] = useState(null);

  const handleOpenModalEdit = async (item) => {
    setNameEdit(item.name);
    setMenuIdEdit(item.menu_id);
    setCategoryId(item.id);
    setIsOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setIsOpenEdit(false);
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    const data = {
      name: nameEdit,
      menu_id: menuIdEdit,
    };

    await updateCategoryById(categoryId, data);

    handleCloseEdit(false);
  };

  return (
    <div className="rounded-[10px] border border-gray-200 bg-white p-5 w-300   mb-7 shadow-2xl font-bold">
      <div className="flex flex-col gap-2">
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsOpenAdd(true);
            }}
            className="group relative inline-block text-sm font-medium text-white"
          >
            <span className="absolute inset-0 border border-blue-900"></span>
            <span className="block border border-blue-900 bg-blue-900 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
              Tambah Category
            </span>
          </button>
        </div>
        <div>
          <div className="overflow-x-auto rounded border border-gray-300 shadow-sm">
            <table className="min-w-full divide-y-2 divide-gray-200">
              <thead className="ltr:text-left rtl:text-right">
                <tr className="*:font-medium *:text-gray-900">
                  <th className="px-3 py-2 whitespace-nowrap">Name</th>
                  <th className="px-3 py-2 whitespace-nowrap">Menu</th>
                  <th className="px-3 py-2 whitespace-nowrap">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {category.length > 0 ? (
                  category.map((item) => (
                    <tr
                      key={item.id}
                      className="*:text-gray-900 *:first:font-medium"
                    >
                      <td className="px-3 py-2 whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        {item.menu.name}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <button
                          onClick={() => {
                            handleOpenModalEdit(item);
                          }}
                          className="-ml-px border border-gray-200 px-3 py-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            ></path>
                          </svg>
                        </button>

                        <button
                          onClick={() => handleDelete(item.menuId)}
                          className="-ml-px rounded-r-sm border border-gray-200 px-3 py-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            ></path>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="*:text-gray-900 *:first:font-medium text-center">
                    <td colSpan="3" className="px-3 py-2 whitespace-nowrap">
                      Category Kosong
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ModalCategory
        title="Tambah Category"
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        setMenuId={setMenuId}
        setName={setName}
        isOpen={isOpenAdd}
        name={name}
        menuId={menuId}
      />

      <ModalCategory
        title="Edit Category"
        handleSubmit={handleSubmitEdit}
        handleClose={handleCloseEdit}
        setMenuId={setMenuIdEdit}
        setName={setNameEdit}
        isOpen={isOpenEdit}
        name={nameEdit}
        menuId={menuIdEdit}
      />
    </div>
  );
}
