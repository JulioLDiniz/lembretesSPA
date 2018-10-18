<template>
	<nav class="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
		<div class="container">
			<a class="navbar-brand js-scroll-trigger" href="#page-top">Home</a>
			<button class="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				Menu
				<i class="fas fa-bars"></i>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item mx-0 mx-lg-1" v-for="rota in rotas">
						<router-link :to="rota.path ? rota.path : '/'" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" >{{ rota.titulo }}</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script>
export default{
	props: {
		rotas: {
			type: Array,
			required: true
		}
	}
}
</script>
<style scoped>
#mainNav{
	position: relative;
}
</style>