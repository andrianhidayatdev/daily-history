import { Link } from "react-router-dom"
export default function Master(){
    return (<div class="rounded-[10px] border border-gray-200 bg-white p-5 w-200 text-center  mb-7 shadow-2xl font-bold">
            <Link to="/menu">
                 <div class="rounded-[10px]   bg-gray-400 px-4 py-4  mb-4">
    <h3 class="mt-0.5 text-lg font-medium text-white">
      Menu
    </h3>

    </div>
            </Link>
            <Link to="/category">
                 <div class="rounded-[10px]  bg-gray-400 px-4 py-4 ">
    <h3 class="mt-0.5 text-lg font-medium text-white">
      Category
    </h3>

    </div>
            </Link>
            
    </div> )
}