<template>
    <div class="main">
        <table  border="2px" class=" table " id="tbl">
            <div class="Nav">

             
                
                <div class="title" v-if="mode == 'month'">  
                <button @click="previousButton()"><font-awesome-icon icon="fa-solid fa-chevron-left" /></button> 
                 
                  <button @click="nextButton()"> <font-awesome-icon icon="fa-solid fa-chevron-right" /></button> 
                  
                </div>
                <div class="title" v-if="mode == 'day'">  
                <button @click="previousDay()"><font-awesome-icon icon="fa-solid fa-chevron-left" /></button> 
                 
                  <button @click="nextDay()"> <font-awesome-icon icon="fa-solid fa-chevron-right" /></button> 
                  
                </div>
                <div class="month"> {{date.Month}} {{date.year}}</div>

               <div class="chose">
           <div class="element">
                 <button @click="viewDay()"><font-awesome-icon icon="fa-solid fa-calendar-day" /> Day</button>
        </div>

        <div class="element">
              <button > <font-awesome-icon icon="fa-solid fa-calendar-days" /> Week</button>  
        </div>

        <div class="element">
              <button @click="viewMonth()"><font-awesome-icon icon="fa-solid fa-calendar-days" /> Month</button>   
        </div>
             </div>
              
                
            </div>
        <div  v-if="mode == 'month'">
            <tr   class="row"  >
                <td  class="column" v-for="Day in Days" :key="Day">{{Day}}</td>
               
            </tr>

          

            <tr class="row" >
                <td  class="disabelDays" v-for="prevLastDay in PrevLastDays" :key="prevLastDay.id">{{prevLastDay}}</td>
            <td  :class="{'today': dayNumber == new Date().getDate() && date.Month ==date.currentmonth && date.year == new Date().getFullYear()}"
            
            v-for="dayNumber in daysNumbers" :key="dayNumber">
                {{dayNumber}}
            </td>

            <td  class="disabelDays" v-for="nextday in nextDays" :key ="nextday.id"> {{nextday}}</td>
              
            </tr>

        </div>

        <div v-if="mode == 'day'">
           
            <div class="currentday"> {{currentDay}}</div>
            

               <div class="current">{{currentnumberDay}}</div> 
           
        
        </div>
    

        </table>
        
 
    </div>
</template>

<script>
import {Calendar} from './calendar';
var m = new Date().getMonth()
var month = new Date().getMonth();
const currentnumberDay = new Date().getDate()
const day = new Date().getDay();
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug','September','October','November','December'];
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   let  Actuallydate ={
     year :new Date().getFullYear(),
     Month : months[month],
    currentmonth : months[m],
    Day : days[day],
    number: currentnumberDay

  

      }
  
     
    
export default{
    name:'Calendar',
    data (){
        return{
            date:{},
            Days:[],
            daysNumbers:[],
            PrevLastDays :[],
            nextDays:[],
            mode: 'month',
            currentDay :'',
            currentnumberDay:'',
            show : false,
            month:''
        }
    },


    mounted(){

  this.Days = days
 this.date = Actuallydate
 let number = new Calendar(Actuallydate.year ,month ).getNumber()

let numbers=[]   
for(let i =1 ; i<=number ; i++){

 numbers.push(i)
}
this.daysNumbers = numbers
let FirstDayindex = new Calendar(this.date.year, month).getfirstDay()


  let PrevLastDay = new Calendar(this.date.year,month).getPrevDay()
  

  let Prevdays =[]
  for (let x = FirstDayindex ; x > 0 ; x--){
  Prevdays.push(PrevLastDay + 1 -x)
 
  } 
 this.PrevLastDays = Prevdays 
  
let lastdayIndex = new Calendar(this.date.year , month).getlastDay()

let nextDay = 7 - lastdayIndex -1
let nextDays =[]
for ( let j=1 ; j <= nextDay ; j++){
nextDays.push(j)
}
this.nextDays = nextDays


    },


methods:{
        nextButton(){     
   let  numbers =[]
    month = month + 1
    if(month >11){
        month =0
 Actuallydate.year ++
    }
  
  Actuallydate.Month = months[month]

  this.date = Actuallydate

  let LastDay = new Calendar(this.date.year ,month ).getNumber()
 

for(let i =1 ; i <= LastDay ; i++){
 numbers.push(i)
}
this.daysNumbers = numbers

let FirstDayindex = new Calendar(this.date.year, month).getfirstDay();

  let PrevLastDay = new Calendar(this.date.year,month).getPrevDay();

  let Prevdays =[]
  for (let x = FirstDayindex ; x > 0 ; x--){
  Prevdays.push(PrevLastDay + 1 -x)
 
  } 
  this.PrevLastDays = Prevdays 
  let lastdayIndex = new Calendar(this.date.year , month).getlastDay()

let nextDay = 7 - lastdayIndex -1
let nextDays =[]
for ( let j=1 ; j <= nextDay ; j++){
nextDays.push(j)
}
this.nextDays = nextDays


    
        },
   previousButton(){
    let  numbers =[]
    month = month -1
    if(month <0){
        month =11
 Actuallydate.year --
    }
    
  Actuallydate.Month = months[month]
  this.date = Actuallydate
              
              let number = new Calendar(this.date.year ,month ).getNumber()
            for(let i =1 ; i <= number ; i++){
            numbers.push(i)
            }
this.daysNumbers = numbers

let FirstDayindex = new Calendar(this.date.year, month).getfirstDay()

  let PrevLastDay = new Calendar(this.date.year,month).getPrevDay()


  let Prevdays =[]
  for (let x = FirstDayindex ; x > 0 ; x--){
  Prevdays.push(PrevLastDay + 1 -x)
 
  } 
  this.PrevLastDays = Prevdays ;

  let lastdayIndex = new Calendar(this.date.year , month).getlastDay()

let nextDay = 7 - lastdayIndex -1
let nextDays =[]
for ( let j=1 ; j <= nextDay ; j++){
nextDays.push(j)
}
this.nextDays = nextDays

 

   } ,
   
   
   viewDay(){
    this.mode = 'day'
    this.currentDay = Actuallydate.Day
    this. currentnumberDay =Actuallydate.number
   
   } ,

   viewMonth(){
    this.mode ='month'
   },

   nextDay(){
   let lastCurrentDay = new Calendar(this.date.year ,month).getNumber() 


 this.currentnumberDay ++
 
 if(this.currentnumberDay > lastCurrentDay){
    this.currentnumberDay = 1
    month ++

 }
 let currentday = new Date (this.date.year , month,this.currentnumberDay).getDay()
 this.currentDay = days[currentday]

 if(month >11){
        month =0
 Actuallydate.year ++
    }
 
 Actuallydate.Month = months[month]
  this.date = Actuallydate

  
   },
   previousDay(){
 let lastprevDay = new Calendar(this.date.year , month).getPrevDay()


 this.currentnumberDay --
 
 if(this.currentnumberDay < 1){
  month --
  this.currentnumberDay = lastprevDay
 }
 let currentday = new Date (this.date.year , month,this.currentnumberDay).getDay()
 this.currentDay = days[currentday]

 if(month < 0){
        month =11
 Actuallydate.year --
    }
 
 Actuallydate.Month = months[month]
  this.date = Actuallydate
   }
   
    }

}
</script>

<style>


.table{
  
    background: #fff;
    width:max-content;
    width:500%;
    height:400px;
    margin-top: 80px;
    border:5px;
   
    text-align: center;
}

.Nav{
    display: flex;
    background:linear-gradient(to left, rgb(4, 4, 96),rgb(114, 24, 217));
    color:#fff;
    height:100px;
    align-items: center;


}
.row{

    display:flex ;
    flex-wrap: wrap;
    border-width: 5px;
}
.row td{
    height: 80px;
    width: 14%;
  
    
}
.chose{
display: flex;
margin-left:5%;
}
.chose .element{
    margin-left:10px;
   
}
.element button{
  border-radius: 5px;
  border-width: 0;
  color:#fff;
  background: linear-gradient(to left,rgb(234, 69, 69),rgb(217, 56, 163))
  
}

.title{
margin-left: 5%;

  }
  .month{
    display: flex;
    margin-left: 30px;
    font-family: sans-serif;
font-size:large;
font-weight: bold;
  }
.disabelDays{
color:rgba(0, 0, 0, 0.239)
  }
 .today{
  background:linear-gradient(to left, rgb(4, 4, 96),rgb(114, 24, 217));
  color: #fff;
 } 
.current{
    
    font-size: 100px;
    width:800px;
    height: 100px;
    margin-top: 50px;
    color: rgba(36, 136, 224, 0.93);;
} 
.currentday{
 margin-top: 20px;   
font-family: sans-serif;
font-size:large;
font-weight: bold;
}
</style>