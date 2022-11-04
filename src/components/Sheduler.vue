<template>
    <div class="main">
        <Nav/>
        <calendar class="child"></calendar>
        <Tasks class="child2"></Tasks>
    </div>
</template>

<script>
import Calendar from './calendar/Calendar.vue'
import Tasks from './Tasks/Tasks.vue'
export default{
 name:'Sheduler',   
components:{
    Calendar,Tasks
}
}
</script>

<style>
body{
    background: rgba(3, 3, 67, 0.804);
}
.main{
    display:grid;
    grid-template-columns: 20% 60% 20%;
}
.child{
    grid-column-start: 2;
    
}
.child2{
    grid-column-start: 3;
}

</style>