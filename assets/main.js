export default {
  methods: {
    myFunction() {
      var x = document.getElementById('myLinks')
      if (x.style.display === 'block') {
        x.style.display = 'none'
      } else {
        x.style.display = 'block'
      }
    },
    Packages() {
      var x = document.getElementById('PackageChild')
      if (x.style.display === 'block') {
        x.style.display = 'none'
      } else {
        x.style.display = 'block'
      }
    },
    MobPack() {
      var x = document.getElementById('MobPack')
      if (x.style.display === 'block') {
        x.style.display = 'none'
      } else {
        x.style.display = 'block'
      }
    },

    constructor() {
      setInterval(function () {
        var height = document.querySelector('#C1').offsetHeight
        var x = height + 'px'
        document.getElementById('C2').style.height = x
        const c2h = document.querySelector('#card2').offsetHeight
        const c4h = document.querySelector('#card4')
        var style = getComputedStyle(c4h)
        var mb = parseInt(style.marginBottom)
        var y = height - c2h - mb * 2
        document.getElementById('card4').style.height = y + 'px'
      }, 250)
    },
  },
}
