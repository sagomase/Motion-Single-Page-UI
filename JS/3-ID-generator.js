// JavaScript Document

function fetch(){
	var category = document.getElementById("category").value;
	var time = document.getElementById("time").value;
	var id=category.slice(0,3);
	var id1=time.slice(0,4);
	id=id.concat("",id1);
	id=id.toUpperCase();
	//console.log(id);	
	document.getElementById("batchID").innerHTML="The Batch ID alloted to you is: "+id;
	
	var link = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+id;
	document.getElementById("frame").setAttribute("src",link);
	// document.getElementById("frame").style.border="1px solid black";
}