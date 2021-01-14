let daysH = document.getElementById("date");
let monthH = document.getElementById("month");
let yearH = document.getElementById("year");


let showAge = document.getElementById("show-age");

const btn = document.getElementById("calc-btn");

var today = new Date();

let d = today.getDate();
let m = today.getMonth();
let y = today.getFullYear();

let maxDays = 0;
let monthNum = 1;

btn.addEventListener("click" , (days, month, year) => {
   days = daysH.value;
   month = monthH.value;
   year = yearH.value;

   if(daysH.value == ``|| monthH.value == `` || yearH.value == ``){
      return alert("Please enter your Date of Birth properly ");
   }
  
   // no else condition needed
   
   console.log(`Current Date : ${d} ${m} ${y}`);

   // we need some day numbers as we have different number of month

   if(m == 1){//january
      maxDays=31;
      monthNum = 1;
   }
   else if(m == 2){// february 
      maxDays = 28;
      monthNum = 2;
   }
   else if(m == 3){// march
      maxDays = 31;
      monthNum = 3;
   }
   
   else if(m == 4){// april
      maxDays = 30;
      monthNum = 4;
   }
   else if(m == 5){// may
      maxDays = 31;
      monthNum = 5;
   }
   else if(m == 6){// june
      maxDays = 30;
      monthNum = 6;
   }
   else if(m == 7){// july
      maxDays = 31;
      monthNum = 7;
   }
   else if(m == 8){// aguest 
      maxDays = 31;
      monthNum = 8;
   }
   else if(m == 9){// september 
      maxDays = 30;
      monthNum = 9;
   }
   else if(m == 10){// october 
      maxDays = 31;
      monthNum = 10;
   }
   else if(m == 11){// november  
      maxDays = 30;
      monthNum = 11;
   }

   // make december else or else if it's your choice 
   else{// december  
      maxDays = 31;
      monthNum = 12;
   }
   

   var ageYears = y-year;

   if(m <= month){
      m = m + 12;
   }


   var ageMonths = m - month;

   var ageDays = (maxDays - d) + parseInt(days);

  console.log(`Your age is ${ageYears} y , ${ageMonths} m and ${ageDays} d`);
  showAge.innerHTML = `Your age is ${ageYears} y , ${ageMonths} m and ${ageDays} d`;
})
 


