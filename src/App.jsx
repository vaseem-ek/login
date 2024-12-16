import React from 'react'

function App() {
  return (
    <div className=' flex justify-center flex-col items-center min-h-screen bg-[url("https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg")] bg-cover '>


      <div className="flex items-center justify-center rounded shadow-lg w-2/4 market">
        <div className="w-full max-w-md p-8 space-y-8 ">
          <h2 className="text-3xl font-bold text-center">Login</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder='enter your email'
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder='enter your password'
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
            >
              Log In
            </button>
          </form>
          <p className="text-sm text-center">
            Dont have an account?{' '}
            <a href="/register" className="font-semibold text-white hover:text-blue-500">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>


  )
}

export default App
