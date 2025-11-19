import { supabase } from "../supabaseClient";
import React, { useEffect, useState } from "react";

export default function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getAllMenu();
  }, []);

  const getAllMenu = async () => {
    const { data, error } = await supabase.from("menu").select("*");

    if (error) console.log("Error : ", error);
    else console.log("Menu : ", data);
    setMenu(data);
  };

  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const openModalAdd = () => setIsOpenAdd(true);
  const closeModalAdd = () => setIsOpenAdd(false);

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmitAdd = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("menu")
      .insert([{ name: name, url: url }]);

    if (error) {
      console.log("Error : ", error);
    } else {
      console.log("Menu : ", data);
      setName("");
      setUrl("");
      closeModalAdd();
      getAllMenu();
    }
  };

  const handleDelete = async (id) => {
    const { data, error } = await supabase.from("menu").delete().eq("id", id);

    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Berhasil dihapus:", data);
      getAllMenu();
    }
  };

  const [OpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editUrl, setEditUrl] = useState("");

  const handleOpenModalEdit = (item) => {
    setEditId(item.id);
    setEditName(item.name);
    setEditUrl(item.url);
    setIsOpenModalEdit(true);

    console.log("success", item);
  };

  const handleCloseOpenModalEdit = () => {
    setIsOpenModalEdit(false);
    setEditId(null);
    setEditName("");
    setEditUrl("");
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("menu")
      .update({ name: editName, url: editUrl })
      .eq("id", editId);

    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Menu diupdate:", data);

      handleCloseOpenModalEdit();
      getAllMenu();
    }
  };

  return (
    <div className="rounded-[10px] border border-gray-200 bg-white p-5 w-300   mb-7 shadow-2xl font-bold">
      <div className="flex flex-col gap-2">
        <div>
          <button
            onClick={openModalAdd}
            className="group relative inline-block text-sm font-medium text-white"
            href="#"
          >
            <span className="absolute inset-0 border border-blue-900"></span>
            <span className="block border border-blue-900 bg-blue-900 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
              Tambah Menu
            </span>
          </button>
        </div>
        <div>
          <div className="overflow-x-auto rounded border border-gray-300 shadow-sm">
            <table className="min-w-full divide-y-2 divide-gray-200">
              <thead className="ltr:text-left rtl:text-right">
                <tr className="*:font-medium *:text-gray-900">
                  <th className="px-3 py-2 whitespace-nowrap">Name</th>
                  <th className="px-3 py-2 whitespace-nowrap">Url</th>
                  <th className="px-3 py-2 whitespace-nowrap">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {menu.length > 0 ? (
                  menu.map((item) => (
                    <tr
                      key={item.id}
                      className="*:text-gray-900 *:first:font-medium"
                    >
                      <td className="px-3 py-2 whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        {item.url}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <div className="inline-flex">
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
                            onClick={() => handleDelete(item.id)}
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
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="px-3 py-2 text-center">
                      Menu kosong
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isOpenAdd && (
        <div
          className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
        >
          <div className=" max-w-md rounded-lg bg-white p-6 shadow-lg  w-6xl">
            <h2
              id="modalTitle"
              className="text-xl font-bold text-gray-900 sm:text-2xl"
            >
              Tambah Menu
            </h2>

            <div className="mt-4">
              <form onSubmit={handleSubmitAdd}>
                <label for="menu">
                  <span className="text-sm font-medium text-gray-700">
                    Menu{" "}
                  </span>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm text-lg p-2"
                  />
                </label>

                <label for="menu">
                  <span className="text-sm font-medium text-gray-700">
                    Url{" "}
                  </span>

                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm text-lg p-2"
                  />
                </label>
                <footer className="mt-6 flex justify-end gap-2">
                  <button
                    onClick={closeModalAdd}
                    type="button"
                    className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                  >
                    Done
                  </button>
                </footer>
              </form>
            </div>
          </div>
        </div>
      )}
      {OpenModalEdit && (
        <div
          className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
        >
          <div className=" max-w-md rounded-lg bg-white p-6 shadow-lg  w-6xl">
            <h2
              id="modalTitle"
              className="text-xl font-bold text-gray-900 sm:text-2xl"
            >
              Edit Menu
            </h2>

            <div className="mt-4">
              <form onSubmit={handleSubmitEdit}>
                <label for="menu">
                  <span className="text-sm font-medium text-gray-700">
                    Menu{" "}
                  </span>

                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm text-lg p-2"
                  />
                </label>

                <label for="menu">
                  <span className="text-sm font-medium text-gray-700">
                    Url{" "}
                  </span>

                  <input
                    type="text"
                    value={editUrl}
                    onChange={(e) => setEditUrl(e.target.value)}
                    className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm text-lg p-2"
                  />
                </label>
                <footer className="mt-6 flex justify-end gap-2">
                  <button
                    onClick={handleCloseOpenModalEdit}
                    type="button"
                    className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                  >
                    Done
                  </button>
                </footer>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
