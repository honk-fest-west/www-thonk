<script>
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
  class="flex gap-x-2 px-4 font-bold text-3xl border-2 lg:border-[3px] text-center font-title border-black rounded-3xl bg-tertiary-400 text-secondary-300 tracking-wider text-stroke-2 sm:text-stroke-1 shadow-lg hover:text-primary-400 hover:bg-base-300 focus:scale-95 focus:shadow-none transition-all duration-100 ease-in-out"
  on:click={openSchedule}
>
  <span>Schedule</span>
  <span
    ><svg
      class="h-9 w-6"
      xmlns="http://www.w3.org/2000/svg"
      xml:space="preserve"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="black"
      fill-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="2"
      clip-rule="evenodd"
      fill="currentColor"
    >
      <path
        d="M2.049 11A10.012 10.012 0 0 1 11 2.049V4a1 1 0 0 0 2 0V2.049c4.721.47 8.481 4.23 8.951 8.951H20a1 1 0 0 0 0 2h1.951A10.012 10.012 0 0 1 13 21.951V20a1 1 0 0 0-2 0v1.951A10.012 10.012 0 0 1 2.049 13H4a1 1 0 0 0 0-2H2.049ZM11 8v3.586l-3.707 3.707a1 1 0 0 0 1.414 1.414l4-4A.997.997 0 0 0 13 12V8a1 1 0 0 0-2 0Z"
      />
    </svg></span
  >
</button>

<dialog bind:this={scheduleDialog} class="bg-transparent">
  <div class="mx-auto max-w-7xl">
    <div class="py-10">
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center min-w-full">
          <a
            class="font-bold flex gap-x-2 hover:scale-105 transition-all duration-100 ease-in-out"
            href="/2023-festival-schedule.pdf"
          >
            <span>download</span><span
              ><svg
                class="h-10 w-6"
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                viewBox="0 0 24 24"
                fill="currentColor"
                ><switch><g><path d="M7 16 0 9h4V0h6v9h4z" /></g></switch></svg
              ></span
            >
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
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
            >
              <table class="min-w-full">
                <thead>
                  <tr>
                    <th />
                    <th class="text-secondary-300">BEWARE Stage</th>
                    <th class="text-base-300">VFW Stage</th>
                    <th class="text-base2-300">ALLEY Stage</th>
                    <th class="text-tertiary-300">LIBRARY Stage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="text-white">1:00</th>
                    <td class="text-secondary-200">MURAL</td>
                    <td />
                    <td />
                    <td class="text-tertiary-200" rowspan="9"
                      >Kid Art Activities<br />All Day</td
                    >
                  </tr>
                  <tr>
                    <th class="text-white">1:20</th>
                    <td class="text-secondary-200">Lincoln HS</td>
                    <td class="text-base-200">TMB</td>
                    <td class="text-base2-200">Better As</td>
                  </tr>
                  <tr>
                    <th class="text-white">1:40</th>
                    <td class="text-secondary-200">Tacomarama</td>
                    <td class="text-base-200">TMB</td>
                    <td class="text-base2-200">One Love</td>
                  </tr>
                  <tr>
                    <th class="text-white">2:00</th>
                    <td class="text-secondary-200">Filthy FC</td>
                    <td class="text-base-200">Sound M.</td>
                    <td class="text-base2-200">One Love</td>
                  </tr>
                  <tr>
                    <th class="text-white">2:20</th>
                    <td class="text-secondary-200">Filthy FC</td>
                    <td class="text-base-200">Sound M.</td>
                    <td class="text-base2-300">Sticks & B.</td>
                  </tr>
                  <tr>
                    <th class="text-white">2:40</th>
                    <td class="text-secondary-200">Soul J.</td>
                    <td class="text-base-200">AGAB</td>
                    <td class="text-base2-200">Artesian</td>
                  </tr>
                  <tr>
                    <th class="text-white">3:00</th>
                    <td class="text-secondary-200">Soul J.</td>
                    <td class="text-base-200">Brassless C.</td>
                    <td class="text-base2-200">Artesian</td>
                  </tr>
                  <tr>
                    <th class="text-white">3:20</th>
                    <td class="text-secondary-200">Unexpected</td>
                    <td class="text-base-200">Neon</td>
                    <td class="text-base2-200">Bigfoot</td>
                  </tr>
                  <tr>
                    <th class="text-white">3:40</th>
                    <td class="text-secondary-200">Unexpected</td>
                    <td class="text-base-200">Neon</td>
                    <td class="text-base2-200">Bigfoot</td>
                  </tr>
                  <tr>
                    <th class="text-white">4:00</th>
                    <td class="text-secondary-200">Brass Cats</td>
                    <td class="text-base-200">Chatic</td>
                    <td class="text-base2-200">VamoLá</td>
                    <td class="text-tertiary-200">APCC<br />Cambodian</td>
                  </tr>
                  <tr>
                    <th class="text-white">4:20</th>
                    <td class="text-secondary-200">Brass Cats</td>
                    <td class="text-base-200">Chatic</td>
                    <td class="text-base2-200">Analog B.</td>
                    <td class="text-tertiary-200">APCC Krusar</td>
                  </tr>
                  <tr>
                    <th class="text-white">4:40</th>
                    <td class="text-secondary-200">APCC Taiko</td>
                    <td class="text-base-200">Tacomarama</td>
                    <td class="text-base2-200">Analog B.</td>
                    <td class="text-tertiary-200">APCC Baipouli</td>
                  </tr>
                  <tr>
                    <th class="text-white">5:00</th>
                    <td />
                    <td class="text-base-200"
                      >All Stars<br />All Band<br />Jam!</td
                    >
                    <td />
                    <td />
                  </tr>
                </tbody>
              </table>
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
  th,
  td {
    border: 1px solid white;
    padding: 0.25rem;
    text-align: center;
  }
</style>
