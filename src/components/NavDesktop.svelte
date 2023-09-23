<script>
  import NavLink from "@/components/NavLink.svelte";
  export let navLinks
  let className = '';
  export { className as class }
</script>

<nav class={`px-6 py-4 border-sketch-1 bg-primary-400 w-full ${className}`}>
  <ul class="justify-between flex-wrap gap-2 hidden lg:flex">
    {#each navLinks as link (link.href)}
      <li>
        <NavLink href={link.href}>
          {link.display}
        </NavLink>
      </li>
    {/each}
  </ul>
</nav>