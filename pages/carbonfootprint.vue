<template>
  <div>
    <client-only placeholder="loading...">
      <Header />
    </client-only>
    <div class="banner">
      <div class="scrollable">
        <img src="../images/Landscape.svg" alt="Landscape" />
      </div>
    </div>

    <div class="CContent">
      <h1>Business Carbon Footprinting</h1>
      <p>
        A carbon footprint is the total greenhouse gas (GHG) emissions caused by
        an individual, event, organization, service, place or product, expressed
        as carbon dioxide equivalent. Greenhouse gases, can be emitted through
        the burning of fossil fuels, land clearance, production of food,
        manufactured goods, materials, wood, roads, buildings, transportation
        and other services. Understanding your carbon footprint can help inform
        you of your environmental impact and help to prioritise areas of your
        life or business where you can make reductions.
      </p>
    </div>
    <div class="CContent CMiddle" style="background-color: #86c886">
      <h1>How we work with you</h1>
      <p>
        EAS will work with you to understand your carbon footprint boundary and
        support you through the data collection phase. We will produce a
        detailed carbon footprint report and work with you to identify options
        for taking action to reduce your emissions.
      </p>
    </div>
    <div class="CContent">
      <h1>Cost of Service</h1>
      <p>
        Business Specific GHG Account Setup and First Year Estimate - $2500
        +GST. Annual Report to Track Reductions as you implement your Action
        Plan– $650 +GST If your business is looking for specific certification
        against a standard or support in developing business processes to
        Measure and Report your Environmental Performance EAS can provide a cost
        estimate on Request.
      </p>
      <button class="RquesBtn">
        <a href="#contact"><b>Request Service</b></a>
      </button>
    </div>

    <div class="CContent">
      <h1>Holiday Home Carbon Footprinting</h1>
      <p>
        Understanding the carbon footprint of your short term holiday rental can
        help inform you of your environmental impact and help to prioritise
        areas of your where you and your visitors can make reductions.
      </p>
    </div>
    <div class="CContent CMiddle" style="background-color: #5fa5d4">
      <h1>How we work with you</h1>
      <p>
        EAS will develop a carbon footprint based on a fixed boundary related to
        your visitor accommodation and support you through the data collection
        phase. We will produce a carbon footprint report and advise how you can
        reduce emissions and then offset the rest.
      </p>
    </div>
    <div class="CContent">
      <h1>Cost of Service</h1>
      <p>
        Annual estimate of your short term rental accommodation emissions - $380
        +GST.
      </p>
      <button class="RquesBtn">
        <a href="#contact"><b>Request Service</b></a>
      </button>
    </div>

    <div class="GIT">
      <h2 class="CTitles">Get in touch to see how we can help you</h2>
      <form action="mailto:eamongreen59@gmail.com">
        <input id="fname" type="text" name="fname" placeholder="Name" />
        <input
          id="lname"
          type="text"
          name="email"
          placeholder="Email"
        /><br /><br />
        <select id="" name="" placeholder="Subject">
          <option value="" disabled selected>Subject</option>
          <option value="TechProb">Technical Issue</option>
        </select>
        <input
          id="fname"
          type="text"
          name="phone"
          placeholder="Phone"
        /><br /><br />
        <textarea
          id="w3review"
          name="w3review"
          rows="4"
          cols="50"
          placeholder="Message"
          style="color: #f5f3ee"
        >
        </textarea>
        <br /><br />
        <input type="submit" value="Submit" style="border-style: none" />
      </form>
    </div>

    <footer>
      <a href="#Top">
        <i class="fas fa-home fa-2x"></i>
      </a>
      <ul class="flist">
        <li>
          <p><a href="tel:0211234123">Phone:</a> 021 1234 123</p>
        </li>

        <li>
          <p>
            <a href="mailto:info@enviroaccounts.com">Email:</a>
            info@enviroaccounts.com
          </p>
        </li>
      </ul>
      <ul class="ficons">
        <li>
          <a href="mailto:info@enviroaccounts.com"
            ><i class="fas fa-envelope fa-lg"></i></a
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: info@enviroaccounts.com
        </li>
        <li>
          <a href="tel:0211234123"><i class="fas fa-phone fa-sm"></i></a
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 021 1234 123
        </li>
      </ul>
      <p class="fotcrit">
        © Environmental Accounting Services 2021 | Website by Adam Hall Design
      </p>
    </footer>
  </div>
</template>
