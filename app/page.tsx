import { useAppForm } from "./form";

export default function Home() {
  const form = useAppForm({
    defaultValues: {
      test: '',
    },
    onSubmit: async ({ value }) => {
      console.log(value)
    },
  })

  return (
    <form
    className="flex w-[400px] flex-col gap-2"
    onSubmit={(e) => {
      e.preventDefault()
      form.handleSubmit()
    }}>
    <form.AppField name="test" children={(field) => <field.TextField label="Test" />} />

    <form.AppForm>
      <form.SubmitButton>Submit</form.SubmitButton>
    </form.AppForm>
  </form>
  );
}
