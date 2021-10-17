<template>
  <div class="m-800 w-sceen-8">
    <client-only>
      <Carousel class="flex h-full" per-page="1" navigation-enabled center-mode space-padding="50">
        <Slide class="InItem">
          <h2 class="font-serif">What are other countries doing about climate change?</h2>
          <p>
            Through the 2015 Paris Agreement, world governments committed to curbing global temperature rise to
            well-below 2°C above pre-industrial levels and pursuing efforts to limit warming to 1.5°C. In 2018, the
            Intergovernmental Panel on Climate Change warned that global warming must not exceed 1.5°C to avoid the
            catastrophic impacts of climate change.
          </p>
          <NuxtLink to="Insight#1" class="font-serif">Read More</NuxtLink>
        </Slide>
        <Slide class="InItem">
          <h2 class="font-serif">What are science based targets?</h2>
          <p>
            Science-based targets provide a clearly-defined pathway for companies to reduce greenhouse gas (GHG)
            emissions, helping prevent the worst impacts of climate change and future-proof business growth.
          </p>
          <NuxtLink to="Insight#2" class="font-serif">Read More</NuxtLink>
        </Slide>
        <Slide class="InItem">
          <h2 class="font-serif">What are scope 3 emissions and why do they matter?</h2>
          <p>
            Did you know that scope 3 makes up the majority of emissions? In fact, they can account for up to 80%. Scope
            3 emissions are indirect emissions from your supply chain, such as from the activities of your suppliers and
            consumers. They include both upstream and downstream emissions.
          </p>
          <NuxtLink to="Insight#3" class="font-serif">Read More</NuxtLink>
        </Slide>
        <Slide class="InItem">
          <h2 class="font-serif">Absolute vs Intensity targets. What’s the difference?</h2>
          <p>
            Climate change requires an absolute emissions reduction and this is part of an “climate integrity check” of
            any science based target. However, companies are mostly setting intensity targets at the point of sales –
            which do not necessarily guarantee absolute emission reductions...
          </p>
          <NuxtLink to="Insight#4" class="font-serif">Read More</NuxtLink>
        </Slide>
      </Carousel>
    </client-only>
  </div>
</template>

<script>
import Carousel from "@/components/carousel/Carousel";
import Slide from "@/components/carousel/Slide";
export default {
  components: {
    Carousel,
    Slide,
  },
};
</script>
