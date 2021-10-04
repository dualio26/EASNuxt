<template>
  <div id="Top" class="header">
    <!--Desktop Navigation-->
    <ul class="navblock">
      <li>
        <NuxtLink to="/"
          ><img src="../images/eas-logo white@2x.png" alt=""
        /></NuxtLink>
      </li>
      <li class="links" style="padding-top: 1%">
        <button>
          <a href="#GetTouch">Contact Us</a>
        </button>
      </li>
      <li class="links"><NuxtLink to="WhoWeAre">Who We Are</NuxtLink></li>
      <li class="links"><NuxtLink to="Insight">Insights</NuxtLink></li>
      <li class="links"><NuxtLink :to="PubsCa">Publications</NuxtLink></li>
      <li class="links"><NuxtLink to="Services">Services</NuxtLink></li>
      <li class="links">
        <a href="javascript:void(0);" @click="CaseStud()"
          >Case Studies<font-awesome-icon icon="chevron-down" />
        </a>
        <ul id="CaseStudChild">
          <li><NuxtLink to="SkiAre">SAANZ</NuxtLink></li>
          <li style="margin-top: 10%">
            <NuxtLink to="WAIWan">WAI Wanaka</NuxtLink>
          </li>
          <li style="margin-top: 10%">
            <NuxtLink to="WaoSum">Woa Summit</NuxtLink>
          </li>
        </ul>
      </li>
      <li class="links">
        <a href="javascript:void(0);" @click="Packages()"
          >Packages<font-awesome-icon icon="chevron-down" />
        </a>
        <ul id="PackageChild">
          <li><NuxtLink to="carbonfootprint">Carbon Footprint</NuxtLink></li>
          <li style="margin-top: 10%">
            <NuxtLink to="carboncredits">Carbon Credits</NuxtLink>
          </li>
        </ul>
      </li>
    </ul>

    <!--Mobile Navigation-->
    <div class="topnav">
      <a href="#home" class="active"
        ><NuxtLink to="/"
          ><img src="../images/eas-logo white@2x.png" alt="" /></NuxtLink
      ></a>
      <div id="myLinks">
        <NuxtLink to="WhoWeAre">Who We Are</NuxtLink>
        <NuxtLink to="Insight">Insights</NuxtLink>
        <NuxtLink :to="PubsCa">Publications</NuxtLink>
        <NuxtLink to="Services">Services</NuxtLink>
        <NuxtLink to="WaoSum">Case Studies</NuxtLink>
        <a href="javascript:void(0);" @click="MobPack()"
          >Packages<font-awesome-icon icon="chevron-down"
        /></a>
        <ul id="MobPack">
          <NuxtLink to="carbonfootprint"><li>Carbon Footprint</li></NuxtLink>
          <NuxtLink to="carboncredits"><li>Carbon Credits</li></NuxtLink>
        </ul>
      </div>
      <a href="javascript:void(0);" class="icon" @click="myFunction()">
        <span style="font-size: 150%; margin-top: 15%; margin-right: 15%">
          &#9776;
        </span>
      </a>
    </div>
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

  props: ['PubsCa'],
}
</script>
