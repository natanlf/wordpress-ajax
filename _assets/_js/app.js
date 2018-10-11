jQuery(function($){
	/*******************************
	* Listar Posts
	*******************************/

	var listarPostsAjax = function(){
		$.ajax({
			url: wp.ajaxurl, //wp é o objeto e ajaxurl é a key
			type: 'GET',
			data: {
				action: 'listarPosts' //chama nossa função php
			}, beforeSend:function(){
				console.log('Carregando posts...');
			}
		})
		.done(function(resposta){
			console.log(resposta);
		})
		.fail(function(){
			console.log('Ops... algo deu errado na requisição');
		})
	}
	

	//Ação do botão da categoria
	$('.list-group-item').on('click', function(){
		listarPostsAjax();
		$('.list-group-item').removeClass('active'); //todas as categorias não ficam ativas
		$(this).addClass('active'); //a categoria clicada fica ativa
	});

	//Ação do botão da paginação
	$('.page-item').on('click', function(){
		listarPostsAjax();
		$('.page-item').removeClass('active'); 
		$(this).addClass('active'); 
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
				console.log('Carregando detalhes do post...');
			}
		})
		.done(function(resposta){
			console.log(resposta);
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
				console.log('Curtindo post...');
			}
		})
		.done(function(resposta){
			console.log(resposta);
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