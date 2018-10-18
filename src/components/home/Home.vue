<template>
	
</template>
<script>

import Tabela from '../shared/table/Table.vue';
export default{
	components:{
		'tabela' : Tabela,
	},
	data(){
		return{
			registros:[
			{tarefa:'fazer algo', date:'00/00/0000'},
			{tarefa:'fazer algo', date:'00/00/0000'},
			{tarefa:'fazer algo', date:'00/00/0000'},
			]
		}
		
	}



}
</script>
<style scoped>

</style>