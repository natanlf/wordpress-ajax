<!--Template do menu categoria-->

<?php 
$categorias = get_terms('category'); //devo passar para essa função netre parenteses o nome da taxonomia //que nesse caso é category
?>
<ul class="list-group">
	<li class="list-group-item active">Todos</li>
	<?php if(!empty($categorias) && !is_wp_error($categorias)): ?>
		<?php foreach ($categorias as $categoria): ?>
			<li class="list-group-item" data-slug="<?php echo $categoria->slug; ?>"><?php echo $categoria->name; ?></li>
		<?php endforeach ?>
	<?php endif ?>
</ul>