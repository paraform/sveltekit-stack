<script lang="ts">
	export let data;
	$: allTasks = data.allTasks;
</script>

<div class="prose">
	<div class="prose-h1:md:text-5xl md:w-[80vw]">
		<h1>Welcome to SvelteKit + <span class="text-warning">Drizzle ORM</span></h1>
		<blockquote>
			<h4>This Data Comes from Database :</h4>
		</blockquote>
		<div class="px-10">
			<table>
				<tbody>
					{#each allTasks as item}
						<tr>
							<th>
								<h3>{item.name}</h3>
							</th>
							<th class="shade"><h3>{item.id}</h3></th>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>

<style>
	th,
	tr {
		padding: 0px 10px;
		border: 1px solid #827f7f;
	}
	h3 {
		margin: 10px 5px;
	}
	.shade {
		background: #f5f5f513;
	}
</style>
