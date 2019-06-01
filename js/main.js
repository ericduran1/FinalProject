function getTip(){
  var amount = document.getElementById('amount').value;
  var service = document.getElementById('service').value;
  var people = document.getElementById('people').value;

  if(amount === "" || service === 0){
    alert("Ooops! Enter the correct information.");
    return;
  }

  if(people === ""||people === 1){
    people = 1;
    document.getElementById('each').style.display ='none';
  } else {
    document.getElementById('each').style.display = 'block';
  }


  //math to the calculator

  var total = (amount * service)/people;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  document.getElementById('totalTip').style.display = 'block';
  document.getElementById('tip').innerHTML = total;
}

//Hide the Amount of tip everyone is paying. so without this the tip amount would should 0 and with this it doesnt show until clicked on.
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function from top to bottom
document.getElementById("calculateTip").onclick = function() {
  getTip();

};
