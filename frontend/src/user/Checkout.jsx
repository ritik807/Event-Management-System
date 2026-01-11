import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  const placeOrder = async () => {
    const orderRes = await api.post("/order/place");
    const orderId = orderRes.data._id;

    await api.post("/transaction/checkout", {
      orderId,
      paymentMethod: "CASH"
    });

    navigate("/user/success");
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-xl font-bold mb-4">Checkout</h1>
      <button
        onClick={placeOrder}
        className="px-6 py-2 bg-green-600 text-white rounded"
      >
        Pay & Place Order
      </button>
    </div>
  );
}
