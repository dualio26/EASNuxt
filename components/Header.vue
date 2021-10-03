<template>
  <div id="Top" class="header">
    <ul class="navblock">
      <li><img src="../images/eas-logo white@2x.png" alt="" /></li>
      <li class="links" style="padding-top: 0.8%">
        <button>
          <a href="#contact">Contact Us</a>
        </button>
      </li>
      <li class="links"><a href="">Who We Are</a></li>
      <li class="links"><a href="">Insights</a></li>
      <li class="links"><a href="">Publications</a></li>
      <li class="links"><a href="">Services</a></li>
      <li class="links"><a href="">Case Studies</a></li>
      <li class="links">
        <a href="javascript:void(0);" @click="Packages()"
          >Packages<i class="fas fa-chevron-down"></i
        ></a>
        <ul id="PackageChild">
          <li><NuxtLink to="carbonfootprint">Carbon Footprint</NuxtLink></li>
          <li style="margin-top: 10%">
            <NuxtLink to="carboncredits">Carbon Credits</NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
    <div class="topnav">
      <a href="#home" class="active"
        ><img src="../images/eas-logo white@2x.png" alt=""
      /></a>
      <div id="myLinks">
        <a href="#news">Who We Are</a>
        <a href="#contact">Insights</a>
        <a href="#about">Publications</a>
        <a href="#about">Services</a>
        <a href="#about">Case Studies</a>
        <a href="javascript:void(0);" @click="MobPack()"
          >Packages<i class="fas fa-chevron-down"></i
        ></a>
        <ul id="MobPack">
          <a href="carbonfootprint.html"><li>Carbon Footprint</li></a>
          <a href="carboncredits.html"><li>Carbon Credits</li></a>
        </ul>
      </div>
      <a href="javascript:void(0);" class="icon" @click="myFunction()">
        <span style="font-size: 150%; margin-top: 15%; margin-right: 15%">
          <i class="fa fa-bars"></i>
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
