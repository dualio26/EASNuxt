<template>
  <div class="bg-accent_light-100 space-y-800">
    <div class="p-4 w-full"></div>
    <div class="flex picture-fill w-full">
      <img class="w-screen" src="/images/WaoBanner.png" alt="Landscape" />
    </div>
    <PillTextPanel left>
      <template #title>
        <h4 class="text-h4 font-serif">Wao Wanaka</h4>
      </template>

      <template #body>
        <p>
          Wao is a charitable trust dedicated to educating, inspiring and enabling New Zealand communities to accelerate
          beyond sustainability towards a thriving future. Based in the Southern Lakes region, Wao look to inspire,
          educate and enable communities to look towards the opportunities created by this transition and help to shape
          a future that looks towards not just a sustainable future, but one where people give back more than they take.
          <br /><br />
          Each year the Wao Summit is one of the trust's main events, providing an annual check-in for the community to
          see how they are tracking towards the vision. The 2021 Summit will focus on the cross-pollination of ideas and
          how people can collaboratively build more resilient communities.
        </p>
      </template>
    </PillTextPanel>
    <PillTextPanel left theme-bg-color="accent_green_3-200">
      <template #title>
        <h4 class="text-h4 font-serif">How we helped</h4>
      </template>
      <template #body>
        <p>
          Staff at EAS lead lead a series of workshops at the Wao Summit 2021 focused on building capacity in greenhouse
          gas accounting. The workshops were designed to ensure that participants are informed and motivated to make
          reductions after the events. <br /><br />
          We designed the workshops into two phases:<br /><br />
          <b>Phase 1:</b> Work with a motivated small group of leading environmental tourism businesses from Wanaka to
          develop greenhouse gas footprints for their businesses so they each ‘Know their Number’. With this information
          a business specific Reduction Action Plan was developed based on Science Based Targets.<br /><br />
          <b>Phase 2:</b> Engage cross sector businesses and individuals during the summit week in a series of targeted
          workshops, bringing the Phase 1 Leaders experiences to each of these workshops in a peer-to-peer learning
          environment.
        </p>
      </template>
    </PillTextPanel>
    <PillTextPanel left>
      <template #title>
        <h4 class="text-h4 font-serif">What Difference did we make?</h4>
      </template>
      <template #body>
        <p>
          EAS created an environment where small business owners have the tools and knowledge to make realistic and
          meaningful changes in their operations to reduce greenhouse gas emissions. The structure of the workshops
          provided a collaborative space where local small to medium businesses could discuss the possibilities of
          informing visitors to the tourist town of Wanaka of their impact from their visit and to provide opportunities
          to influence the local environment in a positive way. It is hoped that his information and the actions of
          Wanaka businesses will travel home with visitors and catalyse change in their home communities.
          <br /><br />
          Visit <a href="https://www.wao.co.nz" target="_blank">Wao Wanaka</a> for action and collaboration on climate
          change mitigation in the Wanaka community.
        </p>
      </template>
    </PillTextPanel>
    <footer>
      <BasePanel theme-bg-color="accent_dark-800" theme-color="accent_light-100">
        <div class="p-300 grid md:grid-flow-col md:grid-rows-1 md:grid-cols-3 grid-flox-row grid-cols-1 gap-4">
          <a href="#Top">
            <font-awesome-icon icon="home" class="text-display-2 text-accent_orange-300"></font-awesome-icon>
          </a>
          <ul>
            <li>
              <p><a href="tel:+6434248100" class="font-serif text-accent_orange-300">Phone:</a> +64 3 4248100</p>
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
import PillTextPanel from "@/components/organisims/PillTextPanel";
import BasePanel from "@/components/organisims/BasePanel";
export default {
  components: {
    PillTextPanel,
    BasePanel,
  },
};
</script>
