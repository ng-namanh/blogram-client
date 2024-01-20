import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
  Textarea
} from '@/shared/ui'
import { Control, FieldValues, Path } from 'react-hook-form'

type FormFieldWrapperProps<TFieldValues extends FieldValues = FieldValues> = {
  name: Path<TFieldValues>
  label?: string
  type?: string
  placeholder?: string
  control?: Control<TFieldValues>
  textarea?: boolean
}

export function FormFieldWrapper<
  TFieldValues extends FieldValues = FieldValues
>({
  name,
  label,
  type = 'text',
  placeholder = 'email',
  control,
  textarea = false
}: FormFieldWrapperProps<TFieldValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-base'>{label}</FormLabel>
          <FormControl>
            {textarea ? (
              <Textarea
                placeholder={placeholder}
                {...field}
                className='p-0 mt-0 resize-none text-5xl font-bold focus:outline-0 outline-none focus:border-none border-none'
              />
            ) : (
              <Input type={type} placeholder={placeholder} {...field} />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
