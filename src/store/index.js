import Vue from 'vue'
import Vuex from 'vuex'

 const axios = require('axios')

 const instance = axios.create({
  baseURL :' http://localhost:3000'
 })
Vue.use(Vuex)
let user = localStorage.getItem('user');
if(!user){
    user = {
        id:-1,
        token:''
    };
}else{
    try{
        user = JSON.parse(user);
        instance.defaults.headers.common['Autorization'] = user.token;
    }
    
catch(ex){

    user = {
        id:-1,
        token:''
    };
}
}


const store = new Vuex.Store({
    state :{
            status:'',
            user:user,
           
    },
    mutations:{
        setStatus(state,status){
        state.status = status
        },
        logUser:(state,user)=>{
            instance.defaults.headers.common['Autorization'] = user.token;
            localStorage.setItem('user',JSON.stringify(user))
            state.user = user;
        },
       
        logout(state){
            state.user ={
                id:-1,
                token:''
            }
        }
    },
    actions:{
        login:({commit},userInfos)=>{
            commit('setStatus','loading')
            return new Promise((resolve, reject) => {
            instance.post('/login',userInfos).then(function(response){
                console.log(response.data)
                commit('setStatus','')
                commit('logUser',response.data);
                resolve(response);
            })
            .catch(function(error){
                commit('setStatus','error_login');
               reject(error)
            }); 
            })
        },
        createAccount:({commit},userInfos)=>{
        commit('setStatus','loading')
        return new Promise((resolve,reject)=>{
            instance.post('/register',userInfos).then((response)=>{
                console.log(response.data)
                commit ('setStatus','')
              resolve(response)
            }).catch((error)=>{
                    commit('setStatus','error_create')
                    reject(error)
            })
        })
        }
       
    }
 
})
export default store;
