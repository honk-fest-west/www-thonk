<script>
  let viewingMore = false;

  function viewMore() {
    viewingMore = true;
  }
</script>

<div
  class="relative sm:max-h-full overflow-hidden"
  class:max-h-[16rem]={!viewingMore}
>
  <div class="flex flex-col gap-3 sm:gap-6">
    <slot />
  </div>
  {#if !viewingMore}
    <div
      class="block sm:hidden absolute bottom-0 left-0 right-0 h-[4rem] bg-gradient-to-t from-secondary-300 to-transparent"
    />
  {/if}
</div>
<div class="flex justify-center sm:hidden bg-secondary-300 opacity-90">
  {#if !viewingMore}
    <button
      on:click={viewMore}
      class="opacity-80 font-bold text-3xl text-center font-title text-primary-400 tracking-wider text-stroke-2 sm:text-stroke-1 focus:scale-95 transition-all duration-100 ease-in-out"
      >more &blacktriangledown;
    </button>
  {/if}
</div>
