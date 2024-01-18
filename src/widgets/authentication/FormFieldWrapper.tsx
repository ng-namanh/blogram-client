import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input
} from '@/shared/ui'
import { Control, FieldValues, Path } from 'react-hook-form'

type FormFieldWrapperProps<TFieldValues extends FieldValues = FieldValues> = {
  name: Path<TFieldValues>
  label: string
  type?: string
  placeholder?: string
  control?: Control<TFieldValues>
}

export function FormFieldWrapper<
  TFieldValues extends FieldValues = FieldValues
>({
  name,
  label,
  type = 'text',
  placeholder = 'email',
  control
}: FormFieldWrapperProps<TFieldValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-base'>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
