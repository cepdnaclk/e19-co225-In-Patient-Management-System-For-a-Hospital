import React from 'react';
import { FaHandHoldingMedical } from "react-icons/fa";
// import loginImage from './loginimage1.png';
import loginImage from './loginimage2.jpg';

function Login() {
    return (
        <section className=" select-none h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <div>
                    <img src={loginImage} alt="" width="600" height="600" />
                </div>
            </div>
            <div className="md:w-1/3 max-w-sm">
                <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <FaHandHoldingMedical size={80} color="#ff3456" />
                    <p className="mx-4 mb-0 text-center font-semibold text-slate-500 text-6xl">MEDNET</p>
                </div>
                <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Username" />
                <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
                <div className="mt-4 flex justify-between font-semibold text-sm">
                    <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
                </div>
                <div className="text-center md:text-left">
                    <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
                </div>
            </div>
        </section>
    );
}

export default Login;