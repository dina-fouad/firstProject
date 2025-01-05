
document.getElementById("myBtn").addEventListener("click",myBMI)
document.getElementById("deleteResult").addEventListener("click",deleteBtn)

function myBMI (){
    
 let hight =   document.getElementById("hight").value
 let weight=   document.getElementById("weight").value
 if (hight > 3) {
    hight = hight / 100; 
}
let bmi = weight/(hight * hight)
 bmi = parseFloat(bmi.toFixed(1))
 let res = ""
 if (bmi <= 18){
     res = `${bmi} نحيف`
   }else if(bmi > 18 && bmi <= 24.9){
     res =`${bmi} وزن مثالي`
   }else if (bmi >= 25 && bmi <= 29.9){
      res = `${bmi} وزن زائد`
  
   }else if(bmi >= 30 && bmi <= 34.9){
      res = `<span style="color: red;">${bmi} وزن زائد</span>`;
   }else if (bmi >= 35 && bmi <= 39.9){
      res = `${bmi} سمنة درجة ثانية`
   }else {
      res = `${bmi} سمنة خطيرة`
   }
  let label = document.getElementById("bmi").innerHTML= res
}

function deleteBtn (){
    document.getElementById("bmi").innerHTML= ""

   document.getElementById("hight").value= ""
  document.getElementById("weight").value= ""
}



