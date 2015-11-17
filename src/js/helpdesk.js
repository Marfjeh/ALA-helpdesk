// Marvin Ferwerda
// LETOP: Deze code vereist MarfFrameWork!

// int vars
var klantnaam;
var datum;
var modem;
var internetprobleem = false;
var telefoonprobleem = false;
var tvprobleem = false;

function vragen()
{
    var hoofddiv = document.getElementById('pagina');
    alert(randomid);
    if (mjactive == undefined || mjactive == null || mjactive == 0)
    {end(2);}

    hoofddiv.innerHTML = hoofddiv.innerHTML + "<div id='resultaat'><h2>Rapport</h2></div>";
    var resdiv = document.getElementById("resultaat");
    klantnaam = prompt("Wat is uw naam?");
    while (klantnaam == "")
    {
        klantnaam = prompt("Sorry, Wat is uw naam?");
    }
    if ( klantnaam == null ) { end(1) }
    resdiv.innerHTML = resdiv.innerHTML + "Klantnaam: " + klantnaam + "<br>";


    datum = prompt("Wat is de datum van de gebeurtenis?", datenow("-") + " " + timenow(":"));
    while (datum == "")
    {
        datum = prompt("Wat is de datum van de gebeurtenis?", datenow("-") + " " + timenow(":"));
    }
    if (datum == null) { end(1) }
    resdiv.innerHTML = resdiv.innerHTML + "Datum van gebeurtenis: " + datum + "<br>";
}

function internetproblemen()
{
	
}

function telefoonproblemen()
{
	
}

function tvproblemen()
{
	
}

function end(endcode)
{
    if (endcode == 0) //succes.
    {
        throw new Error("Succes. script is gestopt.");
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
}