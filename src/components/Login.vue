<template>
    <div class="main">
        <div class="error" v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors" :key="error">{{error}}</li>
            </ul>
        </div>
        <div class="title">
            <h1>Welcome to Our Task Manager</h1>
            
        </div>
    
         <form class="form1">
            <h1 class="subtitle">
                Connection
         </h1>
         <p> have not an account again? <a class="link" href="/Register">create an account</a></p> 
            <div >
                    <input class="field"  type="text" placeholder="E-mail" v-model="email">
            </div>
            <div >
                    <input class="field" type="password" placeholder="Password" v-model="password">
            </div>
            <div>
                <button type="submit" class="btn" @click.prevent ="login()">SingIn</button>
            </div>
         </form>
        
    </div>

</template>

<script>
export default{
    name:'Login',
    data:function(){
        return{
            email:null,
            password:null,
            errors:[]
        }
    },
    methods:{
        login(){
            this.errors=[]
          if(!this.email ){
           this.errors.push('Enter a valid email')
          }
          if(!this.password ){
             this.errors.push('Enter a valid password')
          }
          if(!this.errors.length){
            const self = this
        this.$store.dispatch('login',{
            email :this.email,
            password :this.password
        
        }).then(function(response){
            self.$router.push('')
     console.log(response)
        })
    }
}

}
}

</script>
<style src="./Login.css" >

  

</style>