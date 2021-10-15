const popUpContent ={
    error:{
        name:'alert-circle',
        headingText:'Warning !!!',
        content:`Can you check it again please, you missed any the required field.`,
        color:'#CF000F'
     },
     success:()=>({
         name:'checkmark-circle',
         headingText:'Succesfull',
         content:`You successfully created a new record which will be saved to database`,
         color:'rgb(0, 230, 64)'
     })
}
export default popUpContent