import { resolve } from "path";
import tailwindConfig from "./tailwind.config";

const primaryColor = "#82b160";
export default {
  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },
  server: {
    host: "0.0.0.0", // default: localhost
  },
  googleAnalytics: {
    // Options
    id: "XXX-74957107-2",
  },
  alias: {
    images: resolve(__dirname, "./assets/images"),
  },
  tailwindcss: {
    configPath: "~/tailwind.config.js",
    cssPath: "~/assets/css/main.scss",
    exposeConfig: true,
    config: tailwindConfig({}),
  },
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "EAS",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.scss", "@fortawesome/fontawesome-svg-core/styles.css"],

  plugins: ["~/plugins/vuex-orm", "~/plugins/fontawesome.js", "@/plugins/vue-scrollactive", "@/plugins/menu.client"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ["~/components/"],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "nuxt-purgecss",
    "vue-scrollto/nuxt",
    "@nuxtjs/google-analytics",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
  ],

  loading: {
    color: primaryColor,
  },

  liveEdit: false,

  meta: {
    theme_color: primaryColor,
  },
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-material-oceanic.css",
      },
      // remarkPlugins: ['~/plugins/external-links-rebase.js'],
    },
  },
  googleFonts: {
    families: {
      "DM+Mono": true,
      "Suez+One": true,
      Chivo: true,
    },
  },

  fontawesome: {
    icons: {
      solid: [
        "faUserSecret",
        "faHeart",
        "faEllipsisV",
        "faShareAlt",
        "faHome",
        "faChevronUp",
        "faChevronDown",
        "faChevronLeft",
        "faChevronRight",
      ],
      regular: ["faHeart"],
      brands: ["faFontAwesome"],
    },
  },
  purgeCSS: {
    // These settings chock on tailwindcss and liferay
    paths: [
      "components/**/*.{vue,js}",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.{js,ts}",
      "nuxt.config.{js,ts}",
    ],
    // whitelist: [/svg.*/, /fa.*/, /text-h1/],
    whitelist: ["text-h1"],
    enabled: false,
  },
  /*
   ** Build configuration
   ** Gitlab
   ** This is a working config.
   */
  build: {
    extractCSS: true,
    router: {},
  },
  generate: {
    dir: "public",
  },
};
