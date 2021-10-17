<template>
  <li role="presentation" class="lfr-nav-item nav-item" :class="{ dropdown: isDropdown, active: isRouteActive }">
    <a
      :href="to"
      aria-haspopup="true"
      role="menuitem"
      tabindex="0"
      class="nav-link text-truncate p-200 hover:shadow-300 hover:rounded-md"
      :class="{ 'dropdown-toggle': isDropdown }"
      ><span class="text-truncate"
        >{{ text }}
        <span
          v-if="isDropdown"
          v-click-outside="hideButtonClick"
          class="lfr-nav-child-toggle"
          @click.capture.stop.prevent="toggleButtonClick"
        >
          <FontAwesomeIcon
            v-if="!isOpen"
            class="lfr-nav-child-toggle ml-4 mr-2"
            :icon="['fas', 'chevron-down']"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            v-if="isOpen"
            class="lfr-nav-child-toggle ml-4 mr-2"
            :icon="['fas', 'chevron-up']"
          ></FontAwesomeIcon>
        </span>
      </span>
    </a>
    <slot v-if="isOpen" />
  </li>
</template>

<script>
import ButtonClick from "@/components/mixins/ButtonClick";
import HasSlots from "@/components/mixins/HasSlots";
import NavState from "@/components/mixins/NavState";
export default {
  mixins: [ButtonClick, HasSlots, NavState],
  props: {
    to: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    isDropdown() {
      return this.hasDefaultSlot;
    },
  },
};
</script>
