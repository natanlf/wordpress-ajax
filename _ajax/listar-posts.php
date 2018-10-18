<?php

function listarPosts(){

	$page = $_GET['page']; //recebo a pagina
	$slug = $_GET['slug']; //slug da categoria

	$args = [
		'post_type' => 'post',
		'posts_per_page' => 2,
		'paged' => ($page) ? $page : 1, //caso não tenha recebido pagina o default é a pagina 1
		'category_name' => $slug
	];

	$posts = new WP_Query($args);
	$totalPages = $posts->max_num_pages;
	?>

		<?php if($posts->have_posts()): ?>

				<div class="itens">	
					<?php while($posts->have_posts()) : $posts->the_post(); ?>
					<!-- item -->
						<div class="item">
							<div class="card">
								<div class="card-body">
									<h4><?php the_title(); ?></h4>
									<h4>Título do post</h4>
									<?php the_excerpt(); ?>
								</div>
								<div class="card-footer text-right">
									<button type="button" class="btn btn-sm btn-primary btn-detalhes" data-toggle="modal" data-target="#detalhes-post">Leia mais</button>
									<button type="button" class="btn btn-sm btn-info btn-curtir"><span class="text">Gostei</span> <span class="badge badge-light">0</span></button>
								</div>
							</div>
						</div>
					<!-- fim item -->
					<?php endwhile; ?>
				</div>
				<!-- Faz um loop no total de páginas e deixa a página corrent com a classe active -->
				<!-- paginacao -->
				<?php if($totalPages > 0): ?>
					<section class="paginacao">
						<nav aria-label="Page navigation example">
							<ul class="pagination">
								<?php for($i=1; $i<= $totalPages; $i++): ?>
									<li class="page-item <?php echo ($i == $page)? 'active' : '' ?>"><span class="page-link"><?php echo $i; ?></a></li>
								<?php endfor; ?>	
							</ul>
						</nav>
					</section>
				<?php endif; ?>
				<!-- fim paginacao -->
		<?php else : ?>
			<div class="alert alert-danger">Nenhum conteúdo encontrado.</div>
		<?php endif ?>

	<?php
	exit;
}

add_action('wp_ajax_listarPosts', 'listarPosts'); //para user logado
add_action('wp_ajax_nopriv_listarPosts', 'listarPosts');//para user não logado