/**
 * Created by wyt on 2017/4/1.
 */

'use strict'

    var SignBtn = document.getElementById('signSubBtn');
    var RegBtn = document.getElementById('regSubBtn');
    var userName = document.getElementById('userName');
    var passWord = document.getElementById('passWord');
    var email = document.getElementById('email');
    var phoneNumber = document.getElementById('phoneNumber');
    var address = document.getElementById('address');

    var userNameErr = getElementsClass('userNameErr');
    var passWordErr = getElementsClass('passWordErr');
    var emailErr = getElementsClass('emailErr');
    var phoneNumberErr = getElementsClass('phoneNumberErr');
    var addressErr = getElementsClass('addressErr');
    var okSign = getElementsClass('glyphicon-ok-sign');
    var proImg = getElementsClass('pro-img');



function addEventHandler(target,type,func){
    if(target.addEventListener){
        //监听IE9，谷歌和火狐
        target.addEventListener(type, func, false);
    }else if(target.attachEvent){
        target.attachEvent("on" + type, func);
    }else{
        target["on" + type] = func;
    }
};
/*
 * removeEventHandler:移除Dom元素的事件
 *
 * target：监听对象
 * type：监听函数类型，如click,mouseover
 * func：监听函数
 */
function removeEventHandler(target, type, func) {
    if (target.removeEventListener){
        //监听IE9，谷歌和火狐
        target.removeEventListener(type, func, false);
    } else if (target.detachEvent){
        target.detachEvent("on" + type, func);
    }else {
        delete target["on" + type];
    }
};
/*阻止事件的默认行为 兼容IE和其他*/
function stopDefault(e) {
    //阻止默认浏览器动作(W3C)
    if ( e && e.preventDefault )
        e.preventDefault();
    //IE中阻止函数器默认动作的方式
    else
        window.event.returnValue = false;
    return false;
};
/*阻止事件的冒泡 兼容IE和其他*/
function stopBubble(e){
    //阻止默认浏览器动作(W3C)
    if ( e && e.stopPropagation ){
        e.stopPropagation();
    }
    //IE中阻止函数器默认动作的方式
    else{
        window.event.cancelBubble = true;
    }
    return false;
}

//function getFullPath(obj) {
//    if(obj){
//       //ie
//      if (window.navigator.userAgent.indexOf("MSIE")>=1){
//          obj.select();
//          return document.selection.createRange().text;
//      }
//      //firefox
//      else if(window.navigator.userAgent.indexOf("Firefox")>=1){
//          if(obj.files){
//              return window.URL.createObjectURL(obj.files.item(0));
//          }
//          return obj.value;
//      }
//        return obj.value;
//    }
//}
function getObjectURL(file) {
    var url = null ;
    if (window.createObjectURL!=undefined) { // basic
        url = window.createObjectURL(file) ;
    } else if (window.URL!=undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) ;
    } else if (window.webkitURL!=undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file) ;
    }
    return url ;
}


function getElementsClass(className) {
    var elems = [];
    if(!document.getElementsByClassName) {
        var dom = document.getElementByTagName('*');
        for(var i = 0; i < dom.length; i++) {
            if(dom[i].className == className) elems.push(dom[i]);
        }
    } else {
        elems = document.getElementsByClassName(className);
    }
    //console.log(elems);
    //elems.style.visibility = 'visible'
    return elems;
}