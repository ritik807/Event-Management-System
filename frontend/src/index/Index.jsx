// import { useNavigate } from "react-router-dom";
// import image from "../assets/image.png";


// export default function Index() {
//   const navigate = useNavigate();

//   return (

//     <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
//       <h1 className="text-3xl font-bold">Select Role</h1>

//       <button
//         className="px-6 py-2 bg-blue-600 text-white rounded"
//         onClick={() => navigate("/admin-login")}
//       >
//         Admin
//       </button>

//       <button
//         className="px-6 py-2 bg-green-600 text-white rounded"
//         onClick={() => navigate("/vendor-login")}
//       >
//         Vendor
//       </button>

//       <button
//         className="px-6 py-2 bg-purple-600 text-white rounded"
//         onClick={() => navigate("/user-login")}
//       >
//         User
//       </button>
//     </div>
//   );
// }


import { useNavigate } from "react-router-dom";
import image from "../assets/image.png";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${image})` }}>
        
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold text-white">Select Role</h1>

        <button
          className="px-6 py-2 bg-blue-600 text-white rounded"
          onClick={() => navigate("/admin-login")}
        >
          Admin
        </button>

        <button
          className="px-6 py-2 bg-green-600 text-white rounded"
          onClick={() => navigate("/vendor-login")}
        >
          Vendor
        </button>

        <button
          className="px-6 py-2 bg-purple-600 text-white rounded"
          onClick={() => navigate("/user-login")}
        >
          User
        </button>
      </div>
    </div>
  );
}
