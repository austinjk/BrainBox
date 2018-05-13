<template>
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
  name: "AnnontationPane"
};
</script>

<style>

</style>
