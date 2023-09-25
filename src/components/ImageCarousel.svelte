<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
  export let slides;
</script>

<Splide
  options={{ type: "loop", autoplay: true, interval: 3000 }}
  aria-label="HONK! Fest West 2022"
>
  {#each slides as { img: { src, width, height }, alt }}
    <SplideSlide>
      <img {src} {alt} class="max-h-[36rem]" />
    </SplideSlide>
  {/each}
</Splide>

<style>
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
