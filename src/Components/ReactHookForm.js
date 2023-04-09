import React from 'react'
import { useForm } from 'react-hook-form'

const ReactHookForm = () => {

   const { register, handleSubmit } = useForm()

   const onSubmit = (data) => {
      console.log(data)
   }

   return (
      <>
         <form onSubmit={handleSubmit(onSubmit)} className='w-80 mx-auto bg-slate-950 py-3 px-5 mb-10'>
            <div className="mb-6">
               <label forHtml="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
               <input {...register("email")} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-6">
               <label forHtml="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
               <input {...register("password")} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="flex items-start mb-6">
               <div className="flex items-center h-5">
                  <input {...register("checkbox")} id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
               </div>
               <label forHtml="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
         </form>
      </>
   )
}

export default ReactHookForm