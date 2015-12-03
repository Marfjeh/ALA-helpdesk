// Marvin Ferwerda
// LETOP: Deze code vereist MarfFrameWork versie 1.3 of later!

// int vars
var klantnaam;
var datum;
var modem;
var internetprobleem = false;
var telefoonprobleem = false;
var tvprobleem = false;
var traagladen = false;

var probleemoplossing = new Array ();
probleemoplossing[0] = "Schakel de modem uit. en wacht minimaal 10 seconden om hem opnieuw in te schakelen. Zo dat dit niet helpt, kunnen wij een monteur sturen.<br>";
probleemoplossing[1] = "Uw problemen zijn:\nInternet probleem: " + (internetprobleem ? "Ja" : "Nee") + "\nProblemen met de telefoon: " + (telefoonprobleem ? "Ja" : "Nee") + "\nProblemen met de Tv: " + (tvprobleem ? "Ja" : "Nee");
probleemoplossing[2] = "Uw paginas laden traag. dit kan vaak komen dat er veel programmas op de achtergrond draait. probeer ze af te sluiten. probeer zoveel mogelijk apperaten aftesluiten en kijken waar het probleem zit. zo dat uw het probleem gevonden hebt kunt u kijken wat er aan gedaan moeten worden. weet u dat niet? dan kunnen we gratis een monteur laten komen.<br>";
probleemoplossing[3] = "Zorg dat de splitter goed aangesloten zit, en reset uw setupbox, en wacht minimaal 10 seconden met weer aan zetten.<br>";

function vragen() // eerste vragen
{
    try {
        var resdiv = document.getElementById("resultaat");
        resdiv.outerHTML = "";
        delete resdiv;
    }
    catch(e)
    {
        log("Error: " + e);
    }

    var ID = document.getElementById('randomid').innerHTML;
    var hoofddiv = document.getElementById('pagina');
    addtoelement("pagina","<div id='resultaat'><h2>Rapport</h2></div>");
    addtoelementln("resultaat", "Ticket ID: " + ID);

    klantnaam = prompt("Wat is uw naam?");
    while (klantnaam == "")
    {
        klantnaam = prompt("Sorry, Wat is uw naam?");
    }
    if ( klantnaam == null ) { end(1) }
    else if (klantnaam == "debug")
    { alertify.log("Debug mode activated!"); end(0);}
    addtoelementln("resultaat","Klant naam: " + klantnaam );


    datum = prompt("Wat is de datum?", datenow("-") + " " + timenow(":"));
    while (datum == "")
    {
        datum = prompt("Wat is de datum?", datenow("-") + " " + timenow(":"));
    }
    if (datum == null) { end(1) }
    addtoelementln("resultaat", "Datum: " + datum);

    modem = prompt("Wat is het merk en type van uw modem?");
    while (modem == "")
    {
        modem = prompt("Wat is het merk en type van uw modem?");
    }
    if (modem == null) { end(1) }
    addtoelementln("resultaat", "Modem van klant: " + modem);

    addtoelementln("resultaat", " ---- Internet ---- <br>");
    internetprobleem = confirm("Heeft u een klacht over ons product internet?");
    if (internetprobleem == true)
    {
        internetproblemen()
    }
    else
    {
        addtoelementln("resultaat", "* Klant heeft geen problemen met het internet");
    }

    addtoelementln("resultaat", " ---- Telefoon ---- <br>");
    telefoonprobleem = confirm("heeft u een klacht over bellen");
    if(telefoonprobleem == true)
    {
        telefoonproblemen()
    }
    else
    {
        addtoelementln("resultaat", "* Klant heeft geen problemen met bellen");
    }

    addtoelementln("resultaat", " ---- Tv ---- <br> ");
    tvprobleem = confirm("heeft u problemen met de tv?");
    if(tvprobleem == true)
    {
        tvproblemen();
    }
    else
    {
        addtoelementln("resultaat", "* Klant heeft geen problemen met de Tv");
    }
    addtoelementln("resultaat", " ---- eind ---- <br>");
    addtoelementln("resultaat", "Probleem oplosser:<br>")
    if(tvprobleem == true)
    {
        addtoelementln("resultaat", probleemoplossing[3]);
    }
    if(internetprobleem == true || telefoonprobleem == true)
    {
        addtoelementln("resultaat", probleemoplossing[0]);
    }
    if (traagladen == true)
    {
        addtoelementln("resultaat", probleemoplossing[2])
    }
    addtoelementln("resultaat", " -- Rapport Voltooid! -- ");
    addtoelementln("resultaat", "Internet Probleem: " + internetprobleem + "<br>Telefoon probleem: " + telefoonprobleem + "<br>Tv problemen: " + tvprobleem);
    addtoelementln("resultaat", "<span style='text-align: center;'><button onclick='restart();'>Opnieuw</button> - <button onclick='window.print();'>UitPrinten</button></span>");
}

