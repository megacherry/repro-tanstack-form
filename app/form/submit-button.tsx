import { useStore } from '@tanstack/react-form'
import { useFormContext } from '.'

type SubmitButtonProps = {
  children: React.ReactNode
}

export const SubmitButton = ({ children, ...buttonProps }: SubmitButtonProps) => {
  const form = useFormContext()

  const [isSubmitting, canSubmit] = useStore(form.store, (state) => [
    state.isSubmitting,
    state.canSubmit,
  ])

  return (
    <button type="submit" disabled={isSubmitting || !canSubmit} {...buttonProps}>
      {children}
    </button>
  )
}
