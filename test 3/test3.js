function countWords(){
	s = document.getElementById("inputString").value;
	s = s.replace(/(^\s*)|(\s*$)/gi,"");
	s = s.replace(/[ ]{2,}/gi," ");
	s = s.replace(/\n /,"\n");
	document.getElementById("wordcount").value = s.split(' ').length;
}