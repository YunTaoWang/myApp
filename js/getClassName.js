"use strict"

//===================================getClassName======================================
//function getElementsClass(classnames) {
//	var classobj = new Array(); //定义数组 
//
//	var classint = 0; //定义数组的下标 
//
//	var tags = document.getElementsByTagName("*"); //获取HTML的所有标签 
//
//	for(var i in tags) { //对标签进行遍历 
//
//		if(tags[i].nodeType == 1) { //判断节点类型 
//
//			if(tags[i].getAttribute("class") == classnames) //判断和需要CLASS名字相同的，并组成一个数组 
//
//			{
//
//				classobj[classint] = tags[i];
//
//				classint++;
//
//			}
//
//		}
//
//	}
//	console.log(classobj);
//	console.log(typeof classobj);
//	return classobj; //返回组成的数组 
//
//}
//===================================getClassName======================================

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