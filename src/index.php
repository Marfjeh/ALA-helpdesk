<?php
$randomid = rand(1, 999999);
$pagina = "Helpdesk";
$paginanaam = "Helpdesk";
echo("<script> var randomid = $randomid</script>");
require_once("inc/head.php");
require_once("inc/menu.php");
?>
<div id="pagina">
    <div id="content">
    <br><br><br><br><br><br>
	<h1>MarfProjects - <?php echo($paginanaam);?></h1>
    <p>We zijn hier om u te helpen!</p>
    <p><small>Uw Ticket nummer is: <span id="randomid"><?php echo($randomid); ?></span></small></p>
    <button onclick="vragen();">start het formulier</button>
        <br><br>
    </div>

</div>
<?php require_once("inc/footer.php");?>