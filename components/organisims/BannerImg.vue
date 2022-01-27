<template>
  <div class="">
    <svg
      id="svg82599"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 1190.6 411"
      style="enable-background: new 0 0 1190.6 411"
      xml:space="preserve"
      sodipodi:docname="/images/LandscapeFlat.svg"
      inkscape:version="1.1 (c68e22c387, 2021-05-23)"
      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
      xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg"
    >
      <!-- Backgroud of SVG do not fiddle with -->
      <use href="/images/LandscapeFlat.svg#Background" class="" />
      <!-- Backgroud of SVG do not fiddle with -->

      <use href="/images/LandscapeFlat.svg#windmillblades1" class="WMB1" />
      <use href="/images/LandscapeFlat.svg#windmillblades2" class="WMB2" />
      <use href="/images/LandscapeFlat.svg#Sattalite" class="Sattalite" />
      <use href="/images/LandscapeFlat.svg#TreeTop" class="" />
      <use href="/images/LandscapeFlat.svg#Trunk" class="" />
      <use href="/images/LandscapeFlat.svg#Boat1" class="vibrate-1" />
      <use
        href="/images/LandscapeFlat.svg#wheat1"
        class="wheat1"
        style="transform-origin: 25.704812182354379025627513785145% 70.295372618259398219671889943353%"
      />
      <use
        href="/images/LandscapeFlat.svg#wheat2"
        class="wheat1"
        style="transform-origin: 26.483034033516077114277823454905% 70.295372618259398219671889943353%"
      />
      <use
        href="/images/LandscapeFlat.svg#wheat3"
        class="wheat1"
        style="transform-origin: 27.217765616022195909375168643834% 70.295372618259398219671889943353%"
      />
      <use
        href="/images/LandscapeFlat.svg#wheat4"
        class="wheat1"
        style="transform-origin: 27.978051699453673340465314129893% 70.295372618259398219671889943353%"
      />
      <use
        href="/images/LandscapeFlat.svg#wheat5"
        class="wheat1"
        style="transform-origin: 28.721354356804322361299374946431% 70.295372618259398219671889943353%"
      />
      <use
        href="/images/LandscapeFlat.svg#wheat6"
        class="wheat1"
        style="transform-origin: 29.485608530441600822823185074902% 70.295372618259398219671889943353%"
      />
      <use href="/images/LandscapeFlat.svg#DiggerArm" class="Arm" />
      <use href="/images/LandscapeFlat.svg#green_yacht" class="vibrate-2" />
    </svg>
  </div>
</template>

<script>
import ThemeProps from "@/components/mixins/ThemeProps";
export default {
  mixins: [ThemeProps],
};
</script>

<style>
.landscape {
  background-image: url("/images/Landscape.svg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
}

.vibrate-1 {
  animation: vibrate-1 5s infinite;
}

.vibrate-2 {
  animation: vibrate-2 6s infinite;
}

.WMB2 {
  animation: spinClc 3s linear infinite;
  transform-origin: 50.884596002015790357802788509995% 29.496107055961070559610705596107%;
}

.WMB1 {
  animation: spinCClc 3s linear infinite;
  transform-origin: 47.407357634805980178061481605913% 26.819708029197080291970802919708%;
}

.Sattalite {
  animation: MoveRight 25s linear infinite;
  transform: translateY(-24 px);
  transform-origin: 27.7915% 14.58%;
}

.Tree {
  animation: animate__tada 3 linear infinite;
}

.wheat1 {
  animation: Wspin 19s both ease infinite;
}

.Arm {
  animation: spin 3s both infinite;
  transform-origin: 78.820080441124651998488951249631% 77.306334142573383359081880379607%;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinClc {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(30deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

@keyframes Wspin {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(20deg);
  }

  50% {
    transform: rotate(0deg);
  }

  75% {
    transform: rotate(-20deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

@keyframes MoveRight {
  from {
    transform: translate(-505.72309px);
  }

  to {
    transform: translate(842.8085px);
  }
}

@keyframes spinCClc {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
}

@keyframes vibrate-1 {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-2px, 2px);
  }

  40% {
    transform: translate(-2px, -2px);
  }

  60% {
    transform: translate(2px, 2px);
  }

  80% {
    transform: translate(2px, -2px);
  }

  100% {
    transform: translate(0);
  }
}

@keyframes vibrate-2 {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(2px, -2px);
  }

  40% {
    transform: translate(2px, 2px);
  }

  60% {
    transform: translate(-2px, 2px);
  }

  80% {
    transform: translate(-2px, -2px);
  }

  100% {
    transform: translate(0);
  }
}
</style>
