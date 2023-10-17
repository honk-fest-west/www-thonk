<script>
  export let download;
  console.log("download", download);

  let scheduleDialog;

  function openSchedule() {
    scheduleDialog.showModal();
  }
  function closeSchedule() {
    console.log("close", scheduleDialog);
    scheduleDialog.close();
  }
</script>

<button
  type="button"
  class="px-4 py-1 font-bold text-3xl border-2 lg:border-[3px] text-center font-title border-black rounded-xl bg-tertiary-400 text-secondary-300 tracking-wider text-stroke-2 sm:text-stroke-1 shadow-lg hover:text-primary-400 hover:bg-base-300 focus:scale-95 focus:shadow-none transition-all duration-100 ease-in-out"
  on:click={openSchedule}
>
  <slot name="btn-label" />
</button>

<dialog bind:this={scheduleDialog} class="bg-transparent">
  <div class="mx-auto max-w-7xl">
    <div class="py-2">
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center min-w-full">
          <a
            class="mt-2 text-primary-500 font-bold flex gap-x-2 hover:scale-105 transition-all duration-100 ease-in-out"
            href={download}
          >
            <span>download</span>
            <span>
              <svg
                class="h-8 w-6"
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <switch><g><path d="M7 16 0 9h4V0h6v9h4z" /></g></switch>
              </svg>
            </span>
          </a>
          <button
            type="button"
            on:click={closeSchedule}
            class="text-primary-500 font-bold hover:scale-110 transition-all duration-100 ease-in-out"
          >
            <span class="sr-only">Close</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="4"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div class="mt-4 flow-root">
          <div class="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</dialog>

<style>
  dialog::backdrop {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
</style>
