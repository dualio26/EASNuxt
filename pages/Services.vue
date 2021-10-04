<template>
  <div>
    <client-only placeholder="loading...">
      <Header PubsCa="/#Pubs" />
    </client-only>

    <div class="SContent SBack" style="margin-top: 5%">
      <div class="C1">
        <img class="Simg" src="../images/Question.svg" alt="" />
      </div>
      <div class="C2">
        <h1>What we do</h1>
        <p>
          EAS are a team of accessible, reputable experts who work with you to
          create solutions to transition to sustainable future and mitigate the
          impacts of climate change. Our experienced team of scientists and
          engineers bring global experience and incites when tailoring solutions
          to align business and environmental performance. Our support bridges
          policy and technical solutions including technical specifications and
          methodologies, software, tools, training, capacity building, and
          project management of change.<br /><br />
          We support clients to: <br /><br />
        </p>
        <ul>
          <li>develop and implement climate change mitigation policy,</li>
          <li>meet greenhouse gas regulatory requirements,</li>
          <li>set science based targets and drive operational efficiencies,</li>
          <li>protect and enhance the environment, or</li>
          <li>market environmental credentials.</li>
        </ul>
      </div>
    </div>

    <div class="SContent CMiddle">
      <div class="C1">
        <img class="Simg" src="../images/SGraph.svg" alt="" style="width: 9%" />
      </div>
      <div class="C2">
        <h1>Measure, Report and Verify</h1>
        <p>
          We support measurement, reporting and verification of greenhouse gas
          emissions using international best practice standards. We know the
          standards and technical details and how they intersect with
          operations.<br /><br />
          We can help with: <br /><br />
        </p>
        <ul>
          <li>setting boundaries,</li>
          <li>applying methodologies and</li>
          <li>advising the right calculation tools for your needs.</li>
        </ul>
      </div>
    </div>

    <div class="SContent SBack">
      <div class="C1">
        <img class="Simg" src="../images/Cogs.svg" alt="" style="width: 11%" />
      </div>
      <div class="C2">
        <h1>Capacity Building and Training</h1>
        <p>
          Effective communication and engagement is where change begins. Our
          capacity building and training support combine technical expertise
          with effective, clear instruction tailored to fit the needs of the
          participants.<br /><br />
          We offer both online and face-to-face training services in:
          <br /><br />
        </p>
        <ul>
          <li>International and National Climate Change Policy</li>
          <li>• GHG Inventories and Footprinting</li>
          <li>Forest Monitoring Systems for Carbon Credits</li>
          <li>GHG Accounting in Forestry and Agriculture</li>
          <li>Role of remote sensing in land use change monitoring</li>
          <li>Business systems for GHG accounting</li>
        </ul>
      </div>
    </div>

    <div class="SContent">
      <div class="C1">
        <img
          class="Simg"
          src="../images/Arrows.svg"
          alt=""
          style="width: 11%"
        />
      </div>
      <div class="C2">
        <h1>Carbon Projects and Emissions Trading Schemes</h1>
        <p>
          We support clients to generate carbon credits for a range of voluntary
          and regulated markets. We provide an end-to-end solution for clients
          to realise carbon credits on their lands in either voluntary or
          regulated markets.<br /><br />
          Our services include: <br /><br />
        </p>
        <ul>
          <li>application of remote sensing and GIS technologies,</li>
          <li>
            implementation of appropriate models and calculation frameworks; and
          </li>
          <li>
            complete and transparent documentation to meet third party
            verification requirements.
          </li>
        </ul>
        <br />
        <p>
          EAS can also connect our business clients with landholders/project
          owners to meet carbon zero objectives.
        </p>
      </div>
    </div>

    <InTouch />

    <Footer />
  </div>
</template>

<script>
export default {
  methods: {
    myFunction() {
      const x = document.getElementById('myLinks')
      if (x.style.display === 'block') {
        x.style.display = 'none'
      } else {
        x.style.display = 'block'
      }
    },
    Packages() {
      const x = document.getElementById('PackageChild')
      if (x.style.display === 'block') {
        x.style.display = 'none'
      } else {
        x.style.display = 'block'
      }
    },
    CaseStud() {
      const x = document.getElementById('CaseStudChild')
      if (x.style.display === 'block') {
        x.style.display = 'none'
      } else {
        x.style.display = 'block'
      }
    },
    MobPack() {
      const x = document.getElementById('MobPack')
      if (x.style.display === 'block') {
        x.style.display = 'none'
      } else {
        x.style.display = 'block'
      }
    },
  },
}
</script>
