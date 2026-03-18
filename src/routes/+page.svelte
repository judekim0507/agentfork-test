<script>
	let count = $state(0);
</script>

<main>
	<h1>AgentFork Test App</h1>
	<p>A simple SvelteKit app for testing AgentFork.</p>

	<div class="counter">
		<button onclick={() => count = Math.max(0, count - 1)}>-</button>
		<span>{count}</span>
		<button onclick={() => count++}>+</button>
	</div>

	<section>
		<h2>Features</h2>
		<ul>
			<li>SvelteKit with Svelte 5</li>
			<li>Counter component</li>
			<li>Ready for AI modifications</li>
		</ul>
	</section>
</main>

<style>
	:global(body) {
		font-family: system-ui, sans-serif;
		margin: 0;
		padding: 2rem;
		background: #1a0505;
		color: #ffcccc;
	}

	main {
		max-width: 600px;
	}

	h1 {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	p {
		color: #cc8888;
		margin-bottom: 2rem;
	}

	.counter {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.counter button {
		width: 40px;
		height: 40px;
		border-radius: 8px;
		border: 1px solid #661111;
		background: #330000;
		color: #ffcccc;
		font-size: 1.2rem;
		cursor: pointer;
	}

	.counter button:hover {
		background: #550000;
	}

	.counter span {
		font-size: 1.5rem;
		font-weight: bold;
		min-width: 3rem;
		text-align: center;
	}

	h2 {
		font-size: 1.2rem;
		color: #dd9999;
	}

	ul {
		color: #cc8888;
		line-height: 1.8;
	}
</style>
