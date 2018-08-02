
export const requiredCheck = (errors, fieldName, value) => value ? undefined : errors.push(`${fieldName} Required`)

export const maxLengthCheck = (errors, fieldName, max, value) => value && value.length > max ? errors.push(`${fieldName} Must be ${max} characters or less`) : undefined

export const numberCheck = (errors, fieldName, value) => value && isNaN(Number(value)) ? errors.push(`${fieldName} Must be a number`) : undefined

export const minValueCheck = (errors, fieldName, min, value) => value && value < min ? errors.push(`${fieldName} Must be at least ${min}`) : undefined

export const emailCheck = (errors, fieldName, value) => {
    return value && !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i.test(value)) ? errors.push('Invalid email address') : undefined
}

export const invalidEmail = (value) => {
    return value && !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i.test(value))
}

export const invalidName = (value) => {
    return value && !(/^[a-zA-Z]*$/i.test(value))
}

export const emptyValue = (value) => ( !value || value.trim().length === 0 )

export const minLength = (value, length) => value.length < length


export const validateForm = (form) => {
    var fieldErrors= {}
    const inputElements = form.getElementsByTagName('input');
    for (const inputElement of inputElements) {
        fieldErrors = validateField(fieldErrors, inputElement)
    }
    return fieldErrors;
}

export const validateField = (fieldErrors, field) => {
    if(field.tagName === 'INPUT'){
        const validations = field.getAttribute('validate').split(",");
        for (const validation of validations) {
            if(validation.trim() === 'required' && emptyValue(field.value)) {
                return { ...fieldErrors, [field.name]: { message: 'Required', valid: false } }
            } else if(validation.trim() === 'email' && invalidEmail(field.value)) {
                return { ...fieldErrors, [field.name]: { message: 'Invalid Email', valid: false } }
            } else if(validation.trim() === 'alphabetsOnly' && invalidName(field.value)) {
                return { ...fieldErrors, [field.name]: { message: 'Alphabets Only', valid: false } }
            }else if(validation.trim() === 'minLength8' && minLength(field.value,8)) {
                return { ...fieldErrors, [field.name]: { message: 'Minimum Length 8', valid: false } }
            }
        }
        return { ...fieldErrors, [field.name]: { message: undefined, valid: true} }
    }
}

export const decorateInputClass = (fieldError, classes) => {
        if(fieldError){
            if(fieldError.valid){
                classes.push('valid');
            } else {
                classes.push('error');
            }
        }
        return classes.join(' ')
}
