import React from 'react'
import { useFieldContext } from '.'
import { FieldErrors } from './field-errors'

type TextFieldProps = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const TextField = ({ label, ...inputProps }: TextFieldProps) => {
  const field = useFieldContext<string>()

  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <label htmlFor={field.name}>{label}</label>
        <input
          id={field.name}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
          {...inputProps}
        />
      </div>
      <FieldErrors meta={field.state.meta} />
    </div>
  )
}
