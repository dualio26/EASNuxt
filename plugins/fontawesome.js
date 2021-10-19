import Vue from "vue";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faUserSecret,
  faQuestionCircle,
  faHeart,
  faHome,
  faEllipsisV,
  faShareAlt,
  faChevronDown,
  faChevronUp,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faArrowDown,
  faClipboard,
  faClipboardList,
  faClipboardCheck,
  faCommentAlt,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faQuestionCircle as farQuestionCircle,
  faClipboard as farClipboard,
  faCommentAlt as farCommentAlt,
} from "@fortawesome/free-regular-svg-icons";
import { faFontAwesome as fabFontAwesome } from "@fortawesome/free-brands-svg-icons";

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

library.add(farHeart, farClipboard, farCommentAlt, farQuestionCircle);
library.add(
  faUserSecret,
  faQuestionCircle,
  faHeart,
  faHome,
  faEllipsisV,
  faShareAlt,
  faChevronDown,
  faChevronUp,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faArrowDown,
  faClipboard,
  faClipboardList,
  faClipboardCheck,
  faCommentAlt,
  faExternalLinkAlt,
);
library.add(fabFontAwesome);

// Register the component globally
Vue.component("FontAwesomeIcon", FontAwesomeIcon);
