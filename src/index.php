<?php 
//start int
$pagina = "HelpDesk"; // Pagina naam
include("inc/conf.php");
require_once("inc/head.php");
$randomid = rand(1, 999999);
echo("<script> var randomid = $randomid</script>");
require_once("inc/menu.php");
// end int
?>
<script>footer();</script>
<div id="pagina">
    <div id="content">
    <br><br><br><br><br><br>
	<h1>MarfProjects - <?php echo($pagina);?></h1>
    <p>We zijn hier om u te helpen!</p>
    <p><small>Uw Ticket nummer is: <span id="randomid"><?php echo($randomid); ?></span></small></p>
    <button onclick="vragen();">Begin de vragen</button>
    </div>
</div>
<?php require_once("inc/footer.php"); ?>