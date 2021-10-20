<template>
  <div class="bg-accent_light-100 space-y-800">
    <div class="p-4 w-full"></div>
    <BasePanel>
      <img class="w-screen" src="/images/WAIWanaka2.jpg" alt="Landscape" />
    </BasePanel>
    <PillTextPanel left>
      <template #title>
        <h4 class="text-h4 font-serif">WAI Wanaka</h4>
      </template>

      <template #body>
        <p>
          WAI Wānaka’s vision is to safeguard and enhance water quality, ecosystem function and biodiversity within the
          Upper Clutha basin. <br /><br />
          Moving at pace, WAI Wānaka aims to connect the many individuals, community groups, iwi, landowners and
          businesses undertaking positive work towards building healthy ecosystems and supporting community
          wellbeing.<br /><br />
          Taking a whole-of-basin approach, WAI encourage and facilitate science (including planning, research and
          monitoring), community action and educational projects and programmes relating to these purposes.<br /><br />
          WAI Wānaka has received funding from Sustainable Business Network and the Ministry for Primary Industries to
          deliver measurable benefits for the environment alongside providing much-needed local employment. Part of this
          program was to help landholders in the Upper Clutha Basin to estimate farm greenhouse gas emissions.
        </p>
      </template>
    </PillTextPanel>
    <PillTextPanel left theme-bg-color="accent_blue-200">
      <template #title>
        <h4 class="text-h4 font-serif">How we helped</h4>
      </template>
      <template #body>
        <p>
          EAS trained WAI Wānaka staff on the technical elements of greenhouse gas accounting in the agriculture sector
          and put that in context of the emerging sector regulation being proposed by
          <a href="https://hewakaekenoa.nz/">He Waka Eka Noa</a>
          . WAI Wānaka staff were then prepared to reach out to the agriculture sector as extension staff to support the
          landholders to develop a farm greenhouse gas figure. We also developed reporting templates and FAQs material
          to help with the communication and capacity building of landholders in the region.
        </p>
      </template>
    </PillTextPanel>
    <PillTextPanel left>
      <template #title>
        <h4 class="text-h4 font-serif">What Difference did we make?</h4>
      </template>
      <template #body>
        <p>
          With our support, WAI Wānaka staff have made great progress towards all landholders in the Upper Clutha Basin
          to estimate their greenhouse gas emissions. As a result, landholders in the District know more about the
          greenhouse gas impact of their businesses and can start to explore and understand the options they have
          available to meet the National Governments proposed reduction targets for the sector. People are starting to
          ask the hard questions on Agriculture and climate change mitigation in the District. These questions start the
          move towards change.
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
import PillTextPanel from "@/components/organisims/PillTextPanel";
import BasePanel from "@/components/organisims/BasePanel";
export default {
  components: {
    PillTextPanel,
    BasePanel,
  },
};
</script>
