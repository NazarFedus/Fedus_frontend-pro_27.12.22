import { IResultPopUp } from "./ResultPopUpTypes";

export default function ResultPopUp({
  show,
  order,
  handleClose,
}: IResultPopUp) {

  return (
    <div className="relative">
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Your Order</h2>
            <p>Price: {order.price}</p>
            <p>Calories: {order.calories}</p>
            <button
              onClick={handleClose}
              className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
