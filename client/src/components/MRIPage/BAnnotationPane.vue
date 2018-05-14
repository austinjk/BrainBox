<template>
  <div id="annotationsPane">
      <table>
          <tr>
          <th><b>Name</b></th>
          <td><span id="name" contentEditable=true class='noEmpty'>{{annotation.name}}</span></td>
          </tr>

          <tr>
          <th><b>Data&nbsp;source</b></th>
          <td><span id="source" style="word-break:break-all">{{annotation.source}}</span></td>
          </tr>

          <tr>
          <th><b>Inclusion&nbsp;date</b></th>
          <td><span id="included">{{annotation.date}}</span></td>
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
          <img id="addAnnotation"    class="button" style="width:19px; height:19px" src='../../assets/img/plus-square.svg'/>
          <img id="removeAnnotation" class="button" style="width:19px; height:19px" src='../../assets/img/minus-square.svg'/>
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
          <img id="addTextAnnotation"    class="button" style="width:19px; height:19px" src='../../assets/img/plus-square.svg'/>
          <img id="removeTextAnnotation" class="button" style="width:19px; height:19px" src='../../assets/img/minus-square.svg'/>
      </div>

  </div>

</template>

<script>
export default {
  name: "BAnnontationPane",
  data() {
    return {
      annotation: {
        name: "test",
        source: "https://google.com",
        date: "12/01/18"
      }
    };
  }
};
</script>

<style>
tr {
  vertical-align: top;
  text-align: left;
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
</style>
