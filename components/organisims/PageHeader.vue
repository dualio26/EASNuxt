<template>
  <div class="flex w-full" :class="[textcolor, bgcolor]">
    <div class="xl:w-screen xl:max-w-screen-xl w-full xl:mx-auto">
      <header id="banner" class="w-full lg:px-lg md:px-md px-xs">
        <div id="wrapper" class="d-flex flex-col flex-fill w-full">
          <nav class="relative">
            <div class="max-w-7xl px-2 sm:px-6 lg:px-8">
              <NavMenu :small-logo="smallLogo" :logo="logo" :large-logo="largeLogo" :alt="alt">
                <NavigationItemList class="navbar-nav flex h-full items-center space-x-4" />
              </NavMenu>
              <div class="absolute top-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <MobileMenuButton />
              </div>
            </div>
            <MobileMenu>
              <NavigationItemList class="navbar-collapse space-y-1" />
              <slot name="mobileMenu" />
            </MobileMenu>
          </nav>
        </div>
      </header>
    </div>
  </div>
</template>
<script>
import ThemeProps from "@/components/mixins/ThemeProps";
import MobileMenu from "@/components/molecules/MobileMenu";
import MobileMenuButton from "@/components/atoms/MobileMenuButton";
import NavMenu from "@/components/molecules/NavMenu";
import NavigationItemList from "@/components/app/NavigationItemList";
export default {
  components: {
    MobileMenu,
    MobileMenuButton,
    NavMenu,
    NavigationItemList,
  },
  mixins: [ThemeProps],
  props: {
    pageLogo: {
      type: Boolean,
      default: false,
    },
    smallLogo: {
      type: String,
      default: null,
      required: false,
    },
    logo: {
      type: String,
      default: null,
      required: false,
    },
    largeLogo: {
      type: String,
      default: null,
      required: false,
    },
    alt: {
      type: String,
      default: "",
      required: false,
    },
  },
};
</script>
