<template>
  <div class="bg-accent_light-100 space-y-800">
    <BasePanel>
      <img src="/images/Landscape.svg" alt="Landscape" />
    </BasePanel>
    <BasePanel class="lg:px-lg px-sm">
      <p class="text-center lg:text-display-1 text-display-3 font-serif">Think Global Act Local</p>
      <div class="flex justify-center space-x-sm lg:space-x-lg">
        <Button
          theme-color="accent_dark-700"
          theme-bg-color="accent_blue-200"
          to="carbonfootprint"
          tag="NuxtLink"
          type="btn"
          class="flex rounded-full justify-center text-center"
        >
          <span class="lg:text-2xl text-lg font-serif">Carbon Footprint</span>
        </Button>
        <Button
          theme-color="accent_light-100"
          theme-bg-color="accent_green_3-400"
          to="carboncredits"
          tag="NuxtLink"
          type="btn"
          class="flex rounded-full justify-center text-center"
        >
          <span class="lg:text-2xl text-lg font-serif">Carbon Credits</span>
        </Button>
      </div>
      <p class="text-center lg:text-display-2 text-display-4 font-serif">
        Supporting you in the
        <span style="color: #89b7db">transition</span> to a <span style="color: #86c886">sustainable</span> future.
      </p>
    </BasePanel>

    <PillPanel left theme-bg-color="accent_green_3-200">
      <template #picture>
        <img src="/images/Summit.png" alt="WAOSumImage" />
      </template>
      <template #title>
        <h6 class="text-h6 font-serif">Case Study</h6>
        <h4 class="text-h4 font-serif">WAO Summit</h4>
      </template>
      <template #body>
        <p>
          Wao is a charitable trust dedicated to educating, inspiring and enabling New Zealand communities to accelerate
          beyond sustainability towards a thriving future. Based in the Southern Lakes region, WAO look to inspire,
          educate and enable communities to look towards the opportunities created by this transition and help to shape
          a future that looks towards not just a sustainable future, but one where people give back more than they take.
        </p>
        <NuxtLink to="WaoSum" class="font-serif">Read this case study</NuxtLink>
      </template>
    </PillPanel>
    <PillPanel right theme-bg-color="accent_blue-200">
      <template #picture>
        <img src="/images/WorldBank.png" alt="WorldBankImg" />
      </template>
      <template #title>
        <h6 class="text-h6 font-serif">Case Study</h6>
        <h4 class="text-h4 font-serif">Ski Areas Association of New Zealand</h4>
      </template>
      <template #body>
        <p>
          Made up of representatives from commercial and club ski fields across New Zealand, SAANZ’s sustainability
          group, approached EAS well aware of the impacts that climate change can have on the future of the ski and
          snow-sports industry. An industry so intrinsically linked to weather, nature and the environment.
        </p>
        <NuxtLink to="SkiAre" class="font-serif">Read this case study</NuxtLink>
      </template>
    </PillPanel>

    <PillPanel left theme-bg-color="accent_blue-200">
      <template #picture>
        <img src="/images/WAIWanaka2.png" alt="WorldBankImg" />
      </template>
      <template #title>
        <h6 class="text-h6 font-serif">Case Study</h6>
        <h4 class="text-h4 font-serif">WAI Wānaka</h4>
      </template>
      <template #body>
        <p>
          WAI Wānaka’s vision is to safeguard and enhance water quality, ecosystem function and biodiversity within the
          Upper Clutha basin. Moving at pace, WAI Wānaka aims to connect the many individuals, community groups, iwi,
          landowners and businesses undertaking positive work towards building healthy ecosystems and supporting
          community wellbeing.
        </p>
        <NuxtLink to="WAIWan" class="font-serif">Read this case study</NuxtLink>
      </template>
    </PillPanel>

    <BasePanel class="lg:px-lg px-sm">
      <h1 class="text-center lg:text-display-3 text-display-3 font-serif">Our Clients</h1>
      <div
        class="
          md:mx-48
          mx-8
          grid
          md:grid-flow-col md:grid-cols-3 md:grid-rows-2
          grid-flow-row grid-cols-2
          gap-8
          place-items-center
        "
      >
        <ClientCard>
          <img src="/images/nz.png" />
        </ClientCard>
        <ClientCard>
          <img src="/images/WAO-02.svg" />
        </ClientCard>
        <ClientCard>
          <img src="/images/201801_gfoi_logo.png" />
        </ClientCard>
        <ClientCard>
          <img src="/images/ipcc_altlogo_short_rgb.png" />
        </ClientCard>
        <ClientCard>
          <img src="/images/worldbankLogo.png" />
        </ClientCard>
        <ClientCard>
          <img src="/images/wai-wanaka-logo.png" />
        </ClientCard>
      </div>
    </BasePanel>

    <BasePanel
      theme-color="accent_light-100"
      theme-bg-color="accent_blue-900"
      class="grid-paper relative py-300 m-0 z-0"
    >
      <PillHeading right theme-color="accent_light-100" theme-bg-color="accent_blue-300" class="relative z-10">
        <template #title>
          <h2 class="text-h2 font-bold font-sans">Services</h2>
        </template>
      </PillHeading>
      <div class="m-700 w-sceen-8">
        <client-only>
          <Carousel class="flex h-full" :per-page="1" navigation-enabled center-mode :space-padding="20">
            <Slide>
              <ServicesPanel left theme-color="accent_light-100" theme-bg-color="accent_-900">
                <template #picture>
                  <img class="w-full" src="/images/Question.svg" alt="" />
                </template>
                <template #title>
                  <h4 class="text-h4 font-serif">What we do</h4>
                </template>
                <template #body>
                  <p>We support clients to:</p>
                  <ul>
                    <li>develop and implement climate change mitigation policy,</li>
                    <li>meet greenhouse gas regulatory requirements,</li>
                    <li>set science based targets and drive operational efficiencies,</li>
                    <li>protect and enhance the environment</li>
                    <li>market environmental credentials.</li>
                  </ul>
                </template>
              </ServicesPanel>
            </Slide>
            <Slide>
              <ServicesPanel left theme-color="accent_light-100" theme-bg-color="accent_blue-900">
                <template #picture>
                  <img class="w-full" src="/images/SGraph.svg" alt="" />
                </template>
                <template #title>
                  <h4 class="text-h4 font-serif">Measure, Report and Verify</h4>
                </template>
                <template #body>
                  <p>
                    We support measurement, reporting and verification of greenhouse gas emissions using international
                    best practice standards. We know the standards and technical details and how they intersect with
                    operations.
                  </p>
                  <p>We can help with:</p>
                  <ul>
                    <li>setting boundaries,</li>
                    <li>applying methodologies and</li>
                    <li>advising the right calculation tools for your needs.</li>
                    <li>development of measurement and reporting systems.</li>
                  </ul>
                </template>
              </ServicesPanel>
            </Slide>
            <Slide>
              <ServicesPanel left theme-color="accent_light-100" theme-bg-color="accent_blue-900">
                <template #picture>
                  <img class="w-full" src="/images/Cogs.svg" alt="" />
                </template>
                <template #title>
                  <h4 class="text-h4 font-serif">Capacity Building and Training</h4>
                </template>
                <template #body>
                  <p>We offer both online and face-to-face training services in:</p>
                  <ul>
                    <li>International and National Climate Change Policy</li>
                    <li>GHG Inventories and Footprinting</li>
                    <li>Forest Monitoring Systems for Carbon Credits</li>
                    <li>GHG Accounting in Forestry and Agriculture</li>
                    <li>Role of remote sensing in land use change monitoring</li>
                    <li>Business systems for GHG accounting</li>
                  </ul>
                </template>
              </ServicesPanel>
            </Slide>
            <Slide>
              <ServicesPanel left theme-color="accent_light-100" theme-bg-color="accent_blue-900">
                <template #picture>
                  <img class="w-full" src="/images/Arrows.svg" alt="" />
                </template>
                <template #title>
                  <h4 class="text-h4 font-serif">Carbon Projects and Emissions Trading Schemes</h4>
                </template>
                <template #body>
                  <p>
                    We provide an end-to-end solution for clients to realise carbon credits on their lands in either
                    voluntary or regulated markets.
                  </p>
                  <p>Our services include:</p>
                  <ul>
                    <li>application of remote sensing and GIS technologies,</li>
                    <li>implementation of appropriate models and calculation frameworks,</li>
                    <li>complete and transparent documentation to meet third party verification requirements.</li>
                  </ul>
                </template>
              </ServicesPanel>
            </Slide>
          </Carousel>
        </client-only>
      </div>
    </BasePanel>

    <BasePanel class="">
      <PillHeading right theme-color="accent_light-100" theme-bg-color="accent_blue-800">
        <template #title>
          <h2 class="text-h2 font-bold font-sans">Publications</h2>
        </template>
      </PillHeading>
      <div class="md:p-900 p-600 grid md:grid-flow-col md:grid-rows-3 md:grid-cols-2 grid-flox-row grid-cols-1 gap-4">
        <Link tag="a" native-type="a" href="https://www.reddcompass.org/search-the-mgd" class="row-span-2">
          <VerticalCard theme-color="accent_light-100" theme-bg-color="accent_green_2-700" class="card1 h-full">
            <template #title>
              <h2 class="font-serif">GFOI Methods and Guidance Document</h2>
            </template>
            <template #body>
              <p>
                Integration of remote-sensing and ground-based observations for estimation of emissions and removals of
                greenhouse gases in forests.
              </p>
            </template>
          </VerticalCard>
        </Link>
        <Link tag="a" native-type="a" href="https://doi.org/10.1016/j.rse.2019.111492">
          <VerticalCard theme-color="accent_light-100" theme-bg-color="accent_green_2-300" class="card2 h-full">
            <template #title>
              <h2 class="font-serif">Remote Sensing of Environment</h2>
            </template>
            <template #body>
              <p>Mitigating the effects of omission errors on area and area change estimates</p>
            </template>
          </VerticalCard>
        </Link>
        <Link tag="a" native-type="a" href="https://www.ipcc-nggip.iges.or.jp/public/2019rf/index.html">
          <VerticalCard theme-color="accent_light-100" theme-bg-color="accent_blue-300" class="card3 h-full">
            <template #title>
              <h2 class="font-serif">IPCC 2019 Refinement</h2>
            </template>
            <template #body>
              <p>2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories</p>
            </template>
          </VerticalCard>
        </Link>
        <Link tag="a" native-type="a" href="https://doi.org/10.3390/rs13112172" class="row-span-2">
          <VerticalCard theme-color="accent_light-100" theme-bg-color="accent_blue-800" class="card4 h-full">
            <template #title>
              <h2 class="font-serif">Capacity Development for Use of Remote Sensing for REDD+ MRV</h2>
            </template>
            <template #body>
              <p>Using Online and Offline Activities: Impacts and Lessons Learned.</p>
            </template>
          </VerticalCard>
        </Link>
      </div>
    </BasePanel>

    <BasePanel theme-color="accent_light-100" class="relative py-900 m-0 z-0">
      <div class="absolute top-0 left-0 right-0 bottom-0 z-0">
        <img class="object-cover h-full w-screen opacity-100 z-0" src="/images/1920px-19.svg" />
      </div>
      <PillHeading right theme-color="accent_light-100" theme-bg-color="accent_orange-300" class="relative z-10">
        <template #title>
          <h2 class="text-h2 font-bold font-sans">Insights</h2>
        </template>
      </PillHeading>
      <div class="relative md:p-900 p-600 grid md:grid-flow-col grid-flox-row gap-4 my-900 z-10 align-item-stretch">
        <div class="flex flex-col h-full spave-y-300">
          <h3 class="mb-auto font-serif">What are other countries doing about climate change?</h3>
          <p class="line-clamp-6">
            Through the 2015 Paris Agreement, world governments committed to curbing global temperature rise to
            well-below 2°C above pre-industrial levels and pursuing efforts to limit warming to 1.5°C. In 2018, the
            Intergovernmental Panel on Climate Change warned that global warming must not exceed 1.5°C to avoid the
            catastrophic impacts of climate change.
          </p>
          <NuxtLink to="Insight#1" class="text-accent_orange-300 font-serif">Read More</NuxtLink>
        </div>
        <div class="flex flex-col h-full spave-y-300">
          <h3 class="mb-auto font-serif">What are science based targets?</h3>
          <p class="line-clamp-6">
            Science-based targets provide a clearly-defined pathway for companies to reduce greenhouse gas (GHG)
            emissions, helping prevent the worst impacts of climate change and future-proof business growth.
          </p>
          <NuxtLink to="Insight#2" class="text-accent_orange-300 font-serif">Read More</NuxtLink>
        </div>
        <div class="flex flex-col h-full spave-y-300">
          <h3 class="mb-auto font-serif">What are scope 3 emissions and why do they matter?</h3>
          <p class="line-clamp-6">
            Did you know that scope 3 makes up the majority of emissions? In fact, they can account for up to 80%. Scope
            3 emissions are indirect emissions from your supply chain, such as from the activities of your suppliers and
            consumers. They include both upstream and downstream emissions.
          </p>
          <NuxtLink to="Insight#3" class="text-accent_orange-300 font-serif">Read More</NuxtLink>
        </div>
        <div class="flex flex-col h-full spave-y-300">
          <h3 class="mb-auto font-serif">Absolute vs Intensity targets. What’s the difference?</h3>
          <p class="line-clamp-6">
            Climate change requires an absolute emissions reduction and this is part of an “climate integrity check” of
            any science based target. However, companies are mostly setting intensity targets at the point of sales –
            which do not necessarily guarantee absolute emission reductions...
          </p>
          <NuxtLink to="Insight#4" class="text-accent_orange-300 font-serif">Read More</NuxtLink>
        </div>
      </div>
    </BasePanel>

    <PillHeading right theme-color="accent_light-100" theme-bg-color="accent_green_3-300" class="relative z-10">
      <template #title>
        <h2 class="text-h2 font-bold font-sans">Who we are</h2>
      </template>
    </PillHeading>
    <BasePanel theme-color="accent_light-100" theme-bg-color="accent_light-100" class="py-300 m-0">
      <div class="m-700 w-sceen-8">
        <client-only>
          <Carousel class="flex h-full" :per-page="1" navigation-enabled center-mode :space-padding="20">
            <Slide>
              <HorizontalCard left class="h-full md:mx-600 mx-300">
                <template #picture>
                  <img src="/images/Carly-staffimage-bw.jpg" alt="Carly" />
                </template>
                <template #title>
                  <h3>Dr. Carly Green</h3>
                </template>
                <template #subtitle>
                  <h4>Managing Director / Principal</h4>
                </template>
                <template #body>
                  <p>
                    Carly has been involved in Global Climate Change mitigation for over 20 years. She holds a PhD in
                    International Climate Change Policy related to the Agriculture, Forestry and Other Land Use (AFOLU)
                    sector. Carly co-founded Environmental Accounting Services in 2007. Carly has contributed
                    significantly to guidance and standards relating to greenhouse gas measurement reporting and
                    verification in the AFLOU sector.
                  </p>
                </template>
              </HorizontalCard>
            </Slide>

            <Slide>
              <HorizontalCard left class="h-full md:mx-600 mx-300">
                <template #picture>
                  <img src="/images/Michael-staffimage-bw.jpg" alt="Michael" />
                </template>
                <template #title>
                  <h3>Michael Green</h3>
                </template>
                <template #subtitle>
                  <h4>Business Manager / Principal</h4>
                </template>
                <template #body>
                  <p>
                    Michael is a founding Director of Environmental Accounting Services and heads up our Software
                    Division. Michael is focused on managing data and providing tools that make greenhouse gas
                    accounting and reporting integrated into business systems. Michael has worked across a range of
                    business and government levels.
                  </p>
                </template>
              </HorizontalCard>
            </Slide>

            <Slide>
              <HorizontalCard left class="h-full md:mx-600 mx-300">
                <template #picture>
                  <img src="/images/Tami-staffimage-bw.jpg" alt="" />
                </template>
                <template #title>
                  <h3>Tami Horler</h3>
                </template>
                <template #subtitle>
                  <h4>Business Administrator</h4>
                </template>
                <template #body>
                  <p>
                    Tami’s attention to detail makes sure EAS has the operational environment to keep both our staff and
                    clients happy. She is passionate about organisational finance and human resources and is currently
                    working towards her Business Management degree.
                  </p>
                </template>
              </HorizontalCard>
            </Slide>

            <Slide>
              <HorizontalCard left class="h-full md:mx-600 mx-300">
                <template #picture>
                  <img src="/images/David-staffimage-bw.jpg" alt="" />
                </template>
                <template #title>
                  <h3>David Chambers</h3>
                </template>
                <template #subtitle>
                  <h4>Technical Consultant</h4>
                </template>
                <template #body>
                  <p>
                    David is a Professional Engineer from the UK with a Masters Degree in Mechanical Engineering and
                    career background in Power Generation and Renewable Energy. He is working with businesses to
                    understand the environmental impact of their activities through greenhouse gas accounting and
                    supporting them to make sustainability and efficiency improvements aligned with their business and
                    environmental goals.
                  </p>
                </template>
              </HorizontalCard>
            </Slide>

            <Slide>
              <HorizontalCard left class="h-full md:mx-600 mx-300">
                <template #picture>
                  <img src="/images/Tim-staffimage-bw.jpg" alt="" />
                </template>
                <template #title>
                  <h3>Tim Graham</h3>
                </template>
                <template #subtitle>
                  <h4>Emissions Trading Scheme Officer</h4>
                </template>
                <template #body>
                  <p>
                    Tim is EAS’s dedicated ETS officer, he is working with local landowners to help them understand how
                    they might be able to create revenue streams and offset greenhouse gas emissions by creating and
                    protecting forest areas so that they can act as carbon sinks. Tim has a Master’s Degree in
                    Mechanical Engineering and four years’ experience in the software development industry in the UK.
                  </p>
                </template>
              </HorizontalCard>
            </Slide>

            <Slide>
              <HorizontalCard left class="h-full md:mx-600 mx-300">
                <template #picture>
                  <img src="/images/Eamon.png" alt="" />
                </template>
                <template #title>
                  <h3>Eamon Green</h3>
                </template>
                <template #subtitle>
                  <h4>Junior Software Developer</h4>
                </template>
                <template #body>
                  <p>
                    Eamon is a Junior Java Script developer with EAS. He has a passion for communication through digital
                    media. He has worked on a number content management systems, improving the interactive display
                    environments to connect people to data and information. Eamon supports the development of EAS
                    software solutions for information management, calculation tools, communication of technical
                    information and capacity building.
                  </p>
                </template>
              </HorizontalCard>
            </Slide>
          </Carousel>
        </client-only>
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
import BasePanel from "@/components/organisims/BasePanel";
import ClientCard from "@/components/organisims/ClientCard";
import ServicesPanel from "@/components/organisims/ServicesPanel";
import Button from "@/components/atoms/Button";
import Carousel from "@/components/carousel/Carousel";
import Link from "@/components/atoms/Link";
import PillHeading from "@/components/atoms/PillHeading";
import PillPanel from "@/components/organisims/PillPanel";
import Slide from "@/components/carousel/Slide";
import VerticalCard from "@/components/organisims/VerticalCard";
import HorizontalCard from "@/components/organisims/HorizontalCard";
export default {
  components: {
    Carousel,
    Slide,
    BasePanel,
    ClientCard,
    ServicesPanel,
    Button,
    Link,
    PillHeading,
    PillPanel,
    VerticalCard,
    HorizontalCard,
  },
};
</script>

<style lang="scss">
.card4 {
  background: radial-gradient(at top right, #fda520 73%, #d17f04 32px);
  margin-bottom: 4%;
}

.card3 {
  background-image: linear-gradient(#3292e0, #3292e0), linear-gradient(#007add, #007add);
  background-repeat: no-repeat;
  background-size: 100% 12%, 100%;
}

.card2 {
  background-image: linear-gradient(#bcd8ee, #bcd8ee), linear-gradient(#5fa5d4, #5fa5d4);
  background-repeat: no-repeat;
  background-size: 100% 90%, 100%;
}

.card1 {
  background: radial-gradient(at bottom left, #569656 73%, #86c886 32px);
}

.card1:hover,
.card2:hover,
.card3:hover,
.card4:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transform: scale(1.075);
}

.grid-paper {
  background-color: #246087;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23397fac' fill-opacity='0.4'%3E%3Cpath opacity='1' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-repeat: repeat;
  color: #f5f3ee;
}
</style>
