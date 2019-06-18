<template>

   <div class="ticket">
        <div class="home" @click="home">
            <div class="loglogo">&#060;
            </div>
            <div class="logtext">Back
            </div>
        </div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <b-container class="bv-example-row">
            <p class="topic">選擇場次</p>
            <div class="block1">
                <img v-on:click="chose" id="aa" src="../img/s1.png">
                <img v-on:click="oaooo" id="bb" src="../img/s2.png">
            </div>
            <p class="topic">選擇票價和張數</p>
            <div class="block1">

                <form action="">
                    <img class="img3" src="../img/t3.png" alt="">
                    <div class="btn1">
                        <p class="text1">購買張數</p>
                        <div class="botton">
                            <input type="radio" value="0" name="ta" id="ro" checked><label @click="ft(0,0)" for="ro">
                                <div class="num">0</div>
                            </label>
                            <input type="radio" value="1" name="ta" id="r1" checked><label @click="ft(0,1)" for="r1">
                                <div class="num">1</div>
                            </label>
                            <input type="radio" value="2" name="ta" id="r2" checked><label @click="ft(0,2)" for="r2">
                                <div class="num">2</div>
                            </label>
                            <input type="radio" value="3" name="ta" id="r3" checked><label @click="ft(0,3)" for="r3">
                                <div class="num">3</div>
                            </label>
                        </div>
                        <p class="number1">(尚餘 {{count1}} 張)</p>
                    </div>

                    <img class="img3" src="../img/t4.png" alt="">
                    <div class="btn1">
                        <p class="text1">購買張數</p>
                        <div class="botton">
                            <input type="radio" name="tb" id="r00" checked><label v-on:click="ft(1,0)" for="r00">
                                <div class="num">0</div>
                            </label>
                            <input type="radio" name="tb" id="r01" checked><label v-on:click="ft(1,1)" for="r01">
                                <div class="num">1</div>
                            </label>
                            <input type="radio" name="tb" id="r02" checked><label v-on:click="ft(1,2)" for="r02">
                                <div class="num">2</div>
                            </label>
                            <input type="radio" name="tb" id="r03" checked><label v-on:click="ft(1,3)" for="r03">
                                <div class="num">3</div>
                            </label>
                        </div>
                        <p class="number1">(尚餘 {{count2}} 張)</p>
                    </div>


                    <input class="submit" @click="submit" type="submit" value="確定購買">
                </form>
            </div>
            <!-- style=none; -->
        </b-container>
    </div>
</template>
<script>
var i =0,j=0; var txt;
  export default {
    data () {
        return{
        c:[0,0],
        count1:2000,
        count2:3000,
        }
    },
    methods: {
        ft:function(index,val){
            if(index==0){
                this.count1+=this.c[index];
                this.c[index]=val;
                this.count1-=this.c[index];
            }
            else {
                this.count2+=this.c[index];
                this.c[index]=val;
                this.count2-=this.c[index];
            }
            // this.count[index]+=this.c[index];
            // this.c[index]=val;
            // this.count[index]-=val;
            // console.log(this.c);
            // console.log(this.count);
        },
        submit:function(){
            if(confirm("確定要訂購嗎?")){
                alert("訂購成功!");
            this.$router.replace('/')
            }
            else{
                count2=-this.c[index];
            this.$router.replace('/ticket')
            alert("訂購失敗!")
            }
        },
     home:function(){
            this.$router.replace('/')
          },
    chose:function(){
       
        if(i==0 && j==0){
        document.getElementById('aa').style.borderColor='rgb(181, 9, 67)';
        i=1;
        }
        else if(i==1 && j==0){
            document.getElementById('aa').style.borderColor='white';
            i=0;
        }
        else if(i==1 && j==1){
            document.getElementById('aa').sytle.borderColor='white';
            document.getElementById('bb').style.borderColor='rgb(181, 9, 67)';
            j=1;i=0;
        }
        else if(i==0 && j==1){
            document.getElementById('aa').style.borderColor='rgb(181, 9, 67)';
            document.getElementById('bb').style.borderColor='white';
            j=0;i=1;
        }
    },
    oaooo:function(){
        
        if(j==0 && i==0){
        document.getElementById('bb').style.borderColor='rgb(181, 9, 67)';
        j=1;
        }
        else if(j==1 && i==0){
            document.getElementById('bb').style.borderColor='white';
            j=0;
        }
        else if(i==1 && j==0){
            document.getElementById('bb').style.borderColor='rgb(181, 9, 67)';
            document.getElementById('aa').style.borderColor='white';
            j=1;i=0;
        }
        else if(j==0 && i==1){
            document.getElementById('bb').style.borderColor='rgb(181, 9, 67)';
            document.getElementById('aa').style.borderColor='white';
            j=1;i=0;
        }
    }

    } 
  }

