var s=0;
var min=0;
var h=0;
var d=new Date();
setInterval(function()
{  d=new Date();
    s=d.getSeconds()*6;
    min=d.getMinutes()*6;
    h=d.getHours()*30 + Math.round(min/12);
    document.getElementById("second-hand").style.transform="rotate("+s+"deg)";
    document.getElementById("minute-hand").style.transform="rotate("+min+"deg)";
    document.getElementById("hour-hand").style.transform="rotate("+h+"deg)";
}, 1000);

