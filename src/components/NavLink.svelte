<script>
  export let href;
</script>

<a
  on:click
  class="px-2 py-2 font-bold text-3xl block border-2 lg:border-[3px] text-center font-title border-black rounded-3xl bg-tertiary-400 text-secondary-300 tracking-wider text-stroke-2 sm:text-stroke-1 shadow-lg focus:scale-95 focus:shadow-none transition-all duration-100 ease-in-out"
  {href}
>
  <slot />
</a>

<style>
  a:hover {
    color: rgba(var(--color-primary-400));
    background-color: rgba(var(--color-base-400));
  }
</style>
