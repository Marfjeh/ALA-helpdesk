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
    klantnaam = prompt("Wat is uw naam?");
    while (klantnaam == "")
    {
        klantnaam = prompt("Sorry, Wat is uw naam?");
    }
    if ( klantnaam == null ) { end(1) }


    datum = prompt("Wat is de datum van de gebeurtenis?", datenow("-") + " " + timenow(":"));
    while (datum == "")
    {
        datum = prompt("Wat is de datum van de gebeurtenis?", datenow("-") + " " + timenow(":"));
    }
    if (datum == null) { end(1) }
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
        alertify.error("Afgebroken!");
        throw new Error("Gebruiker heeft afgebroken!");
    }
    else if (endcode == 2 || endcode == null)
    {
        throw new Error("Er is wat fout gegaan!");
    }
}