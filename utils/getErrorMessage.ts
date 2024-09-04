import { FieldErrors, FieldValues } from 'react-hook-form'

export default function getErrorMessage(
  name: string,
  errors: FieldErrors<FieldValues>
): string | undefined {
  const keys = name.split('.')
  let index = 0
  let deepErrors: any = errors
  while (typeof deepErrors[keys[index]] === 'object') {
    deepErrors = deepErrors[keys[index]]
    index += 1
  }
  if (keys.length === index) return deepErrors.message
  return undefined
}