</script>

<style scoped>


@media screen and (max-width: 768px) {}

* {
    margin: 0 auto;
    overflow-x: hidden;
    padding: 0;
}

.ticket {
    background-color: #000;
    /* background-image:url(../img/dark.jpg); */
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    font-family: '微軟正黑體';
}

.home {
    position: fixed;
    font-size: 16px;
    margin-left: 5%;
    margin-top: 3%;
    /* padding:15px 15px; */
    width: 50px;
    height: 50px;
    color: white;
    /* text-align: center; */
    background-color: rgba(255, 255, 255, 0.20);
    /* z-index: 6; */
    border-radius: 25px;
    /* outline:1px #fff solid; */
    user-select: none;
    transition:width 0.5s;
    overflow: hidden;
}
.home:hover{
    background-color: rgba(255, 255, 255,0.5);
    width:130px;
}
.loglogo{
    position: relative;
    float: left;
    font-size: 20px;
    width: 20px;
    margin-left: 17px;
    margin-top: 9px;
    /* text-align: center; */
    /* outline: 1px rgb(148, 183, 223) solid; */
}
.logtext{
    float: left;
    position: relative;
    margin-left: 20px;
    margin-top: 13px;
    /* outline: 1px rgb(99, 153, 216) solid; */
}
.block1 {
    width: 70%;
    margin-top: 30px;
    margin-bottom: 50px;
    /* outline: 1px solid white; */
}

.topic {
    font-size: calc(0.3vw + 20px);
    width: 70%;
    margin-top: 100px;
    margin-left: 10%;
    color: #fff;
    border-left: 10px #B50943 solid;
    padding: 8px 30px;
    /* outline: 1px solid white; */
}

#aa {
    width: 60%;
    min-width: 350px;
    top: 40px;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 20px;
    border:3px solid white;
    border-radius: 10px;
}

#bb {
    width: 60%;
    min-width: 350px;
    top: 40px;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 20px;
    border:3px solid white;
    border-radius: 10px;
}

@media screen and (max-width: 768px) {
    #aa {
        max-width: 350px;
        width: 80%;
        min-width: 200px;
        top: 40px;
        margin-top: 20px;
        margin-left: 50%;
        transform: translateX(-50%);
    }
    #bb {
        max-width: 350px;
        width: 80%;
        min-width: 200px;
        top: 40px;
        margin-top: 20px;
        margin-left: 50%;
        transform: translateX(-50%);
    }
}

.img3 {
    width: 55%;
    min-width: 350px;
    top: 40px;
    margin-left: 50%;
    transform: translateX(-50%);
}

@media screen and (max-width: 768px) {
    .img3 {
        max-width: 350px;
        width: 80%;
        min-width: 200px;
        top: 40px;
        margin-left: 50%;
        transform: translateX(-50%);
    }
}

.btn1 {
    position: relative;
    width: 100%;
    /* height: 100px; */
    margin-top: 20px;
    /* border: 1px rgb(255, 255, 255) solid; */
    float: left;
    margin-left: 50%;
    margin-bottom: 30px;
    transform: translateX(-50%);
}

@media screen and (max-width: 768px) {
    .btn1 {
        position: relative;
        width: 100%;
        height: auto;
        margin-top: 20px;
        /* border: 1px rgb(255, 255, 255) solid; */
        float: left;
        margin-left: 50%;
        transform: translateX(-50%);
    }
}

.text1 {
    color: #fff;
    float: left;
    position: relative;
    width: 100px;
    font-size: 18px;
    margin-left: calc(20vw - 130px);
    margin-top: 12px;
    /* border: 1px rgb(83, 29, 29) solid; */
}

.num {
    /* color: rgb(150, 150, 150); */
    position: relative;
    top: 6px;
    font-size: 120%;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    /* border: 1px rgb(133, 69, 69) solid; */
}

.botton {
    position: relative;
    float: left;
    width: calc(40% + 80px);
    /* margin-top: 5px; */
    /* border: 1px rgb(255, 255, 255) solid; */
    /* margin-left: 52%; */
    /* transform: translateX(-50%); */
}

.number1 {
    color: #fff;
    float: left;
    position: relative;
    font-size: 14px;
    /* border: 1px rgb(83, 29, 29) solid; */
    padding: 0px;
    width: 130px;
    margin-top: 20px;
    /* margin-left: calc(36vw + 150px); */
}

@media screen and (max-width: 768px) {
    .text1 {
        position: relative;
        font-size: 18px;
        margin-left: 10%;
        /* border: 1px rgb(83, 29, 29) solid; */
    }
    .botton {
        position: relative;
        width: 280px;
        margin-top: 0px;
        /* border: 1px rgb(255, 255, 255) solid; */
        margin-left: 50%;
        transform: translateX(-50%);
    }
    .number1 {
        text-align: center;
        font-size: 12px;
        /* border: 1px rgb(228, 211, 211) solid; */
        padding: 0px;
        width: 150px;
        margin-top: 0px;
        margin-left: 50%;
        transform: translateX(-50%);
    }
}

@media screen and (max-width: 450px) {
    .botton {
        width: 220px;
        margin-top: 0px;
        /* border: 1px rgb(255, 255, 255) solid; */
    }
    .number1 {
        /* border: 1px rgb(228, 211, 211) solid; */
        margin-left: 47%;
    }
}

input[type="radio"] {
    /* margin-left: 0vw; */
    width: 1.5vw;
    height: 20px;
    opacity: 0;
}

label {
    background-color: rgb(221, 221, 221);
    /* color:rgb(255, 255, 255); */
    max-width: 70px;
    width: 5vw;
    min-width: 50px;
    height: 40px;
    border-radius: 10px;
    /* border: 1px solid rgb(255, 255, 255); */
}

@media screen and (max-width: 450px) {
    .num {
        top: 3px;
        font-size: 100%;
    }
    label {
        max-width: 60px;
        width: 5vw;
        min-width: 40px;
        height: 30px;
    }
}

/*設置選中的input的樣式*/

/* + 是兄弟選擇器,獲取選中後的label元素*/
input:hover+label{
    background-color: rgb(255, 255, 255);
}
input:checked+label {
    color: rgb(221, 221, 221);
    background-color: #B50943;
    /* border: 1px solid rgb(181, 9, 67); */
}


.submit {
    font-family: '微軟正黑體';
    position: relative;
    bottom: 10%;
    left: 50%;
    transform: translatex(-50%);
    color: white;
    background-color: #B50943;
    /* z-index: 1; */
    border-radius: 10px;
    padding: 10px 30px;
    margin-top: 15px;
    cursor: pointer;
    outline: none;
    border: none;
    margin-bottom: 120px;
    transition: 0.3s;
}
.submit:hover{
    background-color: rgba(181, 9, 66, 0.76);
}
</style>
