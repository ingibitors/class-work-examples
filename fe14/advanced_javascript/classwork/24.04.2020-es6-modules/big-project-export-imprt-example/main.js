import {createElement, createList, createTab} from "./scripts/functions";
import {User, Slider} from "./scripts/classes";

import {Login, HeaderSlider, ProductList} from "./sripts/module/index.js";

const pageContainer = document.getElementById("root");
pageContainer.append(Login.render(), HeaderSlider.render(), ProductList.render());
