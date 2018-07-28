
export const requiredCheck = (errors, fieldName, value) => value ? undefined : errors.push(`${fieldName} Required`)

export const maxLengthCheck = (errors, fieldName, max, value) => value && value.length > max ? errors.push(`${fieldName} Must be ${max} characters or less`) : undefined

export const numberCheck = (errors, fieldName, value) => value && isNaN(Number(value)) ? errors.push(`${fieldName} Must be a number`) : undefined

export const minValueCheck = (errors, fieldName, min, value) => value && value < min ? errors.push(`${fieldName} Must be at least ${min}`) : undefined

export const emailCheck = (errors, fieldName, value) => {
    return value && !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i.test(value)) ? errors.push('Invalid email address') : undefined
}