<template>
    <div class="home">
      <div class="home">
        <div class="top">
            <div class="logout" @click="logout">
                <div class="loglogo">&#060;
                </div> 
                <div class="logtext">Logout
                </div>
            </div>
            <img src="../img/LOGO.png" alt="" class="logo">
            <!-- <div id="oao">
          <input type="button" style="width:50px height:50px border:1px #fff none;background-color:rgba(58, 57, 57, 0.63)" id="bye" name="bye" value="Ⅹ" @click="bye()">
        </div> -->
            <div class="butten" id="butten">
                <a href="javascript:void(0)" @click="change()">
                    我要訂票
                </a>
            </div>
        </div>
        <div class="intro">
            <div class="tp">
                樂團簡介 ‧ Band Introduction
            </div>
            <div class="text">
                老熊與我<br><br>成立於2018/10，國立台北教育大學，希望透過音樂喚醒現代文明人的野性與熱情。<br>由四名學生組成，卻演奏出無與倫比的樂曲，駕馭許多不同風格的音樂，在創作及比賽中屢勝佳績。<br>單曲《野性呼喚》、《阿偉你的狗在叫你》廣受好評!
            </div>
            <div class="circleout">
                <div class="circle circle2" id="circle2">
                    <div class="name">地瓜葉女神</div>
                    <div class="textline"></div>
                    <img src="../img/47c.jpg" alt="">
                </div>
                <div class="circle circle1" id="circle1">
                    <div class="name">蜂蜜熊熊</div>
                    <div class="textline"></div>
                    <img src="../img/bear.jpg" alt="">
                </div>
                <div class="circle circle3" id="circle3">
                    <div class="name">漩渦碩人</div>
                    <div class="textline"></div>
                    <img src="../img/old.jpg" alt="">
                </div>
                <div class="circle circle4" id="circle4">
                    <div class="name">大馬來人</div>
                    <div class="textline"></div>
                    <img src="../img/m.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="line"></div>
        <div class="infor">
            <div class="tp">
                演唱會資訊 ‧ Information
            </div>
            <div class="session">
                <div class="sessionimg">
                    <img src="../img/s1.png" alt="">
                </div>
                <div class="sessionimg">
                    <img src="../img/s2.png" alt="">
                </div>
            </div>
            <div class="text">
                場次：<br>6/18星期二 台北大巨蛋<br>6/30星期日 高雄愛情摩天輪下<br><br>開場 17:30/開演 18:30<br>票價：250/150<br>
            </div>
        </div>
        <div class="line"></div>
        <div class="tintro">
            <div class="tp">
                購票須知 · Ticketing Instructions
            </div>
            <div class="text">
                · 一人一票區限購3張，最多可購買6張<br>· 訂票之後請於隔天下午3點之前完成匯款，如逾期匯款，將取消訂單<br>· 訂票皆不劃位，當天依入場順序入座<br>· 若已付款，將不接受退票
            </div>
        </div>

        <div class="footer">
            <div class="footerimg">
                <img src="../img/LOGO.png" alt="">
            </div>
            <div class="textfooter">
                老熊與我 演唱會售票系統<br>主辦 | <br>贊助 | 國立台北教育大學 數位科技設計學系
            </div>
            <div class="text copyright">
                Copyright（C）Old Bear and Me. All Rights Reserved. </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  name:'home',
  methods: {
    change:function(){
      this.$router.push('ticket');
    },
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
    // ticket:function(){
    //   document.querySelector('#oao').style.display = "block";
    // },
    // bye:function(){
    //   document.querySelector('#oao').style.display = "none";
    // },
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

.home {
    background: #000;
    width: 100%;
    right: 0;
    left: 0;
    font-family: '微軟正黑體';
}

.top {
    width: 100%;
    height: 100vh;
    background-image: url(../img/IMG1.jpg);
    background-position: 35% 60%;
    background-size: cover;
    border-bottom: 1px solid rgba(92, 90, 90, 0.89);
}

.intro {
    width: 100%;
    padding-bottom: 200px;
    /* border-bottom: 1px solid rgba(92, 90, 90, 0.89); */
    padding: auto 50px;
}

@media screen and (max-width: 768px) {
    .intro {
        width: 100%;
        padding-bottom: 150px;
        /* border-bottom: 1px solid rgba(92, 90, 90, 0.89); */
        padding: auto 50px;
    }
}

@media screen and (max-width: 450px) {
    .intro {
        width: 100%;
        padding-bottom: 150px;
        /* border-bottom: 1px solid rgba(92, 90, 90, 0.89); */
        padding: auto 50px;
    }
}

.infor {
    width: 100%;
    /* height: 100vh; */
    padding-bottom:200px;
    /* border-bottom: 1px solid rgba(92, 90, 90, 0.89); */
}

@media screen and (max-width: 768px) {
    .infor {
        width: 100%;
        padding-bottom: 150px;
        /* border-bottom: 1px solid rgba(92, 90, 90, 0.89); */
    }
}

.tintro {
    width: 100%;
    /* height: 75vh; */
    padding-bottom: 200px;
    border-bottom: 1px solid rgba(92, 90, 90, 0.89);
}

@media screen and (max-width: 768px) {
    .tintro {
        width: 100%;
        padding-bottom: 150px;
        border-bottom: 1px solid rgba(92, 90, 90, 0.89);
    }
}

.footer {
    width: 100%;
    height: 21vh;
    margin-top: 30px;
}

@media screen and (max-width: 768px) {
    .footer {
        width: 100%;
        height: 20vw;
        margin-top: 20px;
    }
}

.line {
    background-image: url(../img/line.png);
    background-repeat: no-repeat;
    height: 20px;
    background-size: 100% auto;
}

@media screen and (max-width: 450px) {
    .line {
        background-image: url(../img/line.png);
        background-repeat: no-repeat;
        height: 20px;
        max-width: 500px;
        background-size: 600px auto;
    }
}

.logout {
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
    z-index: 99;
    border-radius: 25px;
    /* outline:1px #fff solid; */
    user-select: none;
    transition:width 0.5s;
    overflow: hidden;
}

.logout:hover {
    background-color: rgba(255, 255, 255, 0.5);
    width:150px;

}
.loglogo{
    position: relative;
    float: left;
    font-size: 20px;
    width: 20px;
    margin-left: 17px;
    margin-top: 11px;
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

.logo {
    position: absolute;
    top: 5%;
    right: 5%;
    width: 30vw;
    max-width: 400px;
    min-width: 300px;
}

@media screen and (max-width: 768px) {
    .logo {
        top: 10%;
        width: 50vw;
        max-width: 300px;
        min-width: 300px;
    }
}

@media screen and (max-width: 450px) {
    .logo {
        position: absolute;
        top: 10%;
        right: 5%;
        width: 60vw;
        max-width: 300px;
        min-width: 100px;
    }
}

.butten {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translatex(-50%);
    background-color: #B50943;
    z-index: 1;
    border-radius: 10px;
    padding: 10px 30px;
    
}

.butten:hover {
    background-color: rgba(181, 9, 66, 0.76);
    /* opacity: 0.8; */
    transition: 0.3s;
}

.butten a {
    font-size: 20px;
    color: #fff;
    text-decoration: none;
}

.tp {
    font-size: calc(1vw + 15px);
    width: 70%;
    margin-top: 5%;
    margin-left: 10%;
    color: #fff;
    border-left: 10px #B50943 solid;
    padding: 10px 30px;
    /* outline: 1px solid white; */
}

@media screen and (max-width: 768px) {
    .tp {
        font-size: 3vw;
        width: 70%;
        margin-top: 10%;
        margin-left: 10%;
        color: #fff;
        border-left: 10px #B50943 solid;
        padding: 10px 30px;
        /* outline: 1px solid white; */
    }
}

@media screen and (max-width: 450px) {
    .tp {
        font-size: 16px;
        width: 70%;
        margin-top: 8%;
        margin-left: 10%;
        color: #fff;
        border-left: 10px #B50943 solid;
        padding: 10px 30px;
        /* outline: 1px solid white; */
    }
}

.text {
    font-size: calc(0.3vw + 15px);
    margin-top: 3%;
    margin-left: 12%;
    padding: 10px 30px;
    width: 70%;
    color: rgb(207, 205, 205);
    /* outline: 1px solid white; */
}

@media screen and (max-width: 768px) {
    .text {
        font-size: 2.5vw;
        margin-top: 10%;
        margin-left: 12%;
        padding: 10px 30px;
        width: 70%;
        color: rgb(207, 205, 205);
        /* outline: 1px solid white; */
    }
}

@media screen and (max-width: 450px) {
    .text {
        font-size: 12px;
        margin-top: 4%;
        margin-left: 8%;
        padding: 10px 30px;
        width: 70%;
        color: rgb(207, 205, 205);
        /* outline: 1px solid white; */
    }
}

.circleout {
    /* outline: 1px solid white; */
    width: calc(60vw + 84px);
    height: calc(15vw + 21px);
    margin-top: 3%;
    margin-left: 50%;
    transform: translateX(-50%);
    padding: 0 15px 0 0;
}

.circle {
    position: relative;
    float: left;
    z-index: 2;
    background-color: #000;
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    overflow: hidden;
    border: 3px rgba(255, 255, 255, 0.89) solid;
    margin-left: 15px;
    margin-top: 15px;
  
}

@media screen and (max-width: 768px) {
    .circleout {
        /* outline: 1px solid white; */
        width: calc(40vw + 84px);
        height: calc(40vw + 84px);
        margin-top: 3%;
        margin-left: 50%;
        transform: translateX(-50%);
        padding: 0 15px 0 0;
        /* border: rgba(211, 102, 102, 0.89) solid; */
    }
    .circle {
        position: relative;
        float: left;
        z-index: 2;
        background-color: #000;
        width: 20vw;
        height: 20vw;
        border-radius: 50%;
        overflow: hidden;
        margin-left: 30px;
        margin-top: 30px;
    }
}

.name {
    text-align: center;
    color: #fff;
    position: absolute;
    overflow: hidden;
    /* z-index: 10; */
    font-size: 2vw;
    width: 80%;
    height: 20%;
    top: 40%;
    left:50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
    opacity: 0;
    user-select: none;
    /* border-bottom: 2px rgba(255, 255, 255, 0) solid; */
}

.circle img {
    position: absolute;
    width: 100%;
    opacity: 0.9;
}
.textline{
    position: absolute;
    width: 0%;
    height: 20%;
    /* z-index: 10; */
    top: 60%;
    left:50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
    opacity: 0;
    user-select: none;
    border: 2px rgba(255, 255, 255,0) solid;
}
.circle img:hover {
    opacity: 0.3;
    transition: 0.3s;
}

.circle:hover>.name {
    /* width: 80%; */
    opacity: 1;
    transition: 0.6s;
    /* border-bottom:2px #B50943 solid; */
}
.circle:hover>.textline {
    width: 70%;
    opacity: 1;
    transition: 0.6s;
    border-top:2px #B50943 solid;
}
.session {
    position: relative;
    margin-top: 3%;
    max-width: 1200px;
    width: 80%;
    height: auto;
    /* border: rgba(211, 102, 102, 0.89) solid; */
}

.sessionimg {
    position: relative;
    float: left;
    max-width: 500px;
    /* border: rgba(91, 192, 179, 0.89) solid; */
    padding: 15px;
}

.session img {
    margin: auto;
    position: relative;
    width: 100%;
    /* border: rgba(92, 90, 90, 0.89) solid; */
}

@media screen and (max-width: 1350px) {
    .session {
        position: relative;
        margin-top: 3%;
        max-width: 500px;
        width: 80%;
        height: auto;
        /* border: rgba(211, 102, 102, 0.89) solid; */
    }
    .sessionimg {
        position: relative;
        max-width: 100%;
        /* border: rgba(91, 192, 179, 0.89) solid; */
        padding: 10px;
    }
    .session img {
        margin: auto;
        position: relative;
        width: 100%;
        /* border: rgba(92, 90, 90, 0.89) solid; */
    }
}

@media screen and (max-width: 768px) {
    .session {
        position: relative;
        margin-top: 10%;
        max-width: 1200px;
        width: 80%;
        height: auto;
        /* border: rgba(211, 102, 102, 0.89) solid; */
    }
    .sessionimg {
        position: relative;
        max-width: 100%;
        /* border: rgba(91, 192, 179, 0.89) solid; */
        padding: 20px;
    }
    .session img {
        margin: auto;
        position: relative;
        width: 100%;
        /* border: rgba(92, 90, 90, 0.89) solid; */
    }
}

.footerimg {
    max-width: calc(5% + 55px);
    float: left;
    width: 20%;
    height: auto;
    /* border: rgba(91, 192, 179, 0.89) solid; */
    margin-left: 5%;
}

.footerimg img {
    position: relative;
    width: 100%;
    /* border: rgba(221, 164, 233, 0.89) solid; */
}

@media screen and (max-width: 768px) {
    .footerimg {
        max-width: 100px;
        float: left;
        width: 20%;
        height: auto;
        /* border: rgba(91, 192, 179, 0.89) solid; */
        margin-left: 5%;
        margin-top: 0px;
    }
    .textfooter {
        position: relative;
        float: left;
        margin-left: 15px;
        margin-top: 12px;
        max-width: 300px;
        width: 25%;
        min-width: 300px;
        color: white;
        font-size: calc(0.5vw + 7pt);
        /* border: rgba(91, 192, 179, 0.89) solid; */
    }
}
@media screen and (max-width: 500px) {
    .textfooter {
        position: relative;
        float: left;
        margin-left: 20px;
        margin-top: 5px;
        max-width: 450px;
        width: 35%;
        min-width: 250px;
        font-size: 2vw;
        color: white;
        /* border: rgba(91, 192, 179, 0.89) solid; */
    }
}

.copyright {
    float: right;
    width: 35%;
    text-align: right;
    padding: 0px;
    padding-right: 20px;
    margin: 0px;
    margin-top: 70px;
    color: rgb(92, 92, 92);
    font-size: 1vw;
    /* border: rgba(91, 192, 179, 0.89) solid; */
}

@media screen and (max-width: 768px) {
    .copyright {
        float: right;
        width: 100%;
        text-align: center;
        margin-top: 20px;
        color: rgb(92, 92, 92);
        font-size: 1vw;
        /* border: rgba(91, 192, 179, 0.89) solid; */
    }
}

@media screen and (max-width: 500px) {
    .copyright {
        float: right;
        width: 100%;
        text-align: center;
        margin-top: 12px;
        color: rgb(92, 92, 92);
        font-size: 1vw;
        /* border: rgba(91, 192, 179, 0.89) solid; */
    }
}

</style>