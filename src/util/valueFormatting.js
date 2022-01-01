export const valueFormatting = (value, type) => {
    if(type === 'money'){
       return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value)  
    }
    if( type === 'km') {
        return new Intl.NumberFormat().format(value)
    }
}