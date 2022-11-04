export class Calendar {
    constructor(year , month ){
 this.year = year;
 
 this.month = month;
    }
    getNumber(){

        return new Date(this.year , this.month +1 ,0).getDate()
    }
    getfirstDay(){
        return new Date(this.year , this.month,1).getDay()
    }
    getlastDay(){
        return new Date(this.year,this.month +1  ,0).getDay()
    }
    getPrevDay(){
        return new Date(this.year , this.month ,0).getDate()
    }

}





