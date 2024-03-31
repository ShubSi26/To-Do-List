
function f(){
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let d = new Date();
    document.getElementById("dat").innerHTML ="<span>"+ month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear()+"</span>";
    let a = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second:'2-digit', hour12: true });
    document.getElementById("tme").innerHTML = "<span>" + a + "</span>";
}
setInterval(f,0);
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
  }
function h(){
    document.getElementById("frm").reset();
    document.getElementById("dbx").style.visibility = "visible";
    document.getElementById("dbx").style.opacity = "1";
}
function g(){
    document.getElementById("dbx").style.visibility = "hidden";
    document.getElementById("dbx").style.opacity = "0";
}
function formf(){
  document.getElementById("dbx").style.visibility = "hidden";
  document.getElementById("dbx").style.opacity = "0";
  let fv = document.forms['f1']['tsk'].value;
  let t = document.forms['f1']['tme'].value;  
  let b = `<div class="row" id = "nt">
                  <div class="col" id = "tt"><span>${t} | ${fv}</span></div> 
                  <div class="col text-end " >
                    <button type="button" class="edt btn btn-info" >Edit</button>
                    <button type="button" class="delt btn btn-success">Delete</button>
                    <button type="button" class="mkd btn btn-success">Mark Done</button>
                  </div>
            </div>`
  document.getElementById("task").innerHTML+=b;
  return false;
}
//jquery
$(document).ready(function(){
  $(document).click(function(event){
    if($(event.target).attr('class') === "delt btn btn-success"){
      event.target.parentNode.parentNode.remove();
    }else if($(event.target).attr('class') === "mkd btn btn-success"){
      $(event.target.parentNode.parentNode).css("background-color", "lime");
      event.target.innerHTML= "&#10004";
    }else if($(event.target).attr('class') === "edt btn btn-info"){
      //alert(event.target.parentNode.previousElementSibling.firstChild.tagName);
      if(event.target.parentNode.previousElementSibling.firstChild.tagName === "SPAN"){
      let aa = event.target.parentNode.previousElementSibling.firstChild.innerHTML;
      let d = `<form name = "f2">
                 <textarea  id = "updt" name = "uu">${aa}</textarea>
              </form>`
              event.target.parentNode.previousElementSibling.innerHTML = d;
              event.target.innerHTML = "Done";
      }else{
        let v = document.forms['f2']['uu'].value;
        let uv = `<span>${v} </span>`;
        event.target.parentNode.previousElementSibling.innerHTML = uv;
        event.target.innerHTML = "Edit";
      }
    }
  });
});