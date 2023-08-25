
class Tutorial{

    constructor(name, sprache, beschreibung, dauer, datum, url, embedCode){
        this.name = name;
        this.sprache = sprache;
        this.beschreibung = beschreibung;
        let dauerarray = dauer.split(':');
        this.dauer = dauerarray[0] +' Std. '+ dauerarray[1]+ ' Min.';
        let nge = new Date(datum).getFullYear();
        this.datum=nge;
        this.url = url;
        this.embedCode = embedCode;
        this.kategorien = [];
        this.kapitelliste = [];
    }

    fuegeKategorieHinzu(kat){
        this.kategorien.push(kat);
    }
    fuegeKapitelHinzu(kap){
       this.kapitelliste.push(kap)
    }
}

class Kategorie{
    constructor(name, bild){
        this.name = name;
        this.bild = bild;
    }
}

class Kapitel{
    constructor(name, beschreibung, dauer){
        this.name = name;
        this.beschreibung = beschreibung;
        let dauerarray = dauer.split(':');
        this.dauer = dauerarray[0] +' Std. '+ dauerarray[1]+ ' Min.';
    }
}

function Bild (url, name){
    this.url = url;
    this.name = name;
    // verbindung von tutorial und kategorie noch nicht gecheckt
    // this.tutorial = tut;
    // this.kategorie = kat;
}

function getDauerInStundenUndMinuten(dauer){
    let subarray = dauer.split(' ');
    return subarray[1] + ':' + subarray[3];
}
let kat1 = new Kategorie("Körperliche tätigkeiten",
new Bild("https://www.merkur.de/bilder/2022/06/17/91615403/29163907-kennen-sie-germerings-schoensten-baum-2dJR2dFF1Bec.jpg",
                         "Baum"))
let kat2 = new Kategorie("Tipps",
                        new Bild("https://www.tagesspiegel.de/images/toastgetty-imagesjpg/alternates/BASE_4_3_W600/toastgetty-imagesjpg.jpeg",
                        "Toast"))
let kat3 = new Kategorie("Technologie",
                        new Bild("https://img.rewe-static.de/7359497/24569872_digital-image.png?output-quality=60&fit=inside|840:840&background-color=ffffff",
                        "Gurke"))
let tut1 = new Tutorial("Holz hacken", "Deutsch", "best tutorial on earth","02:25","2016-08-23","no url","no embed")
let tut2 = new Tutorial("Professionelles Atmen1", "Deutsch", "second best tutorial on earth1","00:28","2017-8-23","no url","no embed")
let tut3 = new Tutorial("Professionelles Atmen2", "Deutsch", "second best tutorial on earth2","00:29","2017-8-24","no url","no embed")
let tut4 = new Tutorial("Professionelles Atmen3", "Deutsch", "second best tutorial on earth3","00:30","2017-8-25","no url","no embed")
let tut5 = new Tutorial("Professionelles Atmen4", "Deutsch", "second best tutorial on earth4","00:31","2017-8-26","no url","no embed")
let tut6 = new Tutorial("Professionelles Atmen5", "Deutsch", "second best tutorial on earth5","00:32","2017-8-27","no url","no embed")
let tut7 = new Tutorial("Holz hacken leichtgemacht", "Deutsch", "best tutorial on earth","03:25","2017-08-23","no url","no embed")
let tut8 = new Tutorial("Holz hacken nur was für Profis", "Deutsch", "best tutorial on earth","04:25","2020-08-23","no url","no embed")

tut1.fuegeKapitelHinzu(new Kapitel("Kapitel 1", "Einleitung","00:33"))
tut1.fuegeKapitelHinzu(new Kapitel("Kapitel 2", "Hauptteil", "01:32"))
tut1.fuegeKapitelHinzu(new Kapitel("Kapitel 3", "Ende", "00:15"))

tut2.fuegeKapitelHinzu(new Kapitel("Kapitel 1", "Einleitung","00:06"))
tut2.fuegeKapitelHinzu(new Kapitel("Kapitel 2", "Hauptteil", "00:16"))
tut2.fuegeKapitelHinzu(new Kapitel("Kapitel 3", "Ende", "00:06"))

tut1.fuegeKategorieHinzu(kat1);

tut2.fuegeKategorieHinzu(kat1);
tut2.fuegeKategorieHinzu(kat2);

let katarray = [kat1, kat2, kat3];
let tutarray = [tut1, tut2, tut3, tut4, tut5, tut6, tut7, tut8];

katarray.sort((a,b) => a.name.localeCompare(b.name));

//console.log(katarray);

function getTutorialsZuKategorie(kategorieName){
    let tutorials = [];
    tutarray.forEach(function(tut){
        for(let i = 0; i < tut.kategorien.length; i++){
            if(tut.kategorien[i].name === kategorieName)
                tutorials.push(tut.kategorien[i].name);
        }
    })
    return tutorials;
}

function getTutorials(suche){
    let result="";
//for (let datensatz of tutarray){
result+= `<li>Tutorials mit: ${suche}</li><br>`;
for (let i = 0; i < tutarray.length; i++){
    if (tutarray[i].name.includes(suche)) {
        result += `<li><a href="${tutarray[i].url}"> ${tutarray[i].name} (${tutarray[i].datum}) </a></li>`;
    }
}
if(result===`<li>Tutorials mit: ${suche}</li><br>`){
    result+= `<li>Keine Tutorials gefunden!</li>`;
}
return result; 
}



module.exports.tutver = {
    katarray: katarray,
    tutarray: tutarray,
    getTutorialsZuKategorie: getTutorialsZuKategorie,
    getTutorials: getTutorials
};