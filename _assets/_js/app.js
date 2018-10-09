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
	//listarPostsAjax();
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
	curtirPostToggleAjax();
})