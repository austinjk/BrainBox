<template>
<div>
<menubar/>
<h1>hello test {{id}}</h1>
<footerbar/>
</div>
</template>

<script>
import Menubar from "../Menubar";
import Footer from "../Footer";

export default {
  name: "UserPage",
  props: ["id"],
  components: {
    Menubar,
    Footerbar: Footer
  }
};
</script>

<style>

</style>