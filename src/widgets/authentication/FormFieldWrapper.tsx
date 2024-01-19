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
                className='resize-vertical'
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
