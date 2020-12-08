// JavaScript Document	
 	//函数2：验证密码是否符合要求：匹配6位密码，由数字和字母组成：
'use strict';
	function validate_password(password){
  		//^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6-10}$
		//测试密码：12345y
		var passwordReg= /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6}$/;
  		if((password !== "")&&(password.search(passwordReg)!== -1))
  		{
  			document.getElementById("test_pw").innerHTML = "<font color='green' size='3px'>√密码格式正确</font>";
  		}else{
  			document.getElementById("test_pw").innerHTML = "<font color='red' size='3px'>密码格式错误</font>";
  			alert("密码有6位，由数字和字母组成!");
  		}
  	}
  	
	//函数3：验证两次输入的密码是否一样
	function validate_password2(password2){
		var password=document.getElementById("password").value;
  		//测试：console.log(password);
  		//测试：console.log(password2);
  		if (password === ""){
			document.getElementById("is_test_pw").innerHTML = "<font color='red' size='3px'>密码不为空</font>";
		}else if(password===password2){
  			document.getElementById("is_test_pw").innerHTML = "<font color='green' size='3px'>√两次输入的密码相同</font>";
  		}else{
  			document.getElementById("is_test_pw").innerHTML = "<font color='red' size='3px'>两次输入的密码不相同</font>";
  			console.log("密码有6位，由数字和字母组成!");
  		}
  	} 
  	