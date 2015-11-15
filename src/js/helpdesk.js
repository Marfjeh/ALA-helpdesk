// Rev: 11-11-2015 1
// Marvin Ferwerda

// int vars
var debug = false; // Debug modus
var klantnaam;
var datum;
var modem;
var internetprobleem = false;
var telefoonprobleem = false;
var tvprobleem = false;



function vragen()
{
    klantnaam = prompt("Wat is uw naam?");
    while (klantnaam == "" || klantnaam == null)
    {
        klantnaam = prompt("Sorry, Wat is uw naam?");
    }
    alertify.success("Goededag, " + klantnaam);

    datum = prompt("Wat is de datum van de gebeurtenis? u kunt ook vandaag typen.");
    while (datum == "" || datum == null)
    {
        datum = prompt("Wat is de datum van de gebeurtenis? u kunt ook vandaag typen.");
    }
}
function vragenpart2()
{

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
