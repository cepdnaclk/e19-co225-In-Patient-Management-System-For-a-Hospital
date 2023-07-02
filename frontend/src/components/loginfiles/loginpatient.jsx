import React from "react";
import { FaHandHoldingMedical } from "react-icons/fa";

function LoginPatient() {
    return (
        <>
            {/* Add content here */}
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className="w-full max-w-md">
        <form
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Patient NIC Entry
          </h2>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="nic_number"
            >
              National Identity Card (NIC) Number:
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg"
              type="text"
              id="nic_number"
              name="nic_number"
              required
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
            {/* Add content here */}
        </>
    );
}

export default LoginPatient;