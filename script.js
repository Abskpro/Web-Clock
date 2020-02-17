var hours;
var mins;
var secs;
var day;

function clock(){
    var fullDate = new Date();
    hours = fullDate.getHours();
    mins = fullDate.getMinutes();
    secs = fullDate.getSeconds();
    day = hours>12 ? 'AM' :'PM';

    if(hours<10){
        hours="0"+hours;
    }
    if(minutes<10){
        mins="0" + mins;
    }
    if(seconds<10){
        secs="0" +secs;
    }
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minutes').innerHTML = ":"+mins;
    document.getElementById('seconds').innerHTML = ":"+secs;

    day = hours<12 ? 'AM' :'PM';
    document.getElementById('ampm').innerHTML=day;
    //passtoalarm(hours,mins,day);

}
setInterval(clock,1000);

//////////////////////////////////////////////////////////
    // tab settins
/////////////////////////////////////////////////////////
var tabButtons=document.querySelectorAll(".tab .buttonContainer button");
var tabPanels=document.querySelectorAll(".tab .tabPanel");

function showPanel(panelIndex){
    tabButtons.forEach(function(node){
        node.getElementsByClassName.backgroundColor="";
        node.style.color="";
    });
    // tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="red";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    // tabPanels[panelIndex].style.backgroundColor=colorCode;
    }
showPanel(1);
/////////////////////////////////////////////////////////
    // ALarm settings
////////////////////////////////////////////////////////

    var audio=new Audio('alarmbeeps.mp3');
    document.querySelector("#todo").addEventListener('click',alarm);
        function alarm(){
        addtodo();
        console.log("add is clicked");
        var newhr=parseInt(document.getElementById("add_hour").value);
        var newmin=parseInt(document.getElementById("add_minute").value);
        var val=document.getElementById("daynight").value;
        console.log(hours,mins,secs,day,newhr,newmin,val);

            var check = setInterval(() => {
                console.log("heee");
                if(hours == newhr && mins == newmin && day == val){
                    buzz();
                    clearInterval(check);
                }
            },2000);
            function buzz(){
                audio.play();
                var baz =  window.alert("wake up");
                audio.pause();
            }


        };
    // add label
    document.querySelector("#todo").addEventListener('click',addtodo);

    function addtodo(){
        var item = document.getElementById("input").value;
        var ul = document.getElementById("list");
        var li =document.createElement("li");
        li.appendChild(document.createTextNode("- "+item));
        ul.appendChild(li);
        document.getElementById("input").value = "";
       // li.onclick = removeItem;
    }





/////////////////////////////////////////////////////////////////////////////
//                          STOPWATCH.EXE
/////////////////////////////////////////////////////////////////////////////

document.querySelector(".watch").addEventListener('click',watch);
function watch(){
                    debugger;
                    var gethour=parseInt(document.getElementById("add_hr").value);
                    var getmin=parseInt(document.getElementById("add_min").value);
                    var getsec=parseInt(document.getElementById("add_sec").value);
                    var startTimer=setInterval(timerset,1000);
                    var startChecking=setInterval(checkvalue,1000);
                    var rooster=new Audio('alarmbeeps.mp3');
                    var reset=document.querySelector(".reset").addEventListener('click',resetAlarm);
    function timerset(){

                            if(getsec>0){
                                var temp1=getsec-1;
                                getsec=temp1;
                                document.getElementById("sec").innerHTML=temp1;
                                document.getElementById("hr").innerHTML=gethour+":";
                                document.getElementById("min").innerHTML=getmin+":";
                            }
                            else if(getsec == 0){
                                while(getmin !=0){
                                var temp2=getmin-1;
                                getmin=temp2;
                                getsec=59;
                                document.getElementById("sec").innerHTML=getsec;
                                document.getElementById("hr").innerHTML=gethour+":";
                                document.getElementById("min").innerHTML=temp2+":";
                                }
                            }
                            else if(getmin == 0){
                                while(gethour != 0){
                                var temp3=gethour-1;
                                getmin=temp3;
                                document.getElementById("hr").innerHTML=temp3+":";
                                document.getElementById("min").innerHTML=getmin+":";
                                document.getElementById("sec").innerHTML=getsec;
                                }
                            }
                            console.log("i am running too");
                    }

    function checkvalue(){
                        if(getmin == "0" && gethour == "0" && getsec == "0"){

                            clearInterval(startTimer);
                            clearInterval(startChecking);
                            playsound();
                            clearInterval(stopwatch_interval);
                        }
                    }
                   var stopwatch_interval = setInterval(checkvalue,1000);

    function resetAlarm(){
        clearInterval(startTimer);
        document.getElementById("hr").innerHTML=0+":";
        document.getElementById("min").innerHTML=0+":";
        document.getElementById("sec").innerHTML=0;
    }

    function playsound(){
                rooster.play();
                var bam = window.alert("time up");
                rooster.pause();
    }

}
