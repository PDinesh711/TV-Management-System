// panel -1 
function SubDetails() {
    let firstName = document.querySelector('#userFirstname').value;
    let lastName = document.querySelector('#userLastname').value;
    let mobileNumber = document.querySelector('#userMobilenumber').value;
    let landLinenumber = document.querySelector('#userLandlineNumber').value;
    let city = document.querySelector('#userCity').value;
    let pinCode = document.querySelector('#userPincode').value;

    // console.log(firstName);
    // console.log(lastName);
    //  console.log(mobileNumber);
    //  console.log(landLinenumber);
    //  console.log(city);
    //  console.log(pinCode)

    let spanName = document.querySelector('#spanName');
    let spanMobile = document.querySelector('#spanMobile');
    let spanCity = document.querySelector('#spanCity');
    spanName.innerHTML = `${firstName} ${lastName}`;
    spanMobile.innerHTML = `${mobileNumber} `;
    spanCity.innerHTML = `${city} `;
}
// panel 2 
let date = new Date();
// let option ={timeZone: 'Asia/Kolkata'}
// let date = new Date().toLocaleDateString('en-US',option); 
let day = date.getDate();
// let month = date.getMonth()+1;
let month = () => {
    let mon = date.getMonth() + 1;
    if (mon < 9) {
        return `0${mon}`
    }
    else {
        return `${mon}`
    }
}
let year = date.getFullYear();
// let hours=date.getHours();
// let minutes =date.getMinutes();
// let sec = date.getSeconds();
let currentDate = `${day}/${month()}/${year}`;
// let currentTime =`${hours}:${minutes}:${sec}`;
document.querySelector('#currDate').innerHTML = currentDate;
// document.querySelector('#currTime').innerHTML=setTimeout(currentTime,1000);

let startDate = document.querySelector('#startDate');
startDate.addEventListener('input', function () {
    let spanStartdate = document.querySelector('#spanStartdate');
    spanStartdate.innerHTML = startDate.value;
})

let lastDate = document.querySelector('#lastDate');
lastDate.addEventListener('input', function () {
    let spanLastdate = document.querySelector('#spanLastdate');
    spanLastdate.innerHTML = lastDate.value
})

let nooFTv = document.querySelector('#noOfTv');
nooFTv.addEventListener('keyup', function () {
    let nooFtv = document.querySelector('#nooFTv');
    nooFtv.innerHTML = nooFTv.value
})

// panel 3 , panel 4 , panel 5

