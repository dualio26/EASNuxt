<template>
  <div class="bg-accent_light-100 space-y-800">
    <div class="p-4 w-full"></div>
    <PillTextPanel right theme-bg-color="accent_green_3-200">
      <template #title>
        <h4 class="text-h4 font-serif">Carbon Credits</h4>
      </template>

      <template #body>
        <p>
          EAS support New Zealand landowners to enter eligible forests into the Emissions Trading Scheme. <br /><br />
          Landholders currently have until December 2022 to register eligible land and generate New Zealand Emission
          Trading Scheme units for the period 2018 – 2022. <br /><br />
          After the December 2022 the reporting period ends and landholders will not be able to register any carbon
          sequestered prior to December 2022.
        </p>
      </template>
    </PillTextPanel>
    <PillTextPanel left>
      <template #title>
        <h4 class="text-h4 font-serif">How we work with you</h4>
      </template>
      <template #body>
        <p>
          <b>Step 1 - Pre-feasibility Assessment</b><br />
          We check your land for existing eligible forests under the New Zealand Emissions Trading Scheme and work with
          you to define additional potential eligible lands or areas you wish to plant. We combine this information and
          provide you a report showing initial estimates of carbon credit potential to help you decide if it is worth
          proceeding to development. <br />
          <br />
          <b>Step 2 - Development</b><br />
          We work with you to collect all required documentation and evidence to enter your lands into the New Zealand
          Emission Trading Scheme. If your area is over 100ha we can ensure all the field work required is completed in
          accordance with the Ministry requirements. At the completion of this stage your eligible forest areas are
          registered and any carbon credits registered. <br />
          <br />
          <b>Step 3 – Ongoing Reporting</b><br />
          We file your returns during the reporting period and ensure your registered forests meet all the regulatory
          reporting requirements
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
