import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';
import Login from './components/Login.vue';
import Home from './components/Home.vue';


import Ticket from './components/Ticket.vue';
import Signup from './components/Signup.vue';
// import Router from 'vue-router'


 // Vue.use(Router);

 const routers = [
     {       
             path:'/',
             name:'home',
             component:Home,
             
             beforeEach:(to, from, next) => {
                const currentUser = firebase.auth().currentUser;
                const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
              
                if (requiresAuth && !currentUser) next('./login');
                else if (!requiresAuth && currentUser) next('./home');
                else next();
              },
        

             beforeEnter:(to, from, next) =>{
                if(!firebase.auth().currentUser){
                    next('./login');
                }
                else{
                    next();
                }
            },
            meta: {
                requiresAuth: true,
              }
            
        },
        {
             path:'/login',
             name:'Login',
             component:Login,
             meta: {
                requiresAuth: false,
              }
        },
        {
            path:'/ticket',
            name:'Ticket',
            component:Ticket
        },
        {
        path:'/signup',
        name:'Signup',
        component:Signup
        },
    ]

    export default routers   