// sport's Function
let sportPackage = document.querySelector('#sportPackage');
let kidsPackage = document.querySelector('#kidsPackage');
let moviesPackage = document.querySelector('#moviesPackage');
// sport Channel
function s1function(){
    let s1 = document.querySelector('#s1');
    let s2 = document.querySelector('#s2');
    let s3 = document.querySelector('#s3');
    let s4 = document.querySelector('#s4');
    let s5 = document.querySelector('#s5');
    let s6 = document.querySelector('#s6');
    // price 
    let sr1 = document.querySelector('#sr1');
    let sr2 = document.querySelector('#sr2');
    let sr3 = document.querySelector('#sr3');
    let sr4 = document.querySelector('#sr4');
    let sr5 = document.querySelector('#sr5');
    let sr6 = document.querySelector('#sr6');
        // channel name
        s1.innerHTML = "Star Sports 1";
        s2.innerHTML = "Sony Ten 3 HD Sports Channel";
        s3.innerHTML = "DD Sports Channel";
        s4.innerHTML = "Sony Six";
        s5.innerHTML = "ESPN and FS1";
        s6.innerHTML = "Sports18 Tamil";
        // Price 
        sr1.innerHTML = "&#8377; 19";
        sr2.innerHTML = "&#8377; 29";
        sr3.innerHTML = "&#8377; 15";
        sr4.innerHTML = "&#8377; 19";
        sr5.innerHTML = "&#8377; 29";
        sr6.innerHTML = "&#8377; 15";
        // 
        let installationPrice = 1500;
        let total1 = document.querySelector('#total');
        total1.innerHTML = ` &#8377; ${installationPrice}  + 4 month Free`
        // package for 
        let packageFee = document.querySelector('#spackageFee');
        packageFee.innerHTML = Number(19 + 29 + 15 + 19 + 29 + 15)

        return Number(19 + 29 + 15 + 19 + 29 + 15);
}
function s2function(){
    let s1 = document.querySelector('#s1');
    let s2 = document.querySelector('#s2');
    let s3 = document.querySelector('#s3');
    let s4 = document.querySelector('#s4');
    let s5 = document.querySelector('#s5');
    let s6 = document.querySelector('#s6');
    // price 
    let sr1 = document.querySelector('#sr1');
    let sr2 = document.querySelector('#sr2');
    let sr3 = document.querySelector('#sr3');
    let sr4 = document.querySelector('#sr4');
    let sr5 = document.querySelector('#sr5');
    let sr6 = document.querySelector('#sr6');
        s1.innerHTML = "";
        s2.innerHTML = "";
        s3.innerHTML = "";
        s4.innerHTML = "";
        s5.innerHTML = "";
        s6.innerHTML = "";
        // Price 
        sr1.innerHTML = "";
        sr2.innerHTML = "";
        sr3.innerHTML = "";
        sr4.innerHTML = "";
        sr5.innerHTML = "";
        sr6.innerHTML = "";
        // 
        let installationPrice = 1500;
        let total1 = document.querySelector('#total');
        total1.innerHTML = ` &#8377; 0`
        // package for 
        let packageFee = document.querySelector('#spackageFee');
        packageFee.innerHTML = 0

        return Number(0);
}
sportPackage.onchange = function (){
    // channel

    if (this.checked) {
        s1function();
       
    }
    else {
       s2function()
    }
   
}
// kids 
function k1function(){
// channel name
let k1 = document.querySelector('#k1');
let k2 = document.querySelector('#k2');
let k3 = document.querySelector('#k3');
let k4 = document.querySelector('#k4');
let k5 = document.querySelector('#k5');
let k6 = document.querySelector('#k6');
// Price 
let kr1 = document.querySelector('#kr1');
let kr2 = document.querySelector('#kr2');
let kr3 = document.querySelector('#kr3');
let kr4 = document.querySelector('#kr4');
let kr5 = document.querySelector('#kr5');
let kr6 = document.querySelector('#kr6');
        k1.innerHTML = "Cartoon Network ";
        k2.innerHTML = "PBS Kids";
        k3.innerHTML = "Disney Channel";
        k4.innerHTML = "Sprout";
        k5.innerHTML = "Nickelodeon";
        k6.innerHTML = "Hungama";


        kr1.innerHTML = "&#8377; 15";
        kr2.innerHTML = "&#8377; 17";
        kr3.innerHTML = "&#8377; 15";
        kr4.innerHTML = "&#8377; 18";
        kr5.innerHTML = "&#8377; 17";
        kr6.innerHTML = "&#8377; 21";
        // 
        let installationPrice = 1500;
        let total1 = document.querySelector('#total');
        total1.innerHTML = ` &#8377; ${installationPrice}  + 4 month Free`

        let packageFee = document.querySelector('#kpackageFee');
        packageFee.innerHTML = Number(15 + 17 + 15 + 18 + 17 + 21)
        return Number(15 + 17 + 15 + 18 + 17 + 21);
}
function k2function(){
    let k1 = document.querySelector('#k1');
    let k2 = document.querySelector('#k2');
    let k3 = document.querySelector('#k3');
    let k4 = document.querySelector('#k4');
    let k5 = document.querySelector('#k5');
    let k6 = document.querySelector('#k6');
    // Price 
    let kr1 = document.querySelector('#kr1');
    let kr2 = document.querySelector('#kr2');
    let kr3 = document.querySelector('#kr3');
    let kr4 = document.querySelector('#kr4');
    let kr5 = document.querySelector('#kr5');
    let kr6 = document.querySelector('#kr6');
        k1.innerHTML = "";
        k2.innerHTML = "";
        k3.innerHTML = "";
        k4.innerHTML = "";
        k5.innerHTML = "";
        k6.innerHTML = "";

        kr1.innerHTML = "";
        kr2.innerHTML = "";
        kr3.innerHTML = "";
        kr4.innerHTML = "";
        kr5.innerHTML = "";
        kr6.innerHTML = "";
        // 
        let installationPrice = 1500;
        let total1 = document.querySelector('#total');
        total1.innerHTML = ` &#8377; ${installationPrice}  + 4 month Free`

        let packageFee = document.querySelector('#kpackageFee');
        packageFee.innerHTML = Number(0)
        return Number(0);
}
// Kids Channel
kidsPackage.onchange = function () {
    

    if (this.checked) {
          k1function();
    }
    else {
        // channel name
    k2function()
    }
}
// movies
function m1function(){
 // channel name
 let m1 = document.querySelector('#m1');
 let m2 = document.querySelector('#m2');
 let m3 = document.querySelector('#m3');
 let m4 = document.querySelector('#m4');
 let m5 = document.querySelector('#m5');
 let m6 = document.querySelector('#m6');

 // Price 
 let mr1 = document.querySelector('#mr1');
 let mr2 = document.querySelector('#mr2');
 let mr3 = document.querySelector('#mr3');
 let mr4 = document.querySelector('#mr4');
 let mr5 = document.querySelector('#mr5');
 let mr6 = document.querySelector('#mr6');

     m1.innerHTML = "Zee Cinema HD";
     m2.innerHTML = "Star Vijay";
     m3.innerHTML = "Sun Tv";
     m4.innerHTML = "K Tv";
     m5.innerHTML = "Gemini Tv";
     m6.innerHTML = "Maa Tv";

     mr1.innerHTML = "&#8377; 35";
     mr2.innerHTML = "&#8377; 22";
     mr3.innerHTML = "&#8377; 30";
     mr4.innerHTML = "&#8377; 19";
     mr5.innerHTML = "&#8377; 18";
     mr6.innerHTML = "&#8377; 17";
     // 
     let installationPrice = 1500;
     let total1 = document.querySelector('#total');
     total1.innerHTML = ` &#8377; ${installationPrice}  + 4 month Free`

     let packageFee = document.querySelector('#mpackageFee');
     packageFee.innerHTML = Number(35 + 22 + 30 + 19 + 18 + 17)
     return Number(35 + 22 + 30 + 19 + 18 + 17)
}
function m2function(){
 // channel name
 let m1 = document.querySelector('#m1');
 let m2 = document.querySelector('#m2');
 let m3 = document.querySelector('#m3');
 let m4 = document.querySelector('#m4');
 let m5 = document.querySelector('#m5');
 let m6 = document.querySelector('#m6');

 // Price 
 let mr1 = document.querySelector('#mr1');
 let mr2 = document.querySelector('#mr2');
 let mr3 = document.querySelector('#mr3');
 let mr4 = document.querySelector('#mr4');
 let mr5 = document.querySelector('#mr5');
 let mr6 = document.querySelector('#mr6');

     // channel name
     m1.innerHTML = "";
     m2.innerHTML = "";
     m3.innerHTML = "";
     m4.innerHTML = "";
     m5.innerHTML = "";
     m6.innerHTML = "";

     // Price 
     mr1.innerHTML = "";
     mr2.innerHTML = "";
     mr3.innerHTML = "";
     mr4.innerHTML = "";
     mr5.innerHTML = "";
     mr6.innerHTML = "";
     // 
     let total1 = document.querySelector('#total');
     total1.innerHTML = ``

     let packageFee = document.querySelector('#mpackageFee');
     packageFee.innerHTML = Number(0)
     return Number(0)
}
// Movies Channel
moviesPackage.onchange = function () {
    
    if (this.checked) {
       m1function(); 
    }
    else {
       m2function();
    }
}
// button
let submitbtn = document.querySelector('#submitBtn');
submitbtn.addEventListener('click',function(){
    document.querySelector('#panel6').style.display='block';
})
document.querySelector('#panel6').style.display='none';
function validating(){
    let spanName = document.querySelector('#spanName');
    let spanMobile = document.querySelector('#spanMobile');
    let spanCity = document.querySelector('#spanCity');
    let spanStartdate = document.querySelector('#spanStartdate');
    let spanLastdate = document.querySelector('#spanLastdate');
    let nooFtv = document.querySelector('#nooFTv');
    if((spanName.innerHTML&&spanMobile.innerHTML&&spanCity.innerHTML&&spanStartdate.innerHTML&&spanLastdate.innerHTML&&nooFtv.innerHTML)===""){
        alert('Order incompleted !.. Fill the Missing Field ')
    }
    else{
       // order status 
        alert('Order Completed !.. ')
        // result Panel
        document.querySelector('#spanName').innerHTML = '';
        document.querySelector('#spanMobile').innerHTML = '';
        document.querySelector('#spanCity').innerHTML = '';
        document.querySelector('#spanStartdate').innerHTML = '';
        document.querySelector('#spanLastdate').innerHTML = '';
        document.querySelector('#nooFTv').innerHTML = '';
        // panel 1 
        document.querySelector('#userFirstname').value = '';
        document.querySelector('#userLastname').value = '';
        document.querySelector('#userMobilenumber').value = '';
        document.querySelector('#userLandlineNumber').value = '';
        document.querySelector('#userCity').value = '';
        document.querySelector('#userPincode').value = '';
        // panel 2 
        document.querySelector('#startDate').value = '';
        document.querySelector('#lastDate').value = '';
        document.querySelector('#noOfTv').value = '';
        //panel  3
        s2function();
        k2function();
        m2function();
        document.querySelector('#sportPackage').checked = false;
        document.querySelector('#kidsPackage').checked = false;
        document.querySelector('#moviesPackage').checked = false;
    }

}

let PayAmount = document.querySelector('#PayAmount');
PayAmount.addEventListener('click',function(event){
    validating();
})

