<?php

function listarPosts(){
	echo 'listando posts';
	exit;
}

add_action('wp_ajax_listarPosts', 'listarPosts'); //para user logado
add_action('wp_ajax_nopriv_listarPosts', 'listarPosts');//para user não logado