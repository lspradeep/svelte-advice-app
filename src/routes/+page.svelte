<script>
	export let data;

	let advice;
	
	if(data.advice){
		advice = data.advice;
	}
</script>

<div class="card m-10 p-5">
    <div class="mb-5">
		<img width="40" height="40" src="https://img.icons8.com/officel/80/thinking-female.png" alt="thinking-female" class="inline"/>
		
		<button type="button" class="btn bg-gradient-to-br variant-gradient-primary-secondary" onclick="randomFn()">
			<script>
				function randomFn() {
					window.location.href = "/";
				}
			</script>
			<span>
				Gimme advice
			</span>
			<span>
				<img width="20" height="20" src="https://img.icons8.com/color/96/sad--v1.png" alt="sad--v1"/>
			</span>
		</button>
	</div>
	{#if advice}
		<p class="italic h2">
			{advice["slip"]["advice"]}
		</p>
	{:else}	
		<p>No data found</p>
	{/if}
</div>