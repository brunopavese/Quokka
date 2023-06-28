import { InputHTMLAttributes, forwardRef, useId } from 'react';

type InputFormProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  errors?: string;
};

const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  ({ type = 'text', name = '', label = '', errors = '', ...props }, ref) => {
    const inputId = useId();
    const hasError = errors.length > 0;
    return (
      <div className="flex flex-col">
        <label
          htmlFor={inputId}
          className="text-zinc-200 font-semibold text-sm mb-2"
        >
          {label}
        </label>
        <input
          id={inputId}
          type={type}
          name={name}
          {...props}
          ref={ref}
          className="font-normal px-2 py-3 text-base text-slate-100 rounded-md bg-zinc-700 inline-block max-w-full focus:outline-none focus:ring-0"
        />
        <div className="flex h-6 items-center justify-end">
          {hasError && (
            <span className="text-xs text-red-400 font-medium">{errors}</span>
          )}
        </div>
      </div>
    );
  },
);

export default InputForm;
