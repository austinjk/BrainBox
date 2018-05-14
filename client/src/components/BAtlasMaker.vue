<template>
  <h1>empty</h1>
</template>
<script>
export default {
  name: "BAtlasMaker",
  methods: {},
  data() {
    return {
      debug: 1,
      hostname: "http://localhost:3000", // '', // 'http://brainbox.pasteur.fr',
      wshostname: "ws://localhost:8080", // 'ws://brainbox.pasteur.fr:8080',
      container: null, // Element where atlasMaker lives
      brain_offcn: null,
      brain_offtx: null,
      canvas: null,
      context: null,
      brain_px: null,
      brain_W: null,
      brain_H: null,
      brain_D: null,
      brain_Wdim: null,
      brain_Hdim: null,
      max: 0,
      brain_dim: new Array(3),
      brain_pixdim: new Array(3),
      brain_datatype: null,
      /*
        }
    */
      brain_img: {
        img: null,
        view: null,
        slice: null
      },
      brain: 0,
      alphaLevel: 0.5,
      annotationLength: 0,
      measureLength: null,
      User: {
        view: null,
        tool: "show",
        slice: null,
        penSize: 1,
        penValue: 1,
        doFill: false,
        mouseIsDown: false,
        x0: -1,
        y0: -1,
        mri: new Object()
      },
      Collab: [],
      atlas: null,
      atlas_offcn: null,
      atlas_offtx: null,
      atlas_px: null,
      name: null,
      url: null,
      atlasFilename: null,
      socket: null,
      receiveFunctions: [],
      sendFunctions: [],
      flagConnected: 0,
      reconnectionTimeout: 5, // reconnection timeout starts at 5 seconds
      flagLoadingImg: { loading: false },
      flagUsePreciseCursor: false,
      msg: null,
      msg0: "",
      prevData: 0,
      Crsr: {
        x: undefined, // cursor x coord
        y: undefined, // cursor y coord
        fx: undefined, // finger x coord
        fy: undefined, // finger y coord
        x0: undefined, // previous finger x coord
        y0: undefined, // previous finger y coord
        cachedX: undefined, // finger x coord at touch start
        cachedY: undefined, // finger y coord at touch start
        state: "move", // cursor state: move, draw, configure
        prevState: undefined, // state before configure
        touchStarted: false // touch started flag
      },
      editMode: 0, // editMode=0 to prevent editing, editMode=1 to accept it
      fullscreen: false, // fullscreen mode
      info: {}, // information displayed over each brain slice
      // undo stack
      /* DEPRECATED Undo:[], */
      version: 1 // version of the configuration file (slice number, plane, etc). Default=1
    };
  }
};
</script>
<style>

</style>
