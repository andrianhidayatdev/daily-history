import SelectInput from "./SelectInput";

export default function ModalCategory({
  title,
  isOpen,
  handleSubmit,
  name,
  setName,
  menuId,
  setMenuId,
  handleClose,
}) {
  return (
    <>
      {isOpen && (
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
              {title}
            </h2>

            <div className="mt-4">
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                  <span className="text-sm font-medium text-gray-700">
                    Name{" "}
                  </span>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm text-lg p-2"
                  />
                </label>

                <label htmlFor="menu">
                  <span className="text-sm font-medium text-gray-700">
                    Menu{" "}
                  </span>

                  <SelectInput
                    value={menuId}
                    onChange={setMenuId}
                  ></SelectInput>
                </label>
                <footer className="mt-6 flex justify-end gap-2">
                  <button
                    onClick={handleClose}
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
    </>
  );
}
