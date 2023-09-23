<script>
  export let href;
</script>

<a on:click
  class="px-2 py-2 font-bold text-3xl block border-4 text-center font-title border-black rounded-3xl bg-tertiary-400 text-primary-400 tracking-wider text-stroke-3 sm:text-stroke-1 shadow-lg focus:scale-95 focus:shadow-none hover:bg-base-400 transition-all duration-100 ease-in-out" 
  {href}>
    <slot/>
</a>