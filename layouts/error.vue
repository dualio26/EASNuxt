<template>
  <div class="bg-accent_light-100 space-y-800">
    <BasePanel>
      <img src="/images/Landscape.svg" alt="Landscape" />
    </BasePanel>
    <BasePanel class="flex flex-col items-center lg:px-lg px-sm">
      <p class="text-center lg:text-display-1 text-display-3 font-serif">
        {{ errorStr }}
      </p>
      <a href="/"> <font-awesome-icon icon="home" class="text-display-2 text-accent_orange-300"></font-awesome-icon></a>
    </BasePanel>
    <footer>
      <BasePanel theme-bg-color="accent_dark-800" theme-color="accent_light-100">
        <div class="p-300 grid md:grid-flow-col md:grid-rows-1 md:grid-cols-3 grid-flox-row grid-cols-1 gap-4">
          <a href="/#Top">
            <font-awesome-icon icon="home" class="text-display-2 text-accent_orange-300"></font-awesome-icon>
          </a>
          <ul>
            <li>
              <p><a href="tel:+6434248100" class="font-serif text-accent_orange-300">Phone:</a> +64 3 4248100</p>
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
export default {
  components: {
    BasePanel,
  },
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      errorStr: this.error.statusCode === 404 ? "Page was not found." : `Page error: ${this.error.statusCode}`,
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>
