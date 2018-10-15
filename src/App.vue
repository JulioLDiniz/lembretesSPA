<template>
	<div >
		<head>

			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
			<meta name="description" content="">
			<meta name="author" content="">

			<title>Freelancer - Start Bootstrap Theme</title>
		</head>
		<link href="assets/css/freelancer.css" rel="stylesheet">
		<meu-menu/>
		<tabela v-bind:heads="['Usuário', 'E-mail']" v-bind:registros="registros"></tabela>
	</div>
</template>

<script>
import Menu from './components/shared/menu/Menu.vue';
import Tabela from './components/shared/table/Table.vue';
export default{
	components:{
		'meu-menu' : Menu,
		'tabela' : Tabela
	},
	data(){
		return{
			registros:[
			{usuario:'teste', email:'teste@teste'},
			{usuario:'usuario2', email:'email2'},
			{usuario:'usuario3', email:'email3'},
			]
		}
		
	}



}



</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
@import url('https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic');
@import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css');


</style>
