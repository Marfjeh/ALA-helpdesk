<?php 
//start int
$pagina = "HelpDesk"; // Pagina naam
include("inc/conf.php");
require_once("inc/head.php");
require_once("inc/menu.php");
$randomid = rand(1, 999999);
// end int
?>
<script>footer();</script>
<div id="content">
	<h1>MarfProjects - <?php echo($pagina);?></h1>
    <p>Uw Ticket nummer is: <span id="randomid"><?php echo($randomid); ?></span></p>
    <button onclick="vragen();">Start de vragen</button>

</div>
<?php require_once("inc/footer.php"); ?>