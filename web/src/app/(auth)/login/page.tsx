'use client'

import Link from 'next/link'
import { FieldValues, useForm } from 'react-hook-form'

import SendButton from 'components/SendButton'
import XClose from 'components/XClose'
import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

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
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-800 px-8 py-20 md:py-8">
      <div className="flex flex-col items-center">
        {/* LOGIN FORMS CONTAINER */}
        <form
          onSubmit={handleSubmit(singInUser)}
          className="mb-2 flex w-90vw flex-col justify-center rounded-md bg-zinc-600 px-4 py-6 sm:w-50vw lg:w-30rem"
        >
          <div className="flex flex-col items-center">
            <h1 className="mb-6 align-baseline text-2xl font-medium text-slate-100">
              Sign in with your account
            </h1>
          </div>
          {/* Email Input */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-2 text-sm font-semibold text-zinc-200"
            >
              EMAIL
            </label>
            <input
              {...register('email')}
              type="email"
              className="inline-block max-w-full rounded-md bg-zinc-700 px-2 py-3 text-base font-normal text-slate-100 focus:outline-none focus:ring-0"
            />
            <div className="flex h-6 items-center justify-end">
              {errors.email && (
                <span className="text-xs font-medium text-red-400">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          {/* Password Input */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="mb-2 text-sm font-semibold text-zinc-200"
            >
              PASSWORD
            </label>
            <input
              {...register('password')}
              type="password"
              className="inline-block max-w-full rounded-md bg-zinc-700 px-2 py-3 text-base font-normal text-slate-100 focus:outline-none focus:ring-0"
            />
            <div className="flex h-6 items-center justify-end">
              {errors.password && (
                <span className="text-xs font-medium text-red-400">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>
          <div className="mt-2 flex flex-row items-center justify-between">
            <div className="inline-flex flex-row">
              <p className="text-sm font-normal text-slate-100">
                Don&apos;t have any account?{' '}
                <Link
                  href="/register"
                  className="text-sm font-normal text-orange-500 hover:underline focus:underline"
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
