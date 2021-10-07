<template>
  <div>
    <client-only placeholder="loading...">
      <Header PubsCa="/#Pubs" />
    </client-only>

    <div class="SContent" style="margin-top: 5%">
      <div class="C1">
        <img
          id="Img1"
          class="Pimg Img3"
          src="../images/1561085141286.png"
          alt=""
        />
      </div>
      <div class="C2">
        <h1>
          Dr. Carly Green - Managing Director / Principal (Environmental
          Monitoring)
        </h1>
        <p>
          Carly has been involved in Global Climate Change mitigation for over
          20 years. She holds a PhD in International Climate Change Policy
          related to the Agriculture, Forestry and Other Land Use (AFOLU)
          sector. Carly co-founded Environmental Accounting Services in 2007.
          Carly has contributed significantly to guidance and standards relating
          to greenhouse gas measurement reporting and verification in the AFLOU
          sector through her roles as an IPCC Lead Author, Methods and Guidance
          Manager of the Global Forest Observations Initiative, and as Lead
          author on Including Coastal Wetlands in National Greenhouse Gas
          Inventories. She is also a recognised Verified Carbon Standard
          independent expert. Carly’s passion is developing environmental
          monitoring systems for international reporting and informing decision
          making to drive emission reductions.
          <br /><br />
        </p>
      </div>
    </div>

    <div class="SContent">
      <div class="C1">
        <img class="Pimg Img3" src="../images/1561085141286.png" alt="" />
      </div>
      <div class="C2">
        <h1>Michael Green – Business Manager / Principal (Software)</h1>
        <p>
          Michael is a founding Director of Environmental Accounting Services
          and heads up our Software Division. Michael is focused on managing
          data and providing tools that make greenhouse gas accounting and
          reporting integrated into business systems. Michael has worked across
          a range of business and government levels.
        </p>
      </div>
    </div>

    <div class="SContent">
      <div class="C1">
        <img class="Pimg Img3" src="../images/1561085141286.png" alt="" />
      </div>
      <div class="C2">
        <h1>Tami Horler – Business Administrator</h1>
        <p>
          Tami’s attention to detail makes sure EAS has the operational
          environment to keep both our staff and clients happy. She is
          passionate about organisational finance and human resources and is
          currently working towards her Business Management degree.
        </p>
      </div>
    </div>

    <div class="SContent">
      <div class="C1">
        <img class="Pimg Img3" src="../images/1561085141286.png" alt="" />
      </div>
      <div class="C2">
        <h1>David Chambers – Technical Consultant</h1>
        <p>
          David is a Professional Engineer from the UK with a Masters Degree in
          Mechanical Engineering and career background in Power Generation and
          Renewable Energy. He is working with businesses to understand the
          environmental impact of their activities through greenhouse gas
          accounting and supporting them to make sustainability and efficiency
          improvements aligned with their business and environmental goals.
        </p>
      </div>
    </div>

<<<<<<< HEAD
    <div class="C2">
      <h1>
        David Chambers – Technical Consultant 
      </h1>
      <p>
        Carly has been involved in Global Climate Change mitigation for over 20
        years. She holds a PhD in International Climate Change Policy related to
        the Agriculture, Forestry and Other Land Use (AFOLU) sector. Carly
        co-founded Environmental Accounting Services in 2007. Carly has
        contributed significantly to guidance and standards relating to
        greenhouse gas measurement reporting and verification in the AFLOU
        sector through her roles as an IPCC Lead Author, Methods and Guidance
        Manager of the Global Forest Observations Initiative, and as Lead author
        on Including Coastal Wetlands in National Greenhouse Gas Inventories.
        She is also a recognised Verified Carbon Standard independent expert.
        Carly’s passion is developing environmental monitoring systems for
        international reporting and informing decision making to drive emission
        reductions.
        <br /><br />
      </p>
    </div>

=======
>>>>>>> 8e7c45019aa71c0f945549288f82f49c74fbad1f
    <div class="SContent">
      <div class="C1">
        <img class="Pimg Img3" src="../images/Eamon.png" alt="" />
      </div>
      <div class="C2">
        <h1>Eamon Green –Junior Software Developer</h1>
        <p>
          Eamon is a Junior Java Script developer with EAS. He has a passion for
          communication through digital media. He has worked on a number content
          management systems, improving the interactive display environments to
          connect people to data and information. Eamon supports the development
          of EAS software solutions for information management, calculation
          tools, communication of technical information and capacity building.
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
