function makeid(l) {
	var res="";
	var char_str="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
	for(let i=0;i<l;i++){
		res+=char_str.charAt(
			Math.floor(
				Math.random()* char_str.length
			)
				
			)
		}return res;
	}
  // write your code here
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
