<template>
  <div class="bg-accent_light-100 space-y-800">
    <div class="p-4 w-full"></div>
    <div class="banner">
      <div class="scrollable">
        <img src="/images/SAANZSnip.jpg" alt="Landscape" />
      </div>
    </div>
    <PillTextPanel left>
      <template #title>
        <h4 class="text-h4 font-serif">Ski Areas Association of New Zealand</h4>
      </template>

      <template #body>
        <p>
          Made up of representatives from commercial and club ski fields across New Zealand, SAANZ’s sustainability
          group, approached EAS well aware of the impacts that climate change can have on the future of the ski and
          snow-sports industry; an industry so intrinsically linked to weather, nature and the environment.
        </p>
      </template>
    </PillTextPanel>
    <PillTextPanel left theme-bg-color="accent_blue-200">
      <template #title>
        <h4 class="text-h4 font-serif">How we helped</h4>
      </template>
      <template #body>
        <p>
          In preparation for the 2021 Winter Ski Season, EAS supported the Ski Area Association of New Zealand (SAANZ)
          to create a greenhouse gas inventory calculator which will allow them to estimate their environmental impact
          as an organization for the first time.<br /><br />
          Following the guidance of the
          <a href="https://ghgprotocol.org/">GHG Protocol</a>, ISO standard for Organizational Greenhouse Gas Accounting
          14064:1 and guidance from the Ministry of Environment of New Zealand, SAANZ’s and EAS carried out workshops to
          establish their organizational boundaries and emissions activities (known as scopes) which were common across
          the organization and will be accounted for in the inventory.<br /><br />
          With the emissions producing activities defined, EAS created a bespoke calculator tool which will allow
          individual ski fields in enter their input data, such as the total kWh of electricity purchased and litres of
          diesel fuel burnt, in order to calculate their total emissions across a year.
        </p>
      </template>
    </PillTextPanel>
    <PillTextPanel left>
      <template #title>
        <h4 class="text-h4 font-serif">What Difference did we make?</h4>
      </template>
      <template #body>
        <p>
          The calculator tool was distributed to SAANZ’s members across the country to be used for the 2021 Winter
          Season to allow ski fields across New Zealand to calculate their greenhouse gas emissions for the first time.
          Once the data is collected for this first baseline year, EAS will support the individual ski fields to
          understand their emissions profiles and provide technical guidance and recommendations for ways to reduce
          their emissions and impact on the climate.<br /><br />
          This guidance can include technical solutions for energy efficiency improvements, options for offsetting
          emissions and progression to independent environmental verification.<br /><br />
          SAANZ hope that our collaborative work in this field will help to inform and inspire their staff, patrons and
          the wider local and snowsports communities to work together to operate sustainably and reduce their industry’s
          impact on our environment.
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
