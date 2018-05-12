<template>
  <div style="width:100%;height:100%;display:flex;flex-direction:column">
    
    <!-- Header (fixed height) -->
    <div style="flex:0 0 64px">
        <!-- Top-right menu bar -->
       <menubar/>

        <!-- Small left-top logo -->
        <div style="display:inline-block;margin:10px">
            <a href='/' style="text-decoration:none">
                <img style='height:56px;vertical-align:middle' src='/img/brainbox-logo-small_noFont.svg'/>
            </a><span style="font-family: Roboto, sans-serif; font-size: 36px; font-weight:100;vertical-align:middle" id="fontLogo"> 
                <a href='/' style="font-family: Roboto, sans-serif; font-size: 36px; font-weight:100; text-decoration:none">BrainBox</a>
            </span>
        </div>
    </div>
    
    <!-- Content (variable height) -->
    <div style="flex:1 0 auto">
            
        <!-- Data -->
        <div id="data">		
            <!-- Data Flex -->
            <div id="content" style="display:flex;justify-content:center">
                    <!-- Annotations -->
                    <div style="flex:0 1 auto">
                        <div id="annotationsPane">
                            <table>
                                <tr>
                                <th><b>Name</b></th>
                                <td><span id="name" contentEditable=true class='noEmpty'></span></td>
                                </tr>
                            
                                <tr>
                                <th><b>Data&nbsp;source</b></th>
                                <td><span id="source" style="word-break:break-all"></span></td>
                                </tr>
                            
                                <tr>
                                <th><b>Inclusion&nbsp;date</b></th>
                                <td><span id="included"></span></td>
                                </tr>
                            </table>

                            <br/>
                        
                            <b>Volume Annotations</b><br/>
                            <table id="annotations" class="tabContent">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Value</th>
                                    <th>Project</th>
                                    <th>Modified</th>
                                    <th style="width:80px">Access</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                            </table>
                            <div style="text-align:right">
                                <span id="annotationMessage"></span>
                                <img id="addAnnotation"    class="button" style="width:19px; height:19px" src='/img/plus-square.svg'/>
                                <img id="removeAnnotation" class="button" style="width:19px; height:19px" src='/img/minus-square.svg'/>
                            </div>

                            <b>Text Annotations</b><br/>
                            <table id="textAnnotations" class="tabContent">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Value</th>
                                    <th>Project</th>
                                    <th>Modified</th>
                                    <th style="width:80px">Access</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                            </table>
                            <div style="text-align:right">
                                <span id="textAnnotationMessage"></span>
                                <img id="addTextAnnotation"    class="button" style="width:19px; height:19px" src='/img/plus-square.svg'/>
                                <img id="removeTextAnnotation" class="button" style="width:19px; height:19px" src='/img/minus-square.svg'/>
                            </div>

                        </div>
                    </div>
                    <!-- end of Annotations -->

                    <!-- AtlasMaker -->
                    <div style="flex:0 0 auto;position:relative">
                        <!-- AtlasMaker -->
                        <div id="stereotaxic" style="display:inline-block">
                        </div>
                        <!-- End AtlasMaker -->
                    </div>
            </div>
            <!-- End Data Flex -->
        </div>
        <!-- End Data -->

    </div>
    <!-- End Content -->
    
    <!-- Space (fixed height) -->
    <div style="flex:0 0 50px">
    </div>

    <!-- Footer (fixed height) -->
   <brainbox-footer/>
</div>
</template>

<script>
import Menubar from "./Menubar";
import Footer from "./Footer";

export default {
  name: "MRIPage",
  components: {
    Menubar,
    BrainboxFooter: Footer
  }
};
</script>

<style>
* {
  font-size: 14px;
  color: white;
}
html,
body {
  background-color: #222;
  height: 100%;
  margin: 0px;
  font: 16px/20px "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial,
    Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
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
.linkNoULine {
  text-decoration: none;
  font-weight: lighter;
}

#menu {
  float: right;
  /* margin-top: 10px; */
  margin-right: 10px;
  display: inline-block;
  font: 16px/24px "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial,
    Verdana, sans-serif;
}
#menu img {
  margin-left: 15px;
}
#MyLogin {
  display: inline-block;
  margin-left: 15px;
}
/* text annotations
------------------------ */
tr {
  vertical-align: top;
}
tr.selected {
  background-color: #444;
}
table {
  border-collapse: collapse;
}
.tabContent th {
  font-weight: bold;
  border-bottom: thin solid white;
}
.tabContent {
  width: 100%;
  border-bottom: thin solid white;
  table-layout: fixed;
}
.tabContent td {
  font-weight: normal;
}
.tabContent th,
.tabContent td {
  padding: 0;
}
ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}
li {
  margin-bottom: 1rem;
}

/* Content: Data
---------------------- */
#data {
  display: none;
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
  appearance: none;
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