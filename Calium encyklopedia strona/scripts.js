const kraje=[
    {
        "nazwa":"",
        "krotkiopis":"",
        "długiopis":"",
        "arakora":0,
        "człowiek":0,
        "dragonborn":0,
        "elf":0,
        "elfork":0,
        "filborg":0,
        "foreclaimer":0,
        "gnom":0,
        "goblin":0,
        "goliat":0,
        "krasnolud":0,
        "lizardfolk":0,
        "mousefolk":0,
        "niziołek":0,
        "ork":0,
        "półelf":0,
        "półork":0,
        "tabaxi":0,
        "tiefling":0,
        "aike":0,
        "allikas":0,
        "auril":0,
        "clismo":0,
        "darrari":0,
        "daukar":0,
        "dokutsu":0,
        "dionizos":0,
        "ehiza":0,
        "furtivoheli":0,
        "iladiad":0,
        "kakuz":0,
        "khorne":0,
        "kodu":0,
        "kranken":0,
        "lanaw":0,
        "leegid":0,
        "logos":0,
        "mejika":0,
        "meridia":0,
        "minez":0,
        "morker":0,
        "murna":0,
        "nevfasi":0,
        "nekaza":0,
        "opus":0,
        "perte":0,
        "rakkaus":0,
        "sainban":0,
        "sains":0,
        "sapa":0,
        "shi":0,
        "skryf":0,
        "smee":0,
        "soneri":0,
        "suba":0,
        "syva":0,
        "thorbinus":0,
        "titok":0,
        "torineti":0,
        "torm":0,
        "troskab":0,
        "tuul":0,
        "varenos":0,
        "varvidia":0,
        "vesi":0,
        "zortea":0,
        "organizacje":"",
        "ciekawostki":""
    },
    {
        "nazwa":"Błyszczące Zęby",
        "krotkiopis":"Pierwszy kraj Dragonbornów zbudowany z 12 plemion które zjednoczyły się pod wspólnym celem ochrony swej ziemi.",
        "długiopis":"Kraj dragonbornów zrodzony z 12 plemion które zawarły sojusz w obliczu zagrożenia którego żadne pojedyńczo walczące plemie by nie przetrwało. Teraz trzymające się swych wręcz starożytnich tradycji żyją w umiarkowanej zgodzie pomiędzy sobą, oczywiście niektóre plemiona mają swoje zabobony co do innych plemion lecz nie wychodzą one poza obszar delikatnej xenofobi która znika po czasie jeżeli tylko pozna się dragonborny z innych plemion.<br> Największa kumulacja oraz miesznine tradycji można spotkać w Stolicy Błyszczących Zębów 'Dilay' położonym na najwyższym szczycie. W owym mieście można spotkać budynki któe są nietypowym zjawiskiem w tym kraju ponieważ większość plemion woli korzystać z namiotów które swym rozmiarem zaczynają się od zwykłych podróżniczych namiotów po gigantyczne namioty w których zmieściłaby się setka osób.",
        "arakora":0,
        "człowiek":2,
        "dragonborn":2,
        "elf":0,
        "elfork":0,
        "filborg":0,
        "foreclaimer":0,
        "gnom":0,
        "goblin":0,
        "goliat":13,
        "krasnolud":0,
        "lizardfolk":0,
        "mousefolk":0,
        "niziołek":0,
        "ork":1,
        "półelf":0,
        "półork":2,
        "tabaxi":0,
        "tiefling":0,
        "aike":0,
        "allikas":0,
        "auril":14,
        "clismo":0,
        "darrari":0,
        "daukar":0,
        "dokutsu":0,
        "dionizos":0,
        "ehiza":2,
        "furtivoheli":0,
        "iladiad":0,
        "kakuz":0,
        "khorne":2,
        "kodu":0,
        "kranken":0,
        "lanaw":0,
        "leegid":0,
        "logos":0,
        "mejika":0,
        "meridia":0,
        "minez":0,
        "morker":0,
        "murna":0,
        "nevfasi":0,
        "nekaza":0,
        "opus":0,
        "perte":0,
        "rakkaus":0,
        "sainban":0,
        "sains":0,
        "sapa":0,
        "shi":0,
        "skryf":0,
        "smee":0,
        "soneri":0,
        "suba":0,
        "syva":2,
        "thorbinus":0,
        "titok":0,
        "torineti":0,
        "torm":0,
        "troskab":0,
        "tuul":0,
        "varenos":0,
        "varvidia":0,
        "vesi":0,
        "zortea":0,
        "organizacje":"Karciarz<br>Marciarz<br>Koluniarze<br>Berbecie<br> pedały",
        "ciekawostki":"W stolicy znajduję się kolegium magii które dla swych smoczo urodzonych uczniów pozwala zgłębiać dodatkowe tajniki magii oraz jak można je połączyć ze swym wrodzonym elementem.<br>Co każdy księżyć w samą pełnie gromadzą się dowódcy wszystkich plemion by przedyskutować sytuacje polityczną oraz dowiedzieć się o potrzebach reszty plemion.<br>"
    },
]
//Funkcja otwierająca i zamykająca okienko z krótkim opisem dla użytkowników desktopowych w pozycji myszy
function pozycja(event,numer){
    var box=document.getElementById("box");
    var tytul=document.getElementById("tytulbox");
    var opis=document.getElementById("krotkiopis");

    box.style.marginLeft=event.clientX+20+"px";
    box.style.marginTop=event.clientY+20+"px";
    box.style.scale="100%";
    tytul.style.opacity="100%";
    opis.style.opacity="100%";
    tytul.textContent=kraje[numer].nazwa;
    opis.textContent=kraje[numer].krotkiopis;
}
function zamknij(){
    document.getElementById("tytulbox").style.opacity="0%";
    document.getElementById("krotkiopis").style.opacity="0%";
    document.getElementById("box").style.scale="0%";
}

//Funkcje odpowiedzialne za krótkie opisy wyświetlane w okienku dla użytkowników desktopowych

function przejscie(numer){
    document.getElementById("kontener-tekstu").scrollIntoView({behavior:"smooth"});
    //RASY
    var arakora=document.getElementById("arakora");
    var czlowiek=document.getElementById("czlowiek");
    var dragonborn=document.getElementById("dragonborn");
    var elf=document.getElementById("elf");
    var elfork=document.getElementById("elf-ork");
    var filborg=document.getElementById("filborg");
    var foreclaimer=document.getElementById("foreclaimer");
    var gnom=document.getElementById("gnom");
    var goblin=document.getElementById("goblin");
    var goliat=document.getElementById("goliat");
    var krasnolud=document.getElementById("krasnolud");
    var lizardfolk=document.getElementById("lizardfolk");
    var mousefolk=document.getElementById("mousefolk");
    var niziolek=document.getElementById("niziolek");
    var ork=document.getElementById("ork");
    var polelf=document.getElementById("pol-elf");
    var polork=document.getElementById("pol-orc");
    var tabaxi=document.getElementById("tabaxi");
    var tiefling=document.getElementById("tiefling");

    //RELIGIE
    var aike=document.getElementById("aike");
    var allikas=document.getElementById("allikas");
    var auril=document.getElementById("auril");
    var clismo=document.getElementById("clismo");
    var darrari=document.getElementById("darrari");
    var daukar=document.getElementById("daukar");
    var dokutsu=document.getElementById("dokutsu");
    var dionizos=document.getElementById("dionizos");
    var ehiza=document.getElementById("ehiza");
    var furtivo=document.getElementById("furtivo");
    var heli=document.getElementById("heli");
    var iladiad=document.getElementById("iladiad");
    var kakuz=document.getElementById("kakuz");
    var khorne=document.getElementById("khorne");
    var kodu=document.getElementById("kodu");
    var kranken=document.getElementById("kranken");
    var lanaw=document.getElementById("lanaw");
    var leegid=document.getElementById("leegid");
    var logos=document.getElementById("logos");
    var mejika=document.getElementById("mejika");
    var meridia=document.getElementById("meridia");
    var minez=document.getElementById("minez");
    var morker=document.getElementById("morker");
    var murna=document.getElementById("murna");
    var nevfasi=document.getElementById("nevfasi");
    var nekaza=document.getElementById("nekaza");
    var opus=document.getElementById("opus");
    var perte=document.getElementById("perte");
    var rakkaus=document.getElementById("rakkaus");
    var sainban=document.getElementById("sainban");
    var sains=document.getElementById("sains");
    var sapa=document.getElementById("sapa");
    var shi=document.getElementById("shi");
    var skryf=document.getElementById("skryf");
    var smee=document.getElementById("smee");
    var soneri=document.getElementById("soneri");
    var suba=document.getElementById("suba");
    var syva=document.getElementById("syva");
    var thorbinus=document.getElementById("thorbinus");
    var titok=document.getElementById("titok");
    var torineti=document.getElementById("torineti");
    var torm=document.getElementById("torm");
    var troskab=document.getElementById("troskab");
    var tuul=document.getElementById("tuul");
    var varenos=document.getElementById("varenos");
    var varvidia=document.getElementById("varvidia");
    var vesi=document.getElementById("vesi");
    var zortea=document.getElementById("zortea");


    var tytul=document.getElementById("tytul");
    var opis=document.getElementById("pelnyopis");
    var ciekawostki=document.getElementById("ciekawostki");
    var organizacje=document.getElementById("organizacje");

    arakora.style.opacity="0%";
    arakora.style.display="none";
    czlowiek.style.opacity="0%";
    czlowiek.style.display="none";
    dragonborn.style.opacity="0%";
    dragonborn.style.display="none";
    elf.style.opacity="0%";
    elf.style.display="none";
    elfork.style.opacity="0%";
    elfork.style.display="none";
    filborg.style.opacity="0%";
    filborg.style.display="none";
    foreclaimer.style.opacity="0%";
    foreclaimer.style.display="none";
    gnom.style.opacity="0%";
    gnom.style.display="none";
    goblin.style.opacity="0%";
    goblin.style.display="none";
    goliat.style.opacity="0%";
    goliat.style.display="none";
    krasnolud.style.opacity="0%";
    krasnolud.style.display="none";
    lizardfolk.style.opacity="0%";
    lizardfolk.style.display="none";
    mousefolk.style.opacity="0%";
    mousefolk.style.display="none";
    niziolek.style.opacity="0%";
    niziolek.style.display="none";
    ork.style.opacity="0%";
    ork.style.display="none";
    polelf.style.opacity="0%";
    polelf.style.display="none";
    tabaxi.style.opacity="0%";
    tabaxi.style.display="none";
    tiefling.style.opacity="0%";
    tiefling .style.display="none";
    tytul.style.opacity="0%";
    opis.style.opacity="0%";
    polork.style.opacity="0%"
    polork.style.display="none";

    aike.style.opacity="0%";
    allikas.style.opacity="0%";
    auril.style.opacity="0%";
    clismo.style.opacity="0%";
    darrari.style.opacity="0%";
    daukar.style.opacity="0%";
    dokutsu.style.opacity="0%";
    dionizos.style.opacity="0%";
    ehiza.style.opacity="0%";
    furtivo.style.opacity="0%";
    heli.style.opacity="0%";
    iladiad.style.opacity="0%";
    kakuz.style.opacity="0%";
    khorne.style.opacity="0%";
    kodu.style.opacity="0%";
    kranken.style.opacity="0%";
    lanaw.style.opacity="0%";
    leegid.style.opacity="0%";
    logos.style.opacity="0%";
    mejika.style.opacity="0%";
    meridia.style.opacity="0%";
    minez.style.opacity="0%";
    morker.style.opacity="0%";
    murna.style.opacity="0%";
    nevfasi.style.opacity="0%";
    nekaza.style.opacity="0%";
    opus.style.opacity="0%";
    perte.style.opacity="0%";
    rakkaus.style.opacity="0%";
    sainban.style.opacity="0%";
    sains.style.opacity="0%";
    sapa.style.opacity="0%";
    shi.style.opacity="0%";
    skryf.style.opacity="0%";
    smee.style.opacity="0%";
    soneri.style.opacity="0%";
    suba.style.opacity="0%";
    syva.style.opacity="0%";
    thorbinus.style.opacity="0%";
    titok.style.opacity="0%";
    torineti.style.opacity="0%";
    torm.style.opacity="0%";
    troskab.style.opacity="0%";
    tuul.style.opacity="0%";
    varenos.style.opacity="0%";
    varvidia.style.opacity="0%";
    vesi.style.opacity="0%";
    zortea.style.opacity="0%";
    aike.style.display="none";
    allikas.style.display="none";
    auril.style.display="none";
    clismo.style.display="none";
    darrari.style.display="none";
    daukar.style.display="none";
    dokutsu.style.display="none";
    dionizos.style.display="none";
    ehiza.style.display="none";
    furtivo.style.display="none";
    heli.style.display="none";
    iladiad.style.display="none";
    kakuz.style.display="none";
    khorne.style.display="none";
    kodu.style.display="none";
    kranken.style.display="none";
    lanaw.style.display="none";
    leegid.style.display="none";
    logos.style.display="none";
    mejika.style.display="none";
    meridia.style.display="none";
    minez.style.display="none";
    morker.style.display="none";
    murna.style.display="none";
    nevfasi.style.display="none";
    nekaza.style.display="none";
    opus.style.display="none";
    perte.style.display="none";
    rakkaus.style.display="none";
    sainban.style.display="none";
    sains.style.display="none";
    sapa.style.display="none";
    shi.style.display="none";
    skryf.style.display="none";
    smee.style.display="none";
    soneri.style.display="none";
    suba.style.display="none";
    syva.style.display="none";
    thorbinus.style.display="none";
    titok.style.display="none";
    torineti.style.display="none";
    torm.style.display="none";
    troskab.style.display="none";
    tuul.style.display="none";
    varenos.style.display="none";
    varvidia.style.display="none";
    vesi.style.display="none";
    zortea.style.display="none";


    
    if(kraje[numer].arakora>0){
        arakora.style.display="inline-block";
        setTimeout(()=>{
        arakora.style.opacity=kraje[numer].arakora*5+"%";
        }
        ,700)
    }
    if(kraje[numer].człowiek>0){
        czlowiek.style.display="inline-block";
        setTimeout(()=>{
            czlowiek.style.opacity=kraje[numer].człowiek*5+"%";
        }
        ,700)
    }
    if(kraje[numer].dragonborn>0){
        dragonborn.style.display="inline-block";
        setTimeout(()=>{
            dragonborn.style.opacity=kraje[numer].dragonborn*5+"%";
        }
        ,700)
    }
    if(kraje[numer].elf>0){
        elf.style.display="inline-block";
        setTimeout(()=>{
            elf.style.opacity=kraje[numer].elf*5+"%";
        }
        ,700)
    }
    if(kraje[numer].elfork){
        elfork.style.display="inline-block";
        setTimeout(()=>{
            elfork.style.opacity=kraje[numer].elfork*5+"%";
        }
        ,700)
    }
    if(kraje[numer].filborg>0){
        filborg.style.display="inline-block";
        setTimeout(()=>{
            filborg.style.opacity=kraje[numer].filborg*5+"%";
        }
        ,700)
    }
    if(kraje[numer].foreclaimer>0){
        foreclaimer.style.display="inline-block";
        setTimeout(()=>{
            foreclaimer.style.opacity=kraje[numer].foreclaimer*5+"%";
        }
        ,700)
    }
    if(kraje[numer].gnom>0){
        gnom.style.display="inline-block";
        setTimeout(()=>{
            gnom.style.opacity=kraje[numer].gnom*5+"%";
        }
        ,700)
    }
    if(kraje[numer].goblin>0){
        goblin.style.display="inline-block";
        setTimeout(()=>{
            goblin.style.opacity=kraje[numer].goblin*5+"%";
        }
        ,700)
    }
    if(kraje[numer].goliat>0){
        goliat.style.display="inline-block";
        setTimeout(()=>{
            goliat.style.opacity=kraje[numer].goliat*5+"%";
        }
        ,700)
    }
    if(kraje[numer].krasnolud>0){
        krasnolud.style.display="inline-block";
        setTimeout(()=>{
            krasnolud.style.opacity=kraje[numer].krasnolud*5+"%";
        }
        ,700)
    }
    if(kraje[numer].lizardfolk>0){
        lizardfolk.style.display="inline-block";
        setTimeout(()=>{
            lizardfolk.style.opacity=kraje[numer].lizardfolk*5+"%";
        }
        ,700)
    }
    if(kraje[numer].mousefolk>0){
        mousefolk.style.display="inline-block";
        setTimeout(()=>{
            mousefolk.style.opacity=kraje[numer].mousefolk*5+"%";
        }
        ,700)
    }
    if(kraje[numer].niziołek>0){
        niziolek.style.display="inline-block";
        setTimeout(()=>{
            niziolek.style.opacity=kraje[numer].niziołek*5+"%";
        }
        ,700)
    }
    if(kraje[numer].ork>0){
        ork.style.display="inline-block";
        setTimeout(()=>{
            ork.style.opacity=kraje[numer].ork*5+"%";
        }
        ,700)
    }
    if(kraje[numer].półelf>0){
        polelf.style.display="inline-block";
        setTimeout(()=>{
            polelf.style.opacity=kraje[numer].półelf*5+"%";
        }
        ,700)
    }
    if(kraje[numer].polork>0){
        polork.style.display="inline-block";
        setTimeout(()=>{
            polork.style.opacity=kraje[numer].półork*5+"%";
        }
        ,700)
    }
    if(kraje[numer].tabaxi>0){
        tabaxi.style.display="inline-block";
        setTimeout(()=>{
            tabaxi.style.opacity=kraje[numer].tabaxi*5+"%";
        }
        ,700)
    }
    if(kraje[numer].tiefling>0){
        tiefling.style.display="inline-block";
        setTimeout(()=>{
            tiefling.style.opacity=kraje[numer].tiefling*5+"%";
        }
        ,700)
    }



    if(kraje[numer].aike>0){
        aike.style.display="inline-block";
        setTimeout(()=>{
            aikestyle.opacity=kraje[numer].aike*5+"%";
        }
        ,700)
    }
    if(kraje[numer].aike>0){
        aike.style.display="inline-block";
        setTimeout(()=>{
            aike.style.opacity=kraje[numer].aike*5+"%";
        }
        ,700)
    }
    
    if(kraje[numer].allikas>0){
        allikas.style.display="inline-block";
        setTimeout(()=>{
            allikas.style.opacity=kraje[numer].allikas*5+"%";
        }
        ,700)
    }
    
    if(kraje[numer].auril>0){
        auril.style.display="inline-block";
        setTimeout(()=>{
            auril.style.opacity=kraje[numer].auril*5+"%";
        }
        ,700)
    }
    
    if(kraje[numer].clismo>0){
        clismo.style.display="inline-block";
        setTimeout(()=>{
            clismo.style.opacity=kraje[numer].clismo*5+"%";
        }
        ,700)
    }
    
    if(kraje[numer].darrari>0){
        darrari.style.display="inline-block";
        setTimeout(()=>{
            darrari.style.opacity=kraje[numer].darrari*5+"%";
        }
        ,700)
    }
    
    if(kraje[numer].daukar>0){
        daukar.style.display="inline-block";
        setTimeout(()=>{
            daukar.style.opacity=kraje[numer].daukar*5+"%";
        }
        ,700)
    }
    
    if(kraje[numer].dokutsu>0){
        dokutsu.style.display="inline-block";
        setTimeout(()=>{
            dokutsu.style.opacity=kraje[numer].dokutsu*5+"%";
        }
        ,700)
    }
    
    if(kraje[numer].dionizos>0){
        dionizos.style.display="inline-block";
        setTimeout(()=>{
            dionizos.style.opacity=kraje[numer].dionizos*5+"%";
        }
        ,700)
    }
    
    if(kraje[numer].ehiza>0){
        ehiza.style.display="inline-block";
        setTimeout(()=>{
            ehiza.style.opacity=kraje[numer].ehiza*5+"%";
        }
        ,700)
    }
    
    if(kraje[numer].furtivoheli>0){
        furtivoheli.style.display="inline-block";
        setTimeout(()=>{
            furtivoheli.style.opacity=kraje[numer].furtivoheli*5+"%";
        }
        ,700)
    }
    
    if(kraje[numer].iladiad>0){
        iladiad.style.display="inline-block";
        setTimeout(()=>{
            iladiad.style.opacity=kraje[numer].iladiad*5+"%";
        }
        ,700)
    }
    
    if(kraje[numer].kakuz>0){
        kakuz.style.display="inline-block";
        setTimeout(()=>{
            kakuz.style.opacity=kraje[numer].kakuz*5+"%";
        }
        ,700)
    }
    
    if(kraje[numer].khorne>0){
        khorne.style.display="inline-block";
        setTimeout(()=>{
            khorne.style.opacity=kraje[numer].khorne*5+"%";
        }
        ,700)
    }
    
    if(kraje[numer].kodu>0){
        kodu.style.display="inline-block";
        setTimeout(()=>{
            kodu.style.opacity=kraje[numer].kodu*5+"%";
        }
        ,700)
    }

    if(kraje[numer].kranken>0){
        kranken.style.display="inline-block";
        setTimeout(()=>{
            kranken.style.opacity=kraje[numer].kranken*5+"%";
        }
        ,700)
    }

if(kraje[numer].lanaw>0){
        lanaw.style.display="inline-block";
        setTimeout(()=>{
            lanaw.style.opacity=kraje[numer].lanaw*5+"%";
        }
        ,700)
    }

    if(kraje[numer].leegid>0){
            leegid.style.display="inline-block";
            setTimeout(()=>{
                leegid.style.opacity=kraje[numer].leegid*5+"%";
            }
            ,700)
        }

    if(kraje[numer].logos>0){
            logos.style.display="inline-block";
            setTimeout(()=>{
                logos.style.opacity=kraje[numer].logos*5+"%";
            }
            ,700)
        }

    if(kraje[numer].mejika>0){
            mejika.style.display="inline-block";
            setTimeout(()=>{
                mejika.style.opacity=kraje[numer].mejika*5+"%";
            }
            ,700)
        }

    if(kraje[numer].meridia>0){
            meridia.style.display="inline-block";
            setTimeout(()=>{
                meridia.style.opacity=kraje[numer].meridia*5+"%";
            }
            ,700)
        }

    if(kraje[numer].minez>0){
            minez.style.display="inline-block";
            setTimeout(()=>{
                minez.style.opacity=kraje[numer].minez*5+"%";
            }
            ,700)
        }

    if(kraje[numer].morker>0){
            morker.style.display="inline-block";
            setTimeout(()=>{
                morker.style.opacity=kraje[numer].morker*5+"%";
            }
            ,700)
        }

    if(kraje[numer].murna>0){
            murna.style.display="inline-block";
            setTimeout(()=>{
                murna.style.opacity=kraje[numer].murna*5+"%";
            }
            ,700)
        }

    if(kraje[numer].nevfasi>0){
            nevfasi.style.display="inline-block";
            setTimeout(()=>{
                nevfasi.style.opacity=kraje[numer].nevfasi*5+"%";
            }
            ,700)
        }

    if(kraje[numer].nekaza>0){
            nekaza.style.display="inline-block";
            setTimeout(()=>{
                nekaza.style.opacity=kraje[numer].nekaza*5+"%";
            }
            ,700)
        }

    if(kraje[numer].opus>0){
            opus.style.display="inline-block";
            setTimeout(()=>{
                opus.style.opacity=kraje[numer].opus*5+"%";
            }
            ,700)
        }

    if(kraje[numer].perte>0){
            perte.style.display="inline-block";
            setTimeout(()=>{
                perte.style.opacity=kraje[numer].perte*5+"%";
            }
            ,700)
        }

    if(kraje[numer].rakkaus>0){
            rakkaus.style.display="inline-block";
            setTimeout(()=>{
                rakkaus.style.opacity=kraje[numer].rakkaus*5+"%";
            }
            ,700)
        }
        if(kraje[numer].sainban > 0){
            sainban.style.display = "inline-block";
            setTimeout(() => {
                sainban.style.opacity = kraje[numer].sainban * 5 + "%";
            }, 700);
        }
        
        if(kraje[numer].sains > 0){
            sains.style.display = "inline-block";
            setTimeout(() => {
                sains.style.opacity = kraje[numer].sains * 5 + "%";
            }, 700);
        }
        
        if(kraje[numer].sapa > 0){
            sapa.style.display = "inline-block";
            setTimeout(() => {
                sapa.style.opacity = kraje[numer].sapa * 5 + "%";
            }, 700);
        }
        
        if(kraje[numer].shi > 0){
            shi.style.display = "inline-block";
            setTimeout(() => {
                shi.style.opacity = kraje[numer].shi * 5 + "%";
            }, 700);
        }
        
        if(kraje[numer].skryf > 0){
            skryf.style.display = "inline-block";
            setTimeout(() => {
                skryf.style.opacity = kraje[numer].skryf * 5 + "%";
            }, 700);
        }
        
        if(kraje[numer].smee > 0){
            smee.style.display = "inline-block";
            setTimeout(() => {
                smee.style.opacity = kraje[numer].smee * 5 + "%";
            }, 700);
        }
        
        if(kraje[numer].soneri > 0){
            soneri.style.display = "inline-block";
            setTimeout(() => {
                soneri.style.opacity = kraje[numer].soneri * 5 + "%";
            }, 700);
        }
        
        if(kraje[numer].suba > 0){
            suba.style.display = "inline-block";
            setTimeout(() => {
                suba.style.opacity = kraje[numer].suba * 5 + "%";
            }, 700);
        }
        
        if(kraje[numer].syva > 0){
            syva.style.display = "inline-block";
            setTimeout(() => {
                syva.style.opacity = kraje[numer].syva * 5 + "%";
            }, 700);
        }
        
        if(kraje[numer].thorbinus > 0){
            thorbinus.style.display = "inline-block";
            setTimeout(() => {
                thorbinus.style.opacity = kraje[numer].thorbinus * 5 + "%";
            }, 700);
        }
        
        if(kraje[numer].titok > 0){
            titok.style.display = "inline-block";
            setTimeout(() => {
                titok.style.opacity = kraje[numer].titok * 5 + "%";
            }, 700);
        }
        
        if(kraje[numer].torineti > 0){
            torineti.style.display = "inline-block";
            setTimeout(() => {
                torineti.style.opacity = kraje[numer].torineti * 5 + "%";
            }, 700);
        }
        
        if(kraje[numer].torm > 0){
            torm.style.display = "inline-block";
            setTimeout(() => {
                torm.style.opacity = kraje[numer].torm * 5 + "%";
            }, 700);
        }
        if(kraje[numer].troskab > 0){
            troskab.style.display = "inline-block";
            setTimeout(() => {
                troskab.style.opacity = kraje[numer].troskab * 5 + "%";
            }, 700);
        }
        
        if(kraje[numer].tuul > 0){
            tuul.style.display = "inline-block";
            setTimeout(() => {
                tuul.style.opacity = kraje[numer].tuul * 5 + "%";
            }, 700);
        }
        
        if(kraje[numer].varenos > 0){
            varenos.style.display = "inline-block";
            setTimeout(() => {
                varenos.style.opacity = kraje[numer].varenos * 5 + "%";
            }, 700);
        }
        
        if(kraje[numer].varvidia > 0){
            varvidia.style.display = "inline-block";
            setTimeout(() => {
                varvidia.style.opacity = kraje[numer].varvidia * 5 + "%";
            }, 700);
        }
        
        if(kraje[numer].vesi > 0){
            vesi.style.display = "inline-block";
            setTimeout(() => {
                vesi.style.opacity = kraje[numer].vesi * 5 + "%";
            }, 700);
        }
        
        if(kraje[numer].zortea > 0){
            zortea.style.display = "inline-block";
            setTimeout(() => {
                zortea.style.opacity = kraje[numer].zortea * 5 + "%";
            }, 700);
        }

    
    setTimeout(()=>{
        var tytul=document.getElementById("tytul");
        var opis=document.getElementById("pelnyopis");
        //system pojawiania się gładko tekstu
        tytul.style.opacity="100%";
        opis.style.opacity="100%";

        //system wpisywania opisów
        tytul.textContent=kraje[numer].nazwa;
        opis.innerHTML=kraje[numer].długiopis;
        ciekawostki.innerHTML=kraje[numer].ciekawostki;
        organizacje.innerHTML="<p class='podtytul'>Organizjacje</p><br>"+kraje[numer].organizacje;

        //system ustwaiający populacje kraju
    }
    ,700)
}