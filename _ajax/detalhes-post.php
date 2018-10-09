<?php

function detalhesPost(){
	echo 'Detalhes do post carregado!';
	exit;
}

add_action('wp_ajax_detalhesPost', 'detalhesPost'); //para user logado
add_action('wp_ajax_nopriv_detalhesPost', 'detalhesPost');//para user não logado