<template>
  <div class="login">
      <link rel="stylesheet" href="../firebase">
    <div class="loginimg">
        <img src="../img/Login.png" alt="">
    </div>
    <h1 id="topic">Login</h1>
    <form @submit.prevent="login">
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button class="confirm" @click="login">Login</button>
        <br>
        <button @click="LoginWithGoogle" class="btn btn-bg btn-lg btn-block">Login With Google</button>
        <br>
        <br>
        <p>You don't have an account ?<br> You can <router-link to="/signup">create one</router-link>
        </p>
    </form>

    <!-- <form @submit.prevent="login">
            <label>User Name</label>
            <input type="text" v-model="userName" required>
            <br>
            <label>Password</label>
            <input type="password" v-model="password" required>
            <br>
            <button type="submit">Log In</button>
          </form> -->
  </div>
</template>
<script>
import firebase from 'firebase'
  export default {
      name:'login',

    data () {
      return {
        email: "",
        password: "",
        errors:[],
        loading:false,
        user:""
      }
    },
    methods: {  
        async LoginWithGoogle(){
            this.loading=true;
            this.errors=[];
            try{
                let response = await firebase
                .auth()
                .signInWithPopup(new firebase.auth.GoogleAuthProvider());
                this.user=response.user;
                this.$router.push('/');
            }catch(error){
                this.errors.push(error.message);
                this.loading=false;
            }
        },
        login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
              
            this.$router.replace('/')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
        }
    }
  }
</script>

<style scoped>
/* #oao{
top:50px;
right:400px;
left:400px;
display:none;
position: fixed;
z-index:5;
background-color:rgba(31, 22, 25, 0.651);
border:1px rgba(102, 99, 99, 0.425) solid;
width:600x;
height:600px;

} */

@media screen and (max-width: 450px) {}

* {
    margin: 0 auto;
    overflow-x: hidden;
    padding: 0;
}

body {
    width: 50%;
    margin-left: 50%;
    transform: translateX(-50%);
    /* border: 3px rgba(92, 90, 90, 0.89) solid; */
}

@media screen and (max-width: 450px) {
    body {
        width: 70%;
        margin-left: 50%;
        transform: translateX(-50%);
        /* border: 3px rgba(92, 90, 90, 0.89) solid; */
    }
}

.loginimg {
    width: 25%;
    max-width: 400px;
    min-width: 30vh;
    margin-top: 10vh;
    /* border: 3px rgba(92, 90, 90, 0.89) solid; */
}

@media screen and (max-width: 768px) {
    .loginimg {
        width: 30vh;
        /* border: 3px rgba(92, 90, 90, 0.89) solid; */
    }
}

@media screen and (max-width: 450px) {
    .loginimg {
        width: 200px;
        /* border: 3px rgba(92, 90, 90, 0.89) solid; */
    }
}

.loginimg img {
    width: 100%;
}

input {
    width: 50%;
    min-width: 300px;
    margin: 10px 0;
    padding: 15px;
    margin-left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    border: 1px rgba(92, 90, 90, 0.89) solid;
}

input:focus {
    width: 50%;
    min-width: 300px;
    margin: 10px 0;
    padding: 15px;
    margin-left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    border: 1.5px #B50943 solid;
    outline:none;
}

@media screen and (max-width: 768px) {
    input {
        width: 80%;
        min-width: 0px;
        max-width: 300px;
    }
    input:focus {
        width: 80%;
        min-width: 0px;
        max-width: 300px;
    }
}

@media screen and (max-width: 450px) {
    input {
        width: 230px;
    }
    input:focus {
        width: 230px;
    }
}

button {
    position: relative;
    bottom: 10%;
    left: 50%;
    transform: translatex(-50%);
    color: rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
    z-index: 1;
    border-radius: 10px;
    padding: 10px 30px;
    margin-top: 15px;
    cursor: pointer;
    /* border: 1.5px rgb(55, 23, 90) solid; */

}
.confirm {
    position: relative;
    bottom: 10%;
    left: 50%;
    transform: translatex(-50%);
    color: white;
    background-color: #B50943;
    z-index: 1;
    border-radius: 10px;
    padding: 10px 30px;
    margin-top: 15px;
    cursor: pointer;
    outline:none;
}
.confirm:hover{
    background-color: rgb(189, 47, 92);
}
.btn{
    outline:none;
}
.btn:hover{
    background-color: rgb(233, 233, 233);
}
p {
    width: 200px;
    text-align: center;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 15px;
    font-size: 13px;
    /* border: 1px rgba(92, 90, 90, 0.89) solid; */
}

@media screen and (max-width: 768px) {
    p {
        width: 200px;
    }
}

p a {
    text-decoration: underline;
    cursor: pointer;
}

#topic {
    margin-top: 20px;
    margin-bottom: 20px;
    color: black;
    font-size: 20px;
    font-family: 'Arial';
    text-align: center;
}
</style>
