import React from "react";
import Logo from "@/components/navbar/Logo";
import styles from "@/styles/login.module.css";
import Link from "next/link";

import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="flex  justify-center  p-0 w-1512 h-1117.09 ">
      <div className={styles.left}>
        <div className={styles.lefttext1}>
          Shared living space,
          <br /> find places and Join
          <br /> with them today.
        </div>
        <div className={styles.lefttext2}>
          What fun could we have more than having roommate
          <br /> with similar interest. You can find places and stay
          <br /> with hotels and home-stays ranked by travellers.
        </div>
      </div>
      <div className={styles.card}>
        <div className="flex flex-col justify-center bg-gray-100 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <div className="align-middle sm:mx-auto sm:w-full sm:max-w-md ">
                    <div className="">
                      <Logo />
                    </div>

                    <div>
                      <h2 className="mt-6 text-2xl font-bold text-gray-900">
                        Let's Start with Phone
                      </h2>
                      <div className="flex gap-1 mb-3 text-sm">
                        <div>Already have an account?</div>
                        <Link href="/auth/login" className="ml-2 text-blue">
                          Signin
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1">
                    <input
                      id="digit"
                      name="email"
                      type="number"
                      placeholder="+01 00 000 0000"
                      className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    />
                  </div>
                </div>

                

                <div>
                  <button
                    type="submit"
                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm bg-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Link href="/">Continue</Link>
                  
                  </button>

                  <h5 className="flex justify-center my-3">or</h5>
                  <button
                    type="submit"
                    className="flex justify-center w-full px-4 py-2 text-sm text-white bg-black border border-transparent rounded-md shadow-sm medium bg-black-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <div className={styles.apple}>
                      <AiFillApple />
                      <h6>continue with apple</h6>
                    </div>
                  </button>
                  <button
                    type="submit"
                    className="justify-center w-full px-4 py-2 mt-1 text-sm font-medium text-black bg-white bg-blue-600 border border-transparent rounded-md shadow-sm lex hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <div className={styles.apple}>
                      <FcGoogle />
                      <h6>continue with google</h6>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