function internetproblemen() // internet
{
    var nunlwerkt = confirm("Kunt u browsen naar www.nu.nl?");
    if (nunlwerkt == true)
    { addtoelementln("resultaat", "* Browsen naar www.nu.nl lukt"); }
    else
    { addtoelementln("resultaat", "* Browsen naar www.nu.nl lukt niet."); }

    var reageertsnel = confirm("Reageert de pagina snel na het indrukken van F5 of herlaad knop?");
    if (reageertsnel == true)
    { addtoelementln("resultaat", "* Pagina laad snel"); }
    else
    {
        traagladen = true;
        addtoelementln("resultaat", "* Pagina laad traag of niet");
    }

}

function telefoonproblemen() //telefoon
{
    var kiestoon = confirm("Hoort uw een kiestoon?");
    if (kiestoon == true)
    {
        addtoelementln("resultaat", "* Klant hoort een kiestoon.");
    }
    else
    {addtoelementln("resultaat", "* Klant hoort geen kiestoon.");}

    var uzelfbellen = confirm("Kunt u uzelf bellen op bijvoorbeeld een mobiele telefoon?");
    if (uzelfbellen == true)
    {addtoelementln("resultaat", "* Klant kan zichzelf bellen");}
    else
    {addtoelementln("resultaat", "* Klant kan niet zichzelf bellen");}

    var mobielbellen = confirm("Kunt u met uw mobiel bellen over de klacht van de telefoon?");
    if (mobielbellen == true)
    { addtoelementln("resultaat", "* Klant kan bellen met zijn/haar mobiel over de klacht."); }
    else
    { addtoelementln("resultaat", "* Klant kan niet bellen met zijn/haar mobiel over de klacht."); }
}

function tvproblemen() //tv problemen
{
    var aantaltv = prompt ("Hoeveel televises zijn er aangesloten?");
    while (aantaltv == "") { aantaltv = prompt ("Hoevaal televisies zijn er aangesloten?"); }
    if (aantaltv == null) { end(0);}
    else
    { addtoelementln("resultaat", "* Klant heeft: " + aantaltv + " Televiesie(s)."); }

    var splitter = confirm("is uw splitter goed aangesloten?");
    if (splitter == true)
    { addtoelementln("resultaat", "* Klant heeft de splitter goed aangesloten."); }
    else
    { addtoelementln("resultaat", "* Klant heeft de splitter niet goed aangesloten, of heeft geen splitter."); }

    var setupbox = confirm("Is uw settupbox goed aangesloten?");
    if (setupbox == true)
    { addtoelementln("resultaat", "* Klant heeft Setupbox goed aangesloten");}
    else
    { addtoelementln("resultaat", "* Klant heeft settupbox niet goed aangesloten of heeft er geen 1");}

    var zenders = confirm("Worden de zenders gevonden?");
    if (zenders == true)
    { addtoelementln("resultaat", "* Zenders worden gevonden"); }
    else
    { addtoelementln("resultaat", "* Zenders worden niet gevonden."); }
}

function restart()
{
    var resdiv = document.getElementById("resultaat");
    resdiv.outerHTML = "";
    delete resdiv;
    vragen();
}

function end(endcode)
{
    if (endcode == 0) //succes.
    {
        throw new Error("Succes. Maar werd geroepen om de script te stoppen.");
    }
    else if (endcode == 1) //Afgebroken
    {
        alertify.error("U heeft de vragen afgebroken!");
        var resdiv = document.getElementById("resultaat");
        resdiv.outerHTML = "";
        delete resdiv;
        throw new Error("Gebruiker heeft afgebroken!");
    }
    else if (endcode == 2) //MarfFrameWork is niet gevonden
    {
        throw new Error("MarfFrameWork is niet gevonden/actief/geladen. De script kan niet verder gaan.")
    }
    else if (endcode == null)
    {
        throw new Error("Er is wat fout gegaan!");
    }
    else if (endcode >= 3)
    {
        throw new Error("Er is een ombekende fout opgetreden.")
    }
}