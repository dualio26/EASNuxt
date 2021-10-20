<template>
  <div class="bg-accent_light-100 space-y-800">
    <BasePanel>
      <img class="w-screen" src="/images/Landscape.svg" alt="Landscape" />
    </BasePanel>
    <BasePanel class="py-300 m-0">
      <PillHeading left theme-color="accent_light-100" theme-bg-color="accent_blue-300">
        <template #title>
          <h4 id="1" class="text-h4 font-serif">What are other countries doing about climate change?</h4>
        </template>
      </PillHeading>
      <div class="flex flex-col p-300 spave-y-300 prose max-w-none">
        <p>
          Through the 2015 Paris Agreement, world governments committed to curbing global temperature rise to well-below
          2°C above pre-industrial levels and pursuing efforts to limit warming to 1.5°C. In 2018, the Intergovernmental
          Panel on Climate Change warned that global warming must not exceed 1.5°C to avoid the catastrophic impacts of
          climate change. To achieve this, GHG emissions must halve by 2030 – and drop to net-zero by 2050. We have
          limited time for action and the private sector has a crucial role to play – every sector in every market must
          transform. The World Resources Institute provides an up to date Interactive Chart of Changes in
          <a href="https://www.wri.org/insights/interactive-chart-shows-changes-worlds-top-10-emitters"
            >the World's Top 10 Emitters</a
          >
          to keep you updated of the global action.
        </p>
      </div>
    </BasePanel>

    <BasePanel class="py-300 m-0">
      <PillHeading right theme-color="accent_light-100" theme-bg-color="accent_green_3-300">
        <template #title>
          <h4 id="2" class="text-h4 font-serif">What are science based targets?</h4>
        </template>
      </PillHeading>
      <div class="flex flex-col p-300 spave-y-300 prose max-w-none">
        <p>
          Science-based targets provide a clearly-defined pathway for companies to reduce greenhouse gas (GHG)
          emissions, helping prevent the worst impacts of climate change and future-proof business growth. Targets are
          considered ‘science-based’ if they are in line with what the latest climate science deems necessary to meet
          the goals of the Paris Agreement – limiting global warming to well-below 2°C above pre-industrial levels and
          pursuing efforts to limit warming to 1.5°C. Setting a science-based target is a powerful tool for helping a
          company identify opportunities for efficiencies and for managing risk. But more importantly, for harnessing
          innovation as lower emissions technologies, new products and customer needs offer competitive advantages to
          those who move at the right time. Yes, it’s a challenge, but there’s no shortage of help with how to do it.
          There is growing interest in science-based emissions targets and businesses are already cutting emissions at
          scale and reporting that adopting a science-based target:
        </p>
        <ul>
          <li>Boosts profitability</li>
          <li>Improves investor confidence</li>
          <li>Drives innovation</li>
          <li>Reduces regulatory uncertainty</li>
          <li>Strengthens brand reputation</li>
        </ul>
      </div>
    </BasePanel>
    <BasePanel class="py-300 m-0">
      <PillHeading left theme-color="accent_light-100" theme-bg-color="accent_orange-300">
        <template #title>
          <h4 id="3" class="text-h4 font-serif">What are scope 3 emissions and why do they matter?</h4>
        </template>
      </PillHeading>
      <div class="flex flex-col p-300 spave-y-300 prose max-w-none">
        <p>
          Did you know that scope 3 makes up the majority of emissions? In fact, they can account for up to 80%. Scope 3
          emissions are indirect emissions from your supply chain, such as from the activities of your suppliers and
          consumers. They include both upstream and downstream emissions. There are a number of benefits associated with
          measuring Scope 3 emissions. For many companies, the majority of their greenhouse gas (GHG) emissions and cost
          reduction opportunities lie outside their own operations. By measuring Scope 3 emissions, organisations can:
        </p>
        <ul>
          <li>Assess where the emission hotspots are in their supply chain</li>
          <li>Identify resource and energy risks in their supply chain</li>
          <li>
            Identify which suppliers are leaders and which are laggards in terms of their sustainability performance
          </li>
          <li>Identify energy efficiency and cost reduction opportunities in their supply chain</li>
          <li>Engage suppliers and assist them to implement sustainability initiatives</li>
          <li>Improve the energy efficiency of their products</li>
          <li>Positively engage with employees to reduce emissions from business travel and employee commuting</li>
        </ul>
      </div>
    </BasePanel>
    <BasePanel class="py-300 m-0">
      <PillHeading right theme-color="accent_light-100" theme-bg-color="accent_green_3-300">
        <template #title>
          <h4 id="4" class="text-h4 font-serif">Absolute vs Intensity targets. What’s the difference?</h4>
        </template>
      </PillHeading>
      <div class="flex flex-col p-300 spave-y-300 prose max-w-none">
        <p>
          Climate change requires an absolute emissions reduction and this is part of an “climate integrity check” of
          any science based target. However, companies are mostly setting intensity targets at the point of sales –
          which do not necessarily guarantee absolute emission reductions, particularly in the short-term. Intensity
          targets can be aligned with science based targets provided that the consideration of growth expectations still
          leads to an absolute emission reduction. Absolute emissions targets seem to raise an important psychological
          barrier in business actors in terms of the “freedom to do business” - even if businesses already operate under
          all sorts of constraints. On the other hand, for many stakeholders, intensity targets are seen as “potential
          greenwashing” because they do not guarantee absolute emission reductions, even when the reductions in
          intensity are very significant and it is extremely unlikely that companies in established businesses would be
          able to grow their activities in such a way that it would not lead to an absolute emission reduction.
        </p>
      </div>
    </BasePanel>
    <footer>
      <BasePanel theme-bg-color="accent_dark-800" theme-color="accent_light-100">
        <div class="p-300 grid md:grid-flow-col md:grid-rows-1 md:grid-cols-3 grid-flox-row grid-cols-1 gap-4">
          <a href="#Top">
            <font-awesome-icon icon="home" class="text-display-2 text-accent_orange-300"></font-awesome-icon>
          </a>
          <ul>
            <li>
              <p><a href="tel:+6432428100" class="font-serif text-accent_orange-300">Phone:</a> +64 3 2428100</p>
            </li>

            <li>
              <p>
                <a href="mailto:info@enviroaccounts.com" class="font-serif text-accent_orange-300">Email:</a>
                info@enviroaccounts.com
              </p>
            </li>
          </ul>
          <p><b class="text-accent_orange-300">&copy;</b> Environmental Accounting Services 2021</p>
        </div>
      </BasePanel>
    </footer>
  </div>
</template>
<script>
import PillHeading from "@/components/atoms/PillHeading";
import BasePanel from "@/components/organisims/BasePanel";
export default {
  components: {
    PillHeading,
    BasePanel,
  },
};
</script>
