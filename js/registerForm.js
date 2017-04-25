/**
 * Created by wyt on 2017/4/5.
 */
//localStorage.clear();
addEventHandler(RegBtn,'click',regRegExp);
function regRegExp(e){
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
    if(userName.value == ''){
        userNameErr[0].style.visibility = 'visible';
        userNameErr[0].innerHTML = '* 请输入您的用户名';
        //stopDefault(e);
    }else if(passWord.value == ''){
        localStorage.userName = userName.value;
        userNameErr[0].style.visibility = 'hidden';
        passWordErr[0].style.visibility = 'visible';
        passWordErr[0].innerHTML = '* 请输入您的密码';
        //stopDefault(e);
    }else if(email.value == ''){
        localStorage.passWord = passWord.value;
        passWordErr[0].style.visibility = 'hidden';
        emailErr[0].style.visibility = 'visible';
        emailErr[0].innerHTML = '* 请输入您的邮箱地址';
        //stopDefault(e);
    }else if(phoneNumber.value == ''){
        emailErr[0].style.visibility = 'hidden';
        phoneNumberErr[0].style.visibility = 'visible';
        phoneNumberErr[0].innerHTML = '* 请输入您的电话号码';
        //stopDefault(e);
    }else if(address.value == ''){
        phoneNumberErr[0].style.visibility = 'hidden';
        addressErr[0].style.visibility = 'visible';
        addressErr[0].innerHTML = '* 请输入您的家庭地址';
        //stopDefault(e);
    }else{
        //return true;
        localStorage.userName = userName.value;
        localStorage.passWord = passWord.value;
        setTimeout(function (){
            window.location.href = 'SignIn.html';
        },800)
    }
    stopDefault(e);
    stopBubble(e);
    //localStorage.clear();
};

//removeEventHandler(RegBtn,'click',regRegExp);
$("#imageFile").change(function(){
    var objUrl = getObjectURL(this.files[0]) ;
    localStorage.objUrl = objUrl;
    //console.log("objUrl = "+objUrl) ;
    if (objUrl) {
        $("#img").css({
            'background': 'url('+ objUrl + ') no-repeat center',
            'background-size': 'cover'
        }) ;
    }
}) ;
