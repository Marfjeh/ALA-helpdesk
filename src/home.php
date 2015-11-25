<?php
echo("<script> var randomid = $randomid</script>");
?>
<script>footer();</script>
<div id="pagina">
    <div id="content">
    <br><br><br><br><br><br>
	<h1>MarfProjects - <?php echo($paginanaam);?></h1>
    <p>We zijn hier om u te helpen!</p>
    <p><small>Uw Ticket nummer is: <span id="randomid"><?php echo($randomid); ?></span></small></p>
    <button onclick="vragen();">start de formulier</button>
    </div>

</div>