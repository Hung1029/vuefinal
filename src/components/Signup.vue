<template>
  <div class="sign-up">
     <div class="loginimg">
        <img src="../img/Login.png" alt="">
    </div>
    <div class="sign-up">
        <p>Let's create a new account !</p>
        <input type="text" v-model="name" placeholder="Username"><br>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="signUp">Sign Up</button>
        <span>or go back to <router-link to="/login">login</router-link>.</span>
    </div>
  </div>
</template>

 <script>
  import firebase from 'firebase';
  export default {
    name: 'signUp',
    data() {
      return {
        name:'',
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
              var CurrentUser = firebase.auth().currentUser;
              CurrentUser.updateProfile({
                  displayName:this.name
              }) 
              console.log(CurrentUser);
            this.$router.replace('/')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      },
      
    }
  }
</script>

 <style scoped>
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

.sign-up {
    margin-top: 0px;
    /* border: 1px rgba(92, 90, 90, 0.89) solid; */
}

p {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    color: black;
    font-size: 20px;
    font-family: 'Arial';
    text-align: center;
    /* border: 1px rgba(92, 90, 90, 0.89) solid; */
}
@media screen and (max-width: 768px) {
    p {
        font-size: 16px;
    }
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
    outline: none;
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
    outline: none;
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
    color: rgb(255, 255, 255);
    background-color: #B50943;
    z-index: 1;
    border-radius: 10px;
    padding: 10px 30px;
    margin-top: 15px;
    cursor: pointer;
    outline: none;
    /* border: 1.5px rgb(55, 23, 90) solid; */
}

span {
    display: block;
    width: 200px;
    text-align: center;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 20px;
    font-size: 13px;
    /* border: 1px rgba(92, 90, 90, 0.89) solid; */
}
@media screen and (max-width: 768px) {
    p {
        width: 200px;
    }
}
</style>