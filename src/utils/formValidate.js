const validateAny = (form) => {
  let values = Object.values(form)
  let errors = []
  let check = []
  for(let i = 0;i !=values.length;i++){
    if (values[i] == ""){
      errors.push(i)
    }
    else{
      check.push(i)
    }
  }
  let all = {check, errors}
  return all
}

const vEmail = (email) => {
  let exept = email.split("")
  let checkMail = /\S+@\S+\.\S+/.test(email)
  let andSpecial = /\W|_/.test(exept.reverse()[0])
  let hasSpace = /\s/g.test(email)
  if(!andSpecial && !andSpecial && checkMail && !hasSpace){
      return true
  }
  else{
    return false
  }
}

const vNormalString = (str) =>{
  let invalidSpace = /[ ]{2,}/.test(str)
  let strArray = str.split("")  
  for(let i=0;i<strArray.length;i++){
    if(!isNaN(parseFloat(strArray[i]))){
      return false
    }
  }
  if(!invalidSpace && strArray.length > 2 ){return true}
  else{return false}
}

const vCPF = (cpf) =>{
let soma = 0
let resto
try{
  if(cpf == ""){return false}
  for(let i=0;i<=9;i++){
    let a = i.toString().repeat(11)
    if(cpf == a){return false}
  }

  for(let i=1;i<=9;i++){
    soma += parseInt(cpf.substring(i-1,i)) *(11 - i)
  }
  resto = (soma*10) % 11
  if ((resto == 10) || (resto == 1)){
    resto = 0
  }
  if(resto != parseInt(cpf.substring(9,10))){return false}

  soma = 0
  for(let i=1; i<=10; i++){
    soma += parseInt(cpf.substring(i-1, i)) * (12 - i)
  }
  resto = (soma *10) % 11

  if((resto == 10) || (resto == 11)){
    resto = 0
  }
  if(resto != parseInt(cpf.substring(10,11))){return false}
  return true
  }
  catch(error){
    console.log(error)
    return false
  }
}

export default {validateAny, vEmail,vCPF,vNormalString}
