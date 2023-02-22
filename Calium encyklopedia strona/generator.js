

function statsroll(){
    var i=1;
    pepega();
    function pepega(){
        var base=document.getElementById("base"+i);
        var mod=document.getElementById("mod"+i);
        var d1=document.getElementById("d1");
        var d2=document.getElementById("d2");
        var d3=document.getElementById("d3");
        var d4=document.getElementById("d4");
        var statname=document.getElementById("stat"+i).innerHTML;
        document.getElementById("nazwast").innerText=statname;
        setTimeout(()=>{
            d1.innerText= Math.floor(Math.random() * (6 - 1 + 1) + 1);
        },100);
        setTimeout(()=>{
            d2.innerText= Math.floor(Math.random() * (6 - 1 + 1) + 1);
        },200);
        setTimeout(()=>{
            d3.innerText= Math.floor(Math.random() * (6 - 1 + 1) + 1);
        },300);
        setTimeout(()=>{
            d4.innerText= Math.floor(Math.random() * (6 - 1 + 1) + 1);
        },400);
        setTimeout(() => {
            var r1=parseInt(document.getElementById("d1").innerText);
            var r2=parseInt(document.getElementById("d2").innerText);
            var r3=parseInt(document.getElementById("d3").innerText);
            var r4=parseInt(document.getElementById("d4").innerText);
            var baza=parseInt(document.getElementById("base"+i).innerText);
            if (r1<=r2 && r1<=r3 && r1<=r4) {
                d1.style.color="red";
                var suma=r2+r3+r4+baza;
                console.log(suma);
            } else if (r2<=r1 && r2<=r3 && r2<=r4) {
                d2.style.color="red";
                var suma=r1+r3+r4+baza;
                console.log(suma);
            } else if (r3<=r1 && r3<=r2 && r3<=r4) {
                d3.style.color="red";
                var suma=r1+r2+r4+baza;
                console.log(suma);
            } else{
                d4.style.color="red";
                var suma=r1+r2+r3+baza;
                console.log(suma);
            }
            base.innerText=suma;
            if (suma==3) {
                mod.innerText="-4";
            } else if (suma<=5) {
                mod.innerText="-3";
            } else if (suma<=7) {
                mod.innerText="-2";
            } else if (suma<=9) {
                mod.innerText="-1";
            } else if (suma<=11) {
                mod.innerText="+0";
            } else if (suma<=13) {
                mod.innerText="+1";
            } else if (suma<=15) {
                mod.innerText="+2";
            } else if (suma<=17) {
                mod.innerText="+3";
            } else if (suma<=19) {
                mod.innerText="+4";
            } else if (suma<=21) {
                mod.innerText="+5";
            } else if (suma<=23) {
                mod.innerText="+6";
            } else if (suma<=25) {
                mod.innerText="+7";
            } else if (suma<=27) {
                mod.innerText="+8";
            } else if (suma<=29) {
                mod.innerText="+9";
            } else {
                mod.innerText="+10";
            }
        }, 800);
        setTimeout(function () {
            d1.style.color="rgb(233, 175, 127)"
            d2.style.color="rgb(233, 175, 127)"
            d3.style.color="rgb(233, 175, 127)"
            d4.style.color="rgb(233, 175, 127)"
            if(i<=5){
                console.log(i);
                i++;
                pepega()
                
            }
        }, 2000);
    }
}
const rasy=[
    {
        "stat1":0,
        "stat2":0,
        "stat3":0,
        "stat4":0,
        "stat5":0,
        "stat6":0
    },
    {
        "stat1":0,
        "stat2":2,
        "stat3":0,
        "stat4":0,
        "stat5":1,
        "stat6":0
    },
    {
        "stat1":0,
        "stat2":0,
        "stat3":0,
        "stat4":0,
        "stat5":0,
        "stat6":0
    },
    {
        "stat1":0,
        "stat2":0,
        "stat3":0,
        "stat4":0,
        "stat5":0,
        "stat6":0
    },
    {
        "stat1":0,
        "stat2":0,
        "stat3":0,
        "stat4":0,
        "stat5":0,
        "stat6":0
    }
]

function rasaupdate(){
    var a=1;
    var wybrane=document.getElementById("rasa").value;
    wejscie();
    function wejscie(){
        var przy="stat"+a;
        var baza=parseInt(document.getElementById("base"+a).innerHTML);
        console.log(przy);

        document.getElementById("base"+a).innerText=abimp;
        if(a<6){
            a++;
            wejscie();
        }
    }
}