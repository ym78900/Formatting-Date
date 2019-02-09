const hey = function formatDate(dateinput) {
 const dateInput = document.getElementById("date-input");
 const date = dateInput.value; 
  const year = date.substr(0, 4);
  const month = date.substr(5, 2);
  const day = date.substr(8, 2);
  const newDate = day + "." + month + "." + year;
document.getElementById("demo").innerHTML = newDate; 
}
