function idade() {
    let num1 = document.getElementsByName("idade")[0].value;

    
    if(num1>65){

 res="idoso";
    }
     else if(num1 <18 ){
res="menor";
 }
    else { 
    res="maior";
 
}
    document.getElementsByName("resultado")[0].value = res;

}