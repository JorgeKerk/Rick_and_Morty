const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const containNumber = text => {
    for(let i=0; i<text.length; i++){
       if( parseInt(text[i])){
          return true;
       }
    }
    return false;
 }

export const validation = inputs => {
    const newErrors = {}

    if(!regexEmail.test(inputs.username)) newErrors.username = 'Debe ser un correo electrónico'
    if(!inputs.username) newErrors.username = 'Por favor, complete este campo'
    if(inputs.username.length > 35) newErrors.username = 'El máximo de caracteres es 35'

    if(!containNumber(inputs.password)) newErrors.password = 'Debe contener al menos un número'
    if(inputs.password.length < 6 || inputs.password.length > 10) newErrors.password = 'Debe tener entre 6 y 10 caracteres'
    return newErrors
}