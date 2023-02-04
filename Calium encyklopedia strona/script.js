//przywoływanie wszystkich variouble by nie przywoływać ich za każdym razem i ułatwić trochę kod pod względem wizualno procesowym
var a=0






//Funkcja otwierająca i zamykająca okienko z krótkim opisem dla użytkowników desktopowych w pozycji myszy
function pozycja(event){

    document.getElementById("box").style.marginLeft=event.clientX+11+"px";
    document.getElementById("box").style.marginTop=event.clientY+11+"px";
    document.getElementById("box").style.scale="100%";
    document.getElementById("tytulbox").style.opacity="100%";
    document.getElementById("krotkiopis").style.opacity="100%";
}
function zamknij(){
    document.getElementById("tytulbox").style.opacity="0%";
    document.getElementById("krotkiopis").style.opacity="0%";
    document.getElementById("box").style.scale="0%";
}

//Funkcje odpowiedzialne za krótkie opisy wyświetlane w okienku dla użytkowników desktopowych
function blyszczace_zeby(){
    document.getElementById("tytulbox").textContent="Błyszczące Zęby";
    document.getElementById("krotkiopis").textContent="Pierwszy kraj Dragonbornów zbudowany z 12 plemion które zjednoczyły się pod wspólnym celem ochrony swej ziemi.";
    a=1;
}
function icelar(){
    document.getElementById("tytulbox").textContent="Icelar";
    document.getElementById("krotkiopis").textContent="Jeden z wielu ciągle zmieniających się bitewnych krajów którego ziemia splamiona jest krwią i potem tych którzy w nim żyją.";
    a=2;
}
function wielki_oboz_zora(){
    document.getElementById("tytulbox").textContent="Wielki Obóz Zora";
    document.getElementById("krotkiopis").textContent="";
    a=3;
}
function nord(){
    document.getElementById("tytulbox").textContent="Nord";
    document.getElementById("krotkiopis").textContent="";
    a=4;
}
function krolestwo_zlamanych_mieczy(){
    document.getElementById("tytulbox").textContent="Królestwo Złamanych Mieczy";
    document.getElementById("krotkiopis").textContent="";
    a=5;
}
function dynastia_wzbudzonych_wod(){
    document.getElementById("tytulbox").textContent="Dynastia Wzbudzonych Wód";
    document.getElementById("krotkiopis").textContent="";
    a=6;
}
function alpii(){
    document.getElementById("tytulbox").textContent="Alpii";
    document.getElementById("krotkiopis").textContent="";
    a=7;
}
function zjednoczone_bractwo(){
    document.getElementById("tytulbox").textContent="Zjednoczone Bractwo";
    document.getElementById("krotkiopis").textContent="";
    a=8;
}
function antlant(){
    document.getElementById("tytulbox").textContent="Antlant";
    document.getElementById("krotkiopis").textContent="";
    a=9;
}
function zjednoczone_plemiona_kationy(){
    document.getElementById("tytulbox").textContent="Zjednoczone Plemiona Kationy";
    document.getElementById("krotkiopis").textContent="";
    a=10;
}
function palatinos(){
    document.getElementById("tytulbox").textContent="Palatinos";
    document.getElementById("krotkiopis").textContent="";
    a=11;
}
function sha_khan(){
    document.getElementById("tytulbox").textContent="Sha-Khan";
    document.getElementById("krotkiopis").textContent="";
    a=12;
}
function tuenie(){
    document.getElementById("tytulbox").textContent="Tuenie";
    document.getElementById("krotkiopis").textContent="";
    a=2;
}
function insel(){
    document.getElementById("tytulbox").textContent="Insel";
    document.getElementById("krotkiopis").textContent="";
    a=13;
}
function du_meka(){
    document.getElementById("tytulbox").textContent="Du-Meka";
    document.getElementById("krotkiopis").textContent="";
    a=14;
}
function shashir(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=15;
}
function stoliv(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=16;
}
function arkorm(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=17;
}
function krolestwo_daronii(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=18;
}
function imperium_zielonych_lisci(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=19;
}
function cytadele_nodskie(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=20;
}
function solaria(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=21;
}
function eridia(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=22;
}
function juva(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=23;
}
function courtmay_czarnych_lasow(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=24;
}
function imperium_zlotego_drzewa(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=25;
}
function brontarnia(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=26;
}
function seksonia(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=27;
}
function beltonia(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=28;
}
function wyspy_exide(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=29;
}
function krolestwo_wiecznego_sniegu(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=30;
}
function leuchberg(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=31;
}
function ceutturnia(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=32;
}
function dozmor(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=33;
}
function landon(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=34;
}
function zitarg(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=35;
}
function wielkie_krolestwo_highlan(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=36;
}
function zjednoczone_ksiestwa_syrbound(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=37;
}
function tuleska(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=38;
}
function boron(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=39;
}
function krolestwo_troter(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=40;
}
function krolestwo_menkton(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=41;
}
function wieczne_krolestwo_somalskie(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=42;
}
function chaos_isles(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=43;
}
function the_ice_land(){
    document.getElementById("tytulbox").textContent="Shashir";
    document.getElementById("krotkiopis").textContent="";
    a=44;
}


function przejscie(){
    document.getElementById("tytul").style.opacity="0%";
    document.getElementById("pelnyopis").style.opacity="0%";
    //document.getElementsByClassName("populacja").style.opacity="50%";
    setTimeout(()=>{
        if(a=1){
            document.getElementById("tytul").textContent="Błyszczące Zęby";
            document.getElementById("pelnyopis").textContent="Pierwszy kraj Dragonbornów zbudowany z 12 plemion które zjednoczyły się pod wspólnym celem ochrony swej ziemi.";
            document.getElementById("dragonborn").style.opacity="100%";
        }else if(a=2){
            document.getElementById("tytul").textContent="Icelar";
            document.getElementById("pelnyopis").textContent="Jeden z wielu ciągle zmieniających się bitewnych krajów którego ziemia splamiona jest krwią i potem tych którzy w nim żyją.";
        }
        document.getElementById("tytul").style.opacity="100%";
        document.getElementById("pelnyopis").style.opacity="100%";
        //document.getElementsByClassName("populacja").style.display="inline";
    }
    ,700)
}