<script>
  import NavLink from "@/components/NavLink.svelte";
  export let navLinks
  let className = '';
  export { className as class }
</script>

<div class={className}>
  <ul class="justify-between flex-wrap gap-2 hidden lg:flex">
    {#each navLinks as link (link.href)}
      <li>
        <NavLink href={link.href}>
          {link.display}
        </NavLink>
      </li>
    {/each}
  </ul>
</div>