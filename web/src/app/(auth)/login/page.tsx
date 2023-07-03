'use client'

import Link from 'next/link'
import { FieldValues, useForm } from 'react-hook-form'

import SendButton from 'components/SendButton'
import XClose from 'components/XClose'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const signInUserFormSchema = z.object({
  email: z.string().nonempty('Email is required').toLowerCase(),
  password: z.string().nonempty('Password is required'),
})

type signInUserFormData = z.infer<typeof signInUserFormSchema>

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<signInUserFormData>({
    mode: 'onBlur',
    resolver: zodResolver(signInUserFormSchema),
  })

  function singInUser(data: FieldValues) {
    console.log(data)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-20 px-8 md:py-8 bg-zinc-800">
      <div className="flex flex-col items-center">
        {/* LOGIN FORMS CONTAINER */}
        <form
          onSubmit={handleSubmit(singInUser)}
          className="flex flex-col rounded-md bg-zinc-600 px-4 py-6 w-90vw sm:w-50vw lg:w-30rem justify-center mb-2"
        >
          <div className="flex flex-col items-center">
            <h1 className="font-medium text-2xl text-slate-100 mb-6 align-baseline">
              Sign in with your account
            </h1>
          </div>
          {/* Email Input */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-zinc-200 font-semibold text-sm mb-2"
            >
              EMAIL
            </label>
            <input
              {...register('email')}
              type="email"
              className="font-normal px-2 py-3 text-base text-slate-100 rounded-md bg-zinc-700 inline-block max-w-full focus:outline-none focus:ring-0"
            />
            <div className="flex h-6 items-center justify-end">
              {errors.email && (
                <span className="text-xs text-red-400 font-medium">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          {/* Password Input */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-zinc-200 font-semibold text-sm mb-2"
            >
              PASSWORD
            </label>
            <input
              {...register('password')}
              type="password"
              className="font-normal px-2 py-3 text-base text-slate-100 rounded-md bg-zinc-700 inline-block max-w-full focus:outline-none focus:ring-0"
            />
            <div className="flex h-6 items-center justify-end">
              {errors.password && (
                <span className="text-xs text-red-400 font-medium">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-row items-center justify-between mt-2">
            <div className="inline-flex flex-row">
              <p className="font-normal text-sm text-slate-100">
                Don't have any account?{' '}
                <Link
                  href="/register"
                  className="font-normal text-sm text-orange-500 hover:underline focus:underline"
                >
                  Register
                </Link>
              </p>
            </div>
            <SendButton type="submit" isValid={isValid} />
          </div>
        </form>
        <Link href="/">
          <XClose />
        </Link>
      </div>
    </main>
  )
}
