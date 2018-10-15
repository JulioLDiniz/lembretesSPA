<template>
	<div>
		<table class="table">
			<thead>
				<tr>
					<th v-for="head in heads" >{{head}}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="registro in registros">
					<td v-for="item in registro">{{item}}</td>
				</tr>
			</tbody>
			
		</table>
	</div>
</template>
<script>
export default {
	props:['heads','registros']
}
</script>
<style>

</style>