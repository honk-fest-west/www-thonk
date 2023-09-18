<script>
  let viewing = "less";

  function handleMore() {
    viewing = "more";
  }

  function handleLess() {
    viewing = "less";
  }
</script>

{#if viewing === "less"}
  <div class="relative max-h-[16rem] sm:max-h-full overflow-hidden">
    <slot />
    <div
      class="block sm:hidden absolute bottom-0 left-0 right-0 h-[15rem] bg-gradient-to-t from-secondary-300 to-transparent"
    />
  </div>
  <div class="block sm:hidden bg-secondary-300 opacity-90">
    <button
      on:click={handleMore}
      class="block underline text-center text-base-700 font-bold mt-4 mx-auto"
      >More</button
    >
  </div>
{:else if viewing === "more"}
  <div class="relative">
    <slot />
  </div>
  <div class="block sm:hidden bg-secondary-300 opacity-90">
    <button
      on:click={handleLess}
      class="block underline text-center text-primary-500 font-bold mt-4 mx-auto"
      >Less</button
    >
  </div>
{/if}
