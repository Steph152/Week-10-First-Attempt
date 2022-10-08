let id = 0;


document.getElementById('submit').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('denomination').value;
    row.insertCell(1).innerHTML = document.getElementById('serialNumber').value;
    row.insertCell(2).innerHTML = document.getElementById('location').value;
  //  document.getElementById('new-bill').value='';
});

/*
https://www.javatpoint.com/how-to-check-a-radio-button-using-javascript

if(document.getElementById('summer').checked == true) {   
         document.write("Summer radio button is selected");   
} else {  
         document.write("Summer radio button is not selected");   
         
}


My JS
  if(document.getElementById('$1dollarbill').checked == true) {   
        row.insertCell(0).innerHTML = '$2 Dollar Bill;
    }
    if(document.getElementById('$1dollarbill').checked == true) {   
        row.insertCell(0).innerHTML = "$2 Dollar Bill";
    }

*/