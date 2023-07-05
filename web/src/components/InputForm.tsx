import { InputHTMLAttributes, forwardRef, useId } from 'react'

type InputFormProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  errors?: string
}

const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  ({ type = 'text', name = '', label = '', errors = '', ...props }, ref) => {
    const inputId = useId()
    const hasError = errors.length > 0
    return (
      <div className="flex flex-col">
        <label
          htmlFor={inputId}
          className="mb-2 text-sm font-semibold text-zinc-200"
        >
          {label}
        </label>
        <input
          id={inputId}
          type={type}
          name={name}
          {...props}
          ref={ref}
          className="max-w-full inline-block rounded-md bg-zinc-700 px-2 py-3 text-base font-normal text-slate-100 focus:outline-none focus:ring-0"
        />
        <div className="flex h-6 items-center justify-end">
          {hasError && (
            <span className="text-xs font-medium text-red-400">{errors}</span>
          )}
        </div>
      </div>
    )
  },
)

export default InputForm
