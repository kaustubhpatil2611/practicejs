
var seq20=[0,0,0,0,0,0];
var seq19=[0,0,0,0,0,0];
var seq18=[0,0,0,0,0,0];

function total(cnt,yr){
	if(yr=="20"){
		seq20[cnt]=seq20[cnt]+1;
		ttl=seq20[cnt];
	}
	else if(yr=="19"){
		seq19[cnt]=seq19[cnt]+1;
		ttl=seq19[cnt];
	}
	else{
		seq18[cnt]=seq18[cnt]+1;
		ttl=seq18[cnt];
	}
	return ttl;
}

function batch(ttl){
	var count=Math.floor(ttl/20);
	if(count<10){
		return "0"+count;
	}
	else{
		return count;
	}

}

function sequence(a){
	
	if(a<10){
		return "000"+a;
	}
	else if(a<100){
		return "00"+a;
	}
	else{
		return "0"+a;
	}
}


function generate() {

	var year=document.myform.year.value;
	var dept=document.myform.dept.value;
	var yr=year.slice(-2);
	var PRNgenerator=year.slice(-2);

	if (dept=='Chemical') {
		PRNgenerator=PRNgenerator+"CH";
		var total1=total(0,yr);
	}

	else if (dept=='Civil') {
		PRNgenerator=PRNgenerator+"CV";
		var total1=total(1,yr);
	}

	else if (dept=='Computer Science') {
		PRNgenerator=PRNgenerator+"CS";
		var total1=total(2,yr);
	}

	else if (dept=='Electronics') {
		PRNgenerator=PRNgenerator+"EX";
		var total1=total(3,yr);
	}

	else if (dept=='Information Technology') {
		PRNgenerator=PRNgenerator+"IT";
		var total1=total(4,yr);
	}

	else{
		PRNgenerator=PRNgenerator+"ME";
		var total1=total(5,yr);
	}
	
	var str=batch(parseInt(total1));
	PRNgenerator=PRNgenerator+str;
	var str2=sequence(parseInt(total1));
	PRNgenerator=PRNgenerator+str2;
	document.getElementById("prn").innerHTML="Your PRN is : "+PRNgenerator;
	return false;
}

