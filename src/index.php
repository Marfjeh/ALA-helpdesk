<?php
// Marf Isset page system. use &page=pagename
include("inc/conf.php");
error_reporting(E_ERROR | E_WARNING | E_PARSE); // $pagina word null als er geen waarde ingesteld is. en dan komt er een notice.
$randomid = rand(1, 999999);
$pagina = $_GET["page"] . ".php";
$paginanaam = $_GET["page"];
if ($paginanaam == "home" || $pagina == "index" || $pagina == null || $pagina == "" || is_null($_GET["page"]))
{
    $paginanaam = "HelpDesk";
}
require_once("inc/head.php");
require_once("inc/menu.php");

if ($pagina == ".php")
{
    include_once("home.php");
}
else
{
    if (isset($_GET["page"]))
    {
        if (file_exists($pagina) == true) {
            if ($pagina == "index.php") {
                include_once("home.php");
            }
            else {
                include_once($pagina);
            }
        }
        else
        {
            $paginanaam = ("404");
            include_once("404.php");

        }

    }
    else
    {
        include_once("home.php");
    }
}

require_once("inc/footer.php");
