'use client'

import Link from 'next/link'
import { FieldValues, useForm } from 'react-hook-form'

import InputForm from 'components/InputForm'
import SendButton from 'components/SendButton'
import XClose from 'components/XClose'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const signUpUserFormSchema = z.object({
  username: z
    .string()
    .nonempty('Username is required')
    .regex(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,300}$/, 'Format invalid')
    .min(3, 'Too short')
    .max(30, 'Too long')
    .toLowerCase(),
  email: z
    .string()
    .nonempty('Email is required')
    .email('Invalid format')
    .toLowerCase(),
  password: z
    .string()
    .nonempty('Password is required')
    .min(6, 'Too short')
    .regex(/^\S+$/, 'Cannot contain white spaces')
    .trim(),
  confirmPassword: z.string(),
})

type signUpUserFormData = z.infer<typeof signUpUserFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<signUpUserFormData>({
    mode: 'onBlur',
    resolver: zodResolver(signUpUserFormSchema),
  })

  function singUpUser(data: FieldValues) {
    console.log(data)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-800 px-8 py-20 md:py-8">
      <div className="flex flex-col items-center">
        {/* LOGIN FORMS CONTAINER */}
        <form
          onSubmit={handleSubmit(singUpUser)}
          className="mb-2 flex w-90vw flex-col justify-center rounded-md bg-zinc-600 px-4 py-6 sm:w-50vw lg:w-30rem"
        >
          <div className="flex flex-col items-center">
            <h1 className="mb-6 align-baseline text-2xl font-medium text-slate-100">
              Sign up
            </h1>
          </div>
          {/* Username Input */}
          <InputForm
            {...register('username')}
            name="username"
            label="USERNAME"
            errors={errors.username?.message}
          />
          {/* Email Input */}
          <InputForm
            {...register('email')}
            name="email"
            type="email"
            label="EMAIL"
            errors={errors.email?.message}
          />
          {/* Password Input */}
          <InputForm
            {...register('password')}
            name="password"
            type="password"
            label="PASSWORD"
            errors={errors.password?.message}
          />
          {/* Confirm Password Input */}
          <InputForm
            {...register('confirmPassword')}
            name="confirmPassword"
            type="password"
            label="CONFIRM PASSWORD"
            errors={errors.confirmPassword?.message}
          />
          <div className="mt-2 flex flex-row items-center justify-between">
            <div className="inline-flex flex-row">
              <p className="text-sm font-normal text-slate-100">
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="text-sm font-normal text-orange-500 hover:underline focus:underline"
                >
                  Login
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
