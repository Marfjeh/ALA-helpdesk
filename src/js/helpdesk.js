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



function vragen() // LETOP: De vragen zijn ongekeert. het begint van onder naar boven!
{
    //alertify.prompt(meldingtekst, EVENT OK, EVENT CANCEL)

    alertify.prompt("Wat is de datum?", function (val) { datum = val; printbegin();}); //Vraag 2
    alertify.prompt("Uw naam?", function (val) { klantnaam = val; }); // Vraag 1
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

function printbegin() //Dit is voor de naam, datum, datum gebeurtenis, te printen op scherm.
{
    document.write("" + "Gegevens klant: <br> " +
        "Naam: " + klantnaam +
        "<br>Datum van gebeurtenis: " + datum);
}
