<script>
  import {fly} from 'svelte/transition';
  import NavButton from '@components/NavButton.svelte';

  export let navLinks;
  let className = '';
  export { className as class }
  export let title = false;
  export let currentMenuItem = null;

  function activeListItem(href) {
    return href === currentMenuItem?.link
      ? 'hidden'
      : 'text-shadow bg-navy text-gray-200';
  }

  let menuOpen = false;
</script>

<div class={className}>
  <div class="flex h-12 justify-end w-full">
    <button
      type="button"
      class="w-14 p-1 font-bold text-xl xl:text-2xl block border-4 font-title border-black rounded-xl bg-tertiary-400 text-primary-400 tracking-wider text-stroke-3 sm:text-stroke-1 shadow-lg focus:scale-95 focus:shadow-none hover:bg-base-400 transition-all duration-100 ease-in-out"
      on:click={() => {
        console.log('click button');
        menuOpen = !menuOpen
      }}
    >
      <!-- Mobile menu button-->
      <div
        class="inline-flex items-center justify-center rounded-full p-2 -mt-1 text-black"
      >
        <span class="sr-only">Open main menu</span>
        {#if !menuOpen}
          <svg
            class="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        {/if}
        {#if menuOpen}
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        {/if}
      </div>
    </button>
  </div>
</div>

<!-- Mobile menu, show/hide based on menu state. -->
{#if menuOpen}
  <div
    id="mobile-menu"
    in:fly|fade={{ y: -200, duration: 200 }}
    out:fly|fade={{ y: -200, duration: 200 }}
  >
    <ul class="px-2 pb-3 pt-2 flex flex-col gap-3">
      <!-- MAIN NAV -->
      {#each navLinks as link}
        <NavButton href={link.href}>
          {link.display}
        </NavButton>
      {/each}

      <!-- <li class="text-2xl text-cobalt flex justify-center">
        {#each Object.keys(socialLinks) as key}
          <div>
            <div class="block px-3 h-7">
              <SocialLink {key} link={socialLinks[key]} size="1.875rem" />
            </div>
          </div>
        {/each}
      </li> -->
    </ul>
  </div>
{/if}