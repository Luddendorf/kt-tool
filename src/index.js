import "./main.css";
import styles from "./index.module.css";
import "./sass/main-second.scss";

import { loadScript } from "./scripts/main";

window.onload = function () {
  loadScript();
};
