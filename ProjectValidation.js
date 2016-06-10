/**
 * Created by anindcha on 6/9/2016.
 */
var persons;
function sendRequest(){
    var XHR = getXHR()
    if(XHR){
        XHR.open("GET","data1.json",true);
        XHR.onreadystatechange = function(){handleResponse(XHR);}
        XHR.send();
    }
  
}
function getXHR(){
    return new XMLHttpRequest();
}
function handleResponse(XHR){
    if(XHR.readyState==4){
        //console.log("data received... ",XHR.responseText);
        var table = document.getElementById('value');
        persons = JSON.parse(XHR.responseText);
        //console.log(persons);
        for(var i=0;i<persons.length;i++){
            var row =table.insertRow(i);
            var cell1 = row.insertCell(0);
            cell1.innerHTML="<button type='button' class='btn btn-link' style='color: #e6e6e6' onclick='showInfo(this)' id='"+i+"'>"+persons[i].firstname+","+persons[i].lastname+"</button>";

        }

    }
}
function showInfo(bttn){
    var firstname=document.getElementById('firstname');
    firstname.value=persons[bttn.id].firstname;
    var lastname=document.getElementById('lastname');
    lastname.value=persons[bttn.id].lastname;
    var state=document.getElementById('state');
    state.value=persons[bttn.id].state;
    var city=document.getElementById('city');
    city.value=persons[bttn.id].city;
}