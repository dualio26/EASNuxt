<template>
  <div class="bg-accent_light-100 space-y-800">
    <div class="p-4 w-full"></div>

    <PillTextPanel right theme-bg-color="accent_blue-200">
      <template #title>
        <h4 class="text-h4 font-serif">Business Carbon Footprinting</h4>
      </template>
      <template #body>
        <p>
          A carbon footprint is the total greenhouse gas (GHG) emissions caused by an individual, event, organization,
          service, place or product, expressed as carbon dioxide equivalent. Greenhouse gases, can be emitted through
          the burning of fossil fuels, land clearance, production of food, manufactured goods, materials, wood, roads,
          buildings, transportation and other services. Understanding your carbon footprint can help inform you of your
          environmental impact and help to prioritise areas of your life or business where you can make improvements.
        </p>
      </template>
    </PillTextPanel>
    <PillTextPanel left>
      <template #title>
        <h4 class="text-h4 font-serif">How we work with you</h4>
      </template>
      <template #body>
        <p>
          EAS will work with you to understand your carbon footprint boundary and support you through the data
          collection phase. We will produce a detailed carbon footprint report and work with you to identify options for
          taking action to reduce your emissions.
        </p>
      </template>
    </PillTextPanel>
    <PillTextPanel left>
      <template #title>
        <h4 class="text-h4 font-serif">Cost of Service</h4>
      </template>
      <template #body>
        <p>
          Business Specific GHG Account Setup and First Year Estimate - $2500 +GST. Annual Report to Track Reductions as
          you implement your Action Plan– $650 +GST.
        </p>
        <p>
          If your business is looking for specific certification against a standard or support in developing business
          processes to Measure and Report your Environmental Performance EAS can provide a cost estimate on Request.
        </p>
      </template>
    </PillTextPanel>
    <PillTextPanel left theme-bg-color="accent_blue-200">
      <template #title>
        <h4 class="text-h4 font-serif">Holiday Home Carbon Footprinting</h4>
      </template>
      <template #body>
        <p>
          Understanding the carbon footprint of your short term holiday rental can help inform you of your environmental
          impact and help to prioritise areas of your where you and your visitors can make reductions.
        </p>
      </template>
    </PillTextPanel>
    <PillTextPanel left>
      <template #title>
        <h4 class="text-h4 font-serif">How we work with you</h4>
      </template>
      <template #body>
        <p>
          EAS will develop a carbon footprint based on a fixed boundary related to your visitor accommodation and
          support you through the data collection phase. We will produce a carbon footprint report and advise how you
          can reduce emissions and then offset the rest.
        </p>
      </template>
    </PillTextPanel>
    <PillTextPanel left>
      <template #title>
        <h4 class="text-h4 font-serif">Cost of Service</h4>
      </template>
      <template #body>
        <p>Annual estimate of your short term rental accommodation emissions - $380 +GST.</p>
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
