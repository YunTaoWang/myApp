/**
 * Created by wyt on 2017/4/5.
 */

function signRegExp(e){

    var _userName = localStorage.userName;
    var _passWord = localStorage.passWord;

    if(userName.value != _userName){
        userNameErr[0].style.visibility = 'visible';
        userNameErr[0].innerHTML = '* 未查找到用户名，请重新输入';
        //stopDefault(e);
    }else if(passWord.value != _passWord){
        userNameErr[0].style.visibility = 'hidden';
        passWordErr[0].style.visibility = 'visible';
        passWordErr[0].innerHTML = '* 密码与账号不符，请重新输入';
        //stopDefault(e);
    }else{
        window.location.href = 'Menu.html';
    }
    stopDefault(e);
    stopBubble(e);
};

addEventHandler(SignBtn,'click',signRegExp);
//removeEventHandler(SignBtn,'click',signRegExp);
