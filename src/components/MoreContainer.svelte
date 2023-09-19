<script>
  let viewingMore = false;

  function viewMore() {
    viewingMore = true;
  }
</script>

<div
  class="relative sm:max-h-full overflow-hidden"
  class:max-h-[20rem]={!viewingMore}
>
  <div class="flex flex-col gap-3 sm:gap-6">
    <slot />
  </div>
  {#if !viewingMore}
    <div
      class="block sm:hidden absolute bottom-0 left-0 right-0 h-[6rem] bg-gradient-to-t from-secondary-300 to-transparent"
    />
  {/if}
</div>
<div class="block sm:hidden bg-secondary-300 opacity-90">
  {#if !viewingMore}
    <button
      on:click={viewMore}
      class="block text-center text-base-700 text-stroke-1 font-bold mt-4 mx-auto"
      >more &blacktriangledown;</button
    >
  {/if}
</div>
