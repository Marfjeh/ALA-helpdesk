// Marvin Ferwerda
// LETOP: Deze code vereist MarfFrameWork versie 1.3 of later!

// int vars
var klantnaam;
var datum;
var modem;
var internetprobleem = false;
var telefoonprobleem = false;
var tvprobleem = false;


function vragen()
{
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
    addtoelementln("resultaat","Klantnaam: " + klantnaam );


    datum = prompt("Wat is de datum van de gebeurtenis?", datenow("-") + " " + timenow(":"));
    while (datum == "")
    {
        datum = prompt("Wat is de datum van de gebeurtenis?", datenow("-") + " " + timenow(":"));
    }
    if (datum == null) { end(1) }
    addtoelementln("resultaat", "Datum van gebeurtenis: " + datum);

    modem = prompt("Wat is het merk en type van uw modem?");
    while (modem == "")
    {
        modem = prompt("Wat is het merk en type van uw modem?");
    }
    if (modem == null) { end(1) }
    addtoelementln("resultaat", "Modem van klant: " + modem);

    internetprobleem = confirm("Heeft u een klacht over ons product internet?");
    if (internetprobleem == true)
    {
        internetproblemen()
    }
    else
    {
        addtoelementln("resultaat", "* Klant heeft geen problemen met het internet");
    }

    telefoonprobleem = confirm("heeft u een klacht over bellen");
    if(telefoonprobleem == true)
    {
        telefoonproblemen()
    }
    else
    {
        addtoelementln("resultaat", "* Klant heeft geen problemen met bellen");
    }

    tvprobleem = confirm("heeft u problemen met de tv?");
    if(tvprobleem == true)
    {
        tvproblemen();
    }
    else
    {
        addtoelementln("resultaat", "* Klant heeft geen problemen met de Tv");
    }

    if(tvprobleem == false && internetprobleem == false && telefoonprobleem == false)
    {
        addtoelementln("resultaat", "* Klant heeft geen problemen.");
        end(0);
    }

}

function internetproblemen()
{
    var nunlwerkt = confirm("Kunt u browsen naar www.nu.nl?");
    if (nunlwerkt == true)
    { addtoelementln("resultaat", "* Browsen naar www.nu.nl lukt"); }
    else
    { addtoelementln("resultaat", "* Browsen naar www.nu.nl lukt niet."); }

    var reageertsnel = confirm("Reageert de pagina snel na het indrukken van F5 of herlaad knopje?");
    if (reageertsnel == true)
    { addtoelementln("resultaat", "* Pagina laad snel"); }
    else
    { addtoelementln("resultaat", "* Pagina laad traag of niet"); }

}

function telefoonproblemen()
{
    var kiestoon = confirm("Hoort uw een kiestoon?");
    if (kiestoon == true)
    {
        addtoelementln("resultaat", "* Klant hoort een kiestoon.");
        tvproblemen();
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

function tvproblemen()
{
    var aantaltv = prompt ("Hoevaal televisies zijn er aangesloten?");
    while (aantaltv == "") { aantaltv = prompt ("Hoevaal televisies zijn er aangesloten?"); }
    if (aantaltv == null) { end(0);}
    else
    { addtoelementln("resultaat", "* Klant heeft: " + aantaltv + " Televiesie(s)."); }

    var splitter = confirm("is uw splitter goed aangesloten?");
    if (splitter == true)
    { addtoelementln("resultaat", "* Klant heeft de splitter goed aangesloten."); }
    else
    { addtoelement("resultaat", "* Klant heeft de splitter niet goed aangesloten, of heeft geen splitter."); }

    var setupbox = confirm("Is uw settupbox goed aangesloten?");
    if (setupbox == true)
    {
        
    }

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