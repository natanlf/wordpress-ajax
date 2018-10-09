<?php

function curtirPostToggle(){
	echo 'Ok.. post curtido!';
	exit;
}

add_action('wp_ajax_curtirPostToggle', 'curtirPostToggle'); //para user logado
add_action('wp_ajax_nopriv_curtirPostToggle', 'curtirPostToggle');//para user não logado