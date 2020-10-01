

var countClick = 0;
function count(){
	countClick ++;
	document.getElementById("displayCount").innerHTML = countClick; 
//Amount of times any of the variables have beenn clicked
}

var countPaper = 0;
var countScissors = 0;
var countRock = 0;
// if I put =0+1 then I could rig any variable I want 
var user = "";  
function play(){ 



if (document.getElementById('paper').checked){
	document.getElementById("display").innerHTML = "Paper";
			user = "Paper";} 
		//making sure that when something is chosen it pops up as the variable name.
else if (document.getElementById('Rock').checked){
	document.getElementById("display").innerHTML = "Rock";
	user = "Rock";}
else if(document.getElementById('Scissors').checked){
	document.getElementById("display").innerHTML = "Scissors";
	user = "Scissors"; }
else { window.alert("Choose Something or Fail ");}
		// making sure player is choosing something just incase he didnt to avoid an undefined term.
		


	var option = ["Paper","Rock","Scissors"];
	var random = option[Math.floor(Math.random()*3)];
	// *3 is the amount of variables we have paper rock or scissors and chooes to display random 
	document.getElementById('computerChoose').innerHTML = random; 
	document.getElementById('computerChoose2').innerHTML = random;  

	
	if (random === "Paper"){
		countPaper++;
		document.getElementById('countPaper').innerHTML = countPaper;}
	else if (random === "Rock"){
		countRock++; 
		document.getElementById('countRock').innerHTML = countRock;} 
	else {
		countScissors++; 
		document.getElementById('countScissors').innerHTML = countScissors;}
		// if countScissors are not the same as = countScissors then history wont be shown for the countXXXXX

 return random;
/*document.getElementById('resultDisplay').innerHTML = compare (user,random);
	document.getElementById('resultDisplay2').innerHTML = compare (user,random);
return random;

*/
}
function go(){
	play();
	count(); 

}
// having a hard time trying to make show up 
// probably mistake I didnt catch

// not displaying becuase I dont have resultdisplay 
//Update Figured out how to show display placed it before function go()

/*document.getElementById('resultDisplay').innerHTML = compare (user,random);
	document.getElementById('resultDisplay2').innerHTML = compare (user,random);

	return random; */

function compare(yourInput,computerGen){
	
	if (yourInput === computerGen){
		return ("It's a tie!");	
	}

	
	if (yourInput === "Paper"){
		if (computerGen === "Scissors"){
			return ("You lose!");
		}
		else {
			return ("You win!");	
		}
	}

	if (yourInput === "Scissors"){
		if (computerGen === "Rock"){
			return ("You lose!");
		}
		else {
			return ("You win!");
		}
	}
	
	if (yourInput === "Rock"){
		if (computerGen === "Paper"){
			return ("You lose!");
		}
		else {
			return ("You win!");
		}
	}
}
