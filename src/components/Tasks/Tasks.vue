<template>
    
    <div class="main">
            <div >
                <form class="tasks">
                    <div class="title">
                        <h2>Adding a Task</h2>
                    </div>


                    <div class="field">
                    <div class="field-content">
                        <label for="name">Name</label>
                        <input  class="field1" type="text" placeholder="name of task" v-model="name">
                    </div>

                    <div class="field-content">
                        <label for="priority">Priority</label>
                     <select class="field1" v-model="priority">
                        <option value="HIGH">high</option>
                        <option value="MEDIUM">medium</option>
                        <option value="LOW">low</option>
                     </select>
                    </div>
                 <div class="field-content">
                        <label for="begin">Begin</label>
                        <input class="field1" type="date" v-model="startDate">
                        <label for="end">End Date</label>
                        <input class="field1" type="date" v-model="endDate">
                 </div>
                    <div class="field-content ">
                        <label for="team">Creator(s)</label>
                        <div class="ui icon input field-content " >
                        <input  class="field1" type="search" placeholder=" search user" >
                        <i class="search icon"></i>
                    </div>
                    </div>
                    <div class="field-content ">
                
                        <input class=" field description"  type="text"  placeholder="Description of task" v-model="description">
                    </div>
                    <div class="btn">

                        <button class="btn1">cancel</button>
                        <button class="btn2" @click="send()">Confirm</button>
                    </div>
                </div>
                    
                </form>
            </div>
    </div>
</template>

<script>
import Calendar from '../calendar/Calendar.vue'
const axios = require('axios')
const instance = axios.create({
   baseURL:'http://localhost:3000'
 })
export default{
  components: { Calendar },
    name: 'Task',
    data(){
        return{
            name:null,
            priority:null,
            startDate:null,
            endDate:null,
            description:null

        }
    },

    methods:{
        send(){
            const data = {
                name : this.name,
                priority: this.priority,
                startDate : this.startDate,
                endDate : this.endDate,
                description:this.description
            }
            instance.post('/Employees',{data}).then((response)=>{
 console.log(response)

}).catch(function(error){
  console.log(error)   
        
})

    }
}
}
</script>
<style src="./Tasks.css" >
</style>