import { AnyFieldMeta } from '@tanstack/react-form'

type FieldErrorsProps = {
  meta: AnyFieldMeta
}

export const FieldErrors = ({ meta }: FieldErrorsProps) => {
  if (!meta.isTouched) return null

  return meta.errors.map(({ message }: any, index) => (
    <p key={index} className="text-destructive text-sm font-medium">
      {message}
    </p>
  ))
}
