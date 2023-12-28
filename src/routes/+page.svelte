<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  h1 {
    width: 100%;
  }
</style>

<script>
	import Counter from '$components/Counter.svelte';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>Hello,</h1>
  <h1 class="text-3xl font-bold underline">Welcome to SvelteKit</h1>
  <h2 class="">Open AI Chat GPT Example</h2>
  <Counter />
</section>
