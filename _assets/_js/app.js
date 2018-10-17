jQuery(function($){
	/*******************************
	* Listar Posts
	*******************************/

	var page = 1;

	var listarPostsAjax = function(page){
		$.ajax({
			url: wp.ajaxurl, //wp é o objeto e ajaxurl é a key
			type: 'GET',
			data: {
				action: 'listarPosts', //chama nossa função php
				page: page
			}, beforeSend:function(){
				$('.progress').removeClass('d-none');
			}
		})
		.done(function(resposta){
			$('.progress').addClass('d-none');
			$('#lista-posts').html(resposta);
		})
		.fail(function(){
			console.log('Ops... algo deu errado na requisição');
		})
	}
	listarPostsAjax(page);

	//Ação do botão da categoria
	$('.list-group-item').on('click', function(){
		listarPostsAjax();
		$('.list-group-item').removeClass('active'); //todas as categorias não ficam ativas
		$(this).addClass('active'); //a categoria clicada fica ativa
	});

	//Ação do botão da paginação
	$('body').on('click', '.page-item', function(){ //pega o numero do botao selecioando para paginar
		page = $(this).find('span').text();
		listarPostsAjax(page);
		$('.page-item').removeClass('active'); 
		$(this).addClass('active'); 
	});

	//Ação do botão limpar busca
	$('#btn-limpar').on('click', function(){
		listarPostsAjax();
		$(this).addClass('d-none'); //d-none esconde o botão
		$('#campo-busca').val('');
	});

	//Ação ao digitar uma palavra na busca
	$('#campo-busca').on('keyup', function(){ //quando aperto uma tecla e solto tenho o evento keyup
		listarPostsAjax();
		$('#btn-limpar').removeClass('d-none'); //mostra o botão
	});

	/*******************************
	* Detalhes do Post
	*******************************/

	var detalhesPostAjax = function(){
		$.ajax({
			url: wp.ajaxurl, 
			type: 'GET',
			data: {
				action: 'detalhesPost' 
			}, beforeSend:function(){
				$('.progress').removeClass('d-none');
			}
		})
		.done(function(resposta){
			$('.progress').addClass('d-none');
		})
		.fail(function(){
			console.log('Ops... algo deu errado na requisição');
		})
	}
	//detalhesPostAjax();

	//Ação do botão leia mais
	$('.btn-detalhes').on('click', function(){
		detalhesPostAjax();
	});

	/*******************************
	* Curtir e descurtir post
	*******************************/	

	var curtirPostToggleAjax = function(){
		$.ajax({
			url: wp.ajaxurl, 
			type: 'GET',
			data: {
				action: 'curtirPostToggle' 
			}, beforeSend:function(){
				$('.progress').removeClass('d-none');
			}
		})
		.done(function(resposta){
			$('.progress').addClass('d-none');
		})
		.fail(function(){
			console.log('Ops... algo deu errado na requisição');
		})
	}
	//curtirPostToggleAjax();

	//Ação do botão curtir
	$('.btn-curtir').on('click', function(){
		curtirPostToggleAjax();
	});
})