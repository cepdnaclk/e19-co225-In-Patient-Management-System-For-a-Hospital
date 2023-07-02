import React from "react";
import { FaHandHoldingMedical } from "react-icons/fa";

function LoginPatient() {
    return (
        <>
            {/* Add content here */}
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-black">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Patient NIC Entry</h2>
        <form className="space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-900" htmlFor="nic_number">
              National Identity Card (NIC) Number:
            </label>
            <input
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="text"
              id="nic_number"
              name="nic_number"
              placeholder="Enter NIC Number"
              required
            />
          </div>
          <button
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white py-3 rounded-lg transition-colors duration-300"
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