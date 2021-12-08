function login(){
	full1=false;
	full2=false;
	if(document.getElementById("logtext1").value !== ''){
		document.getElementById("logwarning1").textContent = " *Все правильно";
		document.getElementById("logwarning1").style.color = "green";
		full1=1;
	}
	else{
		document.getElementById("logwarning1").textContent = " *Вы не написали ваш никнейм";
		document.getElementById("logwarning1").style.color = "red";
		full1=0;
	}
	if(document.getElementById("logtext2").value == ''){
		document.getElementById("logwarning2").textContent = " *Вы не написали пароль";
		document.getElementById("logwarning2").style.color = "red";
		full2=0;
	}
	else if(document.getElementById("logtext2").value.length <= 3){
		document.getElementById("logwarning2").textContent = " *Пароль должен содержать минимум 4 символа";
		document.getElementById("logwarning2").style.color = "red";
		full2=0;
	}
	else{
		document.getElementById("logwarning2").textContent = " *Все правильно";
		document.getElementById("logwarning2").style.color = "green";
		full2=1;
	}
	if(full1 && full2){
		show();
	}


}
function show(){
    document.getElementById("window").style.display = 'block';
}
function not_show(){
  document.getElementById("window").style.display = 'none';
}
function cancel(){
	document.getElementById("logwarning1").textContent = "";
	document.getElementById("logwarning1").style.color = "black";
	document.getElementById("logwarning2").textContent = "";
	document.getElementById("logwarning2").style.color = "black";
}

function nextquestion() {
   if (document.getElementById("next").value == "1") {
      document.getElementById("question").textContent = "Как вы отноитесь к жанру роман?";
      document.getElementById("next").value = "2";
	  return
   }
   if (document.getElementById("next").value == "2") {
      document.getElementById("question").textContent = "Как вы отноитесь к жанру фэнтези?";
      document.getElementById("next").value = "3";
	  return
   }
   if (document.getElementById("next").value == "3") {
      document.getElementById("question").textContent = "Что насчет запретной литературы?"
      document.getElementById("next").textContent = "Показать результаты"
      document.getElementById("next").value = "4"
	  return
   }
   if (document.getElementById("next").value == "4") {
      document.getElementById("question").style.display = "none"
      document.getElementById("form").style.display = "none"
      document.getElementById("next").style.display = "none"
      document.getElementById("result").style.display = "block"
      return
   }
}
function showtext1(){

}
function showtext2(){

}
function showtext3(){

}

function show_info() {
	if(document.getElementById("ad_menu").style.display == "block") {
		document.getElementById("ad_menu").style.display = "none";
	}
	else {
		document.getElementById("ad_menu").style.display = "block";
	}
}