import React from 'react'
import { useForm } from 'react-hook-form'

const ReactHookForm2 = () => {

   const { register, handleSubmit } = useForm()

   const onSubmit = (data) => {
      console.log(data)
   }

   return (
      <>

         <form action="" onSubmit={handleSubmit(onSubmit)} className='bg-slate-900 w-80 p-6 mx-auto py-10'>
            <h1 className='text-xl font-bold text-orange-500 text-center mb-5'>This is my React hook form.</h1>

            <div className='mb-5'>
               <label className='text-white block mb-2' htmlFor="firstName">First Name: </label>
               <input required type='text' className='w-full px-1 py-2' {...register('firstName')} />
            </div>
            <div className='mb-5'>
               <label className='text-white block mb-2' htmlFor="lastName">Last Name: </label>
               <input required type='text' className='w-full px-1 py-2' {...register('lastName')} />
            </div>
            <div className='mb-5'>
               <label className='text-white block mb-2' htmlFor="email">Email: </label>
               <input required type='email' className='w-full px-1 py-2' {...register('email')} />
            </div>
            <div className='mb-5'>
               <label className='text-white block mb-2' htmlFor="password">Password: </label>
               <input required type='password' className='w-full px-1 py-2' {...register('password')} />
            </div>

            <div className='text-center mb-5'>
               <label className='text-white mr-2' htmlFor="gender">Gender:</label>
               <select required className='py-2 px-5' {...register('gender')} >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
               </select>
            </div>

            <div className='text-center'>
               <button type='submit' {...register('submit')} className='bg-green-500 text-white font-bold px-5 py-2'>Submit</button>
            </div>
         </form>

      </>
   )
}

export default ReactHookForm2