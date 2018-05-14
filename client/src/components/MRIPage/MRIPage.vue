<template>
  <div class="grid-container">
    <the-menubar class="menubar-container"/>

    <router-link to="/" class="logo-container">
      <img src='../../assets/img/brainbox-logo-small_noFont.svg'/>
      <span class="logo-title">BrainBox</span>
    </router-link>

    <b-annotation-pane class="annotation-container"/>

    <div class="atlasmaker-container">
      <!-- AtlasMaker -->
      <div id="stereotaxic">
        <h1>AtlasMaker</h1>
      </div>
      <!-- End AtlasMaker -->
    </div>

    <the-footer class="footer-container"/>
  </div>

</template>

<script>
import TheMenubar from "../TheMenubar";
import TheFooter from "../TheFooter";

import BAnnotationPane from "./BAnnotationPane";

export default {
  name: "MRIPage",
  components: {
    TheMenubar,
    BAnnotationPane,
    TheFooter
  }
};
</script>

<style lang="scss">
* {
  font-size: 14px;
  color: white;
}
.grid-container {
  box-sizing: border-box;
  height: 100vh;
  display: grid;
  grid-template-rows: 30px 50px 1fr 1fr 50px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "menubar menubar menubar"
    "logo logo logo"
    "annotation annotation annotation"
    "atlasmaker atlasmaker atlasmaker"
    "footer footer footer";
}

.atlasmaker-container {
  grid-area: atlasmaker;
  background-color: gray;
}

.annotation-container {
  grid-area: annotation;
}

.logo-container {
  box-sizing: border-box;
  padding: 5px;
  height: 50px;
  grid-area: logo;
  display: flex;
  text-decoration: none !important;
  font-weight: 100;

  img {
    object-fit: contain;
  }

  .logo-title {
    align-self: center;
    font-size: 36px;
    font-family: "Roboto", sans-serif;
    font-weight: 100;
  }
}

.menubar-container {
  grid-area: menubar;
}

.footer-container {
  grid-area: footer;
  background-color: #000;
}

h1 {
  font-size: 1rem;
  text-align: center;
}
h2,
p {
  font-family: sans-serif;
  text-align: center;
}
a {
  color: white;
}

.hidden span {
  display: none;
}
.hidden:after {
  content: "••••";
}
.noEmpty:empty:before {
  content: "Empty";
  color: rgba(255, 255, 255, 0.4);
}

.noEmptyWithPlaceholder:empty:before {
  content: attr(placeholder);
  color: rgba(255, 255, 255, 0.4);
}
td {
  word-break: break-word;
}
#content {
  margin: 0 auto;
}
#annotationsPane {
  background-color: #333;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  max-width: 900px;
  flex: 0 1 auto;
  vertical-align: top;
}
#annotationsPane th,
#annotationsPane td {
  overflow: hidden;
}
.tabContent {
  margin-left: 10px;
  text-align: left;
}
#stereotaxic {
  width: 600px;
}
select {
  border: none;
  background: none; /* no color, no decoration */
  color: white;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100px;
  text-overflow: ellipsis;
}

/******************************** resizable layout ******************************/
/* for larger screen (computer, big iPad, small iPad landscape) */
@media all and (max-width: 1300px) {
  #content {
    flex-direction: column;
    max-width: 700px;
  }
  #annotationsPane {
    max-width: none;
    margin-right: 0px;
  }
  #stereotaxic {
    min-width: 100%;
  }
}
/************************************* access widget ********************************/
.access {
  padding-top: 5px;
  text-decoration: none;
  border: none;
}
.view,
.edit,
.add,
.remove {
  /* cursor: pointer; */
  padding: 1px 1px 1px 0px;
}
.view:before,
.edit:before,
.add:before,
.remove:before {
  background-size: 15px 15px;
  width: 15px;
  height: 15px;
  content: "";
  display: inline-block;
  text-decoration: none;
}
/* view */
[data-level="0"] .view:before {
  background-image: url("/img/eye.svg");
}
[data-level="1"] .view:before,
[data-level="2"] .view:before,
[data-level="3"] .view:before,
[data-level="4"] .view:before {
  background-image: url("/img/eye-circle.svg");
}
/* edit */
[data-level="0"] .edit:before,
[data-level="1"] .edit:before {
  background-image: url("/img/pencil.svg");
}
[data-level="2"] .edit:before,
[data-level="3"] .edit:before,
[data-level="4"] .edit:before {
  background-image: url("/img/pencil-circle.svg");
}
/* add */
[data-level="0"] .add:before,
[data-level="1"] .add:before,
[data-level="2"] .add:before {
  background-image: url("/img/plus-small.svg");
}
[data-level="3"] .add:before,
[data-level="4"] .add:before {
  background-image: url("/img/plus-small-circle.svg");
}
/* remove */
[data-level="0"] .remove:before,
[data-level="1"] .remove:before,
[data-level="2"] .remove:before,
[data-level="3"] .remove:before {
  background-image: url("/img/minus-small.svg");
}
[data-level="4"] .remove:before {
  background-image: url("/img/minus-small-circle.svg");
}
/************************************ dropdown menu ********************************/
.autocomplete {
  border: none;
  border-radius: 0px;
  outline: none;
  padding: 0px 0px 5px 0px;
  vertical-align: bottom;
}
.ui-widget.ui-widget-content {
  background: #222;
  color: white;
  border: none;
}
.ui-widget-header:active {
  border: none;
}
.ui-state-active,
.ui-widget-content .ui-state-active,
.ui-widget-header .ui-state-active,
a.ui-button:active,
.ui-button:active,
.ui-button.ui-state-active:hover {
  background: #555 !important;
  color: white;
  border: none;
  outline: none;
  display: block;
}
li div {
  color: white; /* text color */
  border: none;
  margin: none;
  padding: none;
}
.display {
  padding-top: 5px;
  text-decoration: none;
  border: none;
}
</style>