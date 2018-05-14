<template>
<div>
<the-menubar/>
<h1>hello test {{id}}</h1>
<footerbar/>
</div>
</template>

<script>
import TheMenubar from "../TheMenubar";
import TheFooter from "../TheFooter";

export default {
  name: "UserPage",
  props: ["id"],
  components: {
    TheMenubar,
    TheFooter
  }
};
</script>

<style>

</style>