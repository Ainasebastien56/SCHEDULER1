<template>
    <div class="main">
        <div class="title">
            <h1>Welcome to Our Task Manager</h1>
            
        </div>
        <div class="error" v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors" :key="error">{{error}}</li>
            </ul>
        </div>
    
         <form class="form1">
            <h1 class="subtitle">
                Create Account
         </h1>
         <p> have already an account ? <a class="link" href="/">SingIn</a></p>
        
            <div >
                    <input class="field"  type="text" placeholder="First Name" v-model="firstname">
            </div>
            <div >
                    <input class="field"  type="text" placeholder="Last Name" v-model="lastname">
            </div>
            <div >
                    <input class="field"  type="text" placeholder="E-mail" v-model="email">
            </div>
            <div >
                    <input class="field" type="password" placeholder="Password" v-model="password">
            </div>
            <div >
                    <input class="field" type="password" placeholder="comfirm password" v-model="confirm">
            </div>
            <div>
                <button type="submit" class="btn" @click.prevent="createAccount()" >Create </button>
            </div>
         </form>
        
    </div>

</template>

<script>
export default{
    name:'Register',
    data(){
        return{
            errors:[],
            firstname:null,
            lastname:null,
            email:null,
            password:null,
            confirm:null
        }
    },
    methods:{
        createAccount(){
           
            this.errors=[]
            if(!this.firstname ){
           this.errors.push('the firstname can not be empty')
          }
          if(!this.lastname ){
           this.errors.push('the lastname can not be empty')
          }
          if(!this.email ){
           this.errors.push('the email can not be empty')
          }
          if(!this.password ){
             this.errors.push('the password can not be empty ')
          }
          if(!this.confirm ){
           this.errors.push('the confirm password can not be empty And/Or it should be same as password')
          }
          if(!this.errors.length){
            const self = this
        this.$store.dispatch('createAccount',{
            firstname: this.firstname,
            lastname: this.lastname,
            email :this.email,
            password :this.password,
            confirm :this.confirm
        
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