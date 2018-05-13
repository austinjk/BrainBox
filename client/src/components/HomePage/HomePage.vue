<template>
<div class="home-container">
  <menubar class="menubar"/>

  <div class="slide">

        <!-- <img id="neuronsImg" src="../../assets/img/neurons.jpg" width="100%" /> -->
        <video id="neurons" width="100%" autoplay loop>
            <source src="../../assets/img/neurons.mp4" type="video/mp4">
        </video>
        <div class="content">
            <img id="logo" src="../../assets/img/brainbox-logo.svg"/>
            <h2>Real-time collaboration in neuroimaging</h2>
            <p>
                BrainBox allows you to visualise, segment and annotate collaboratively
                any brain MRI dataset available online. Segmentations and annotations are
                automatically saved. Point BrainBox to your own nii.gz or mgz data online,
                or participate in the projects created by the community.
            </p>

            <div class="search-container">
                <input id="url" :value="selectvalue" type="text" placeholder="Enter the URL of an MRI (.nii.gz or .mgz) and click Go"/>
                <select id="list" class='pushButton' v-model="selectvalue">
                    <option value='' disabled selected hidden>&#9662; A list of brains to try</option>
                    <option value='https://zenodo.org/record/44855/files/MRI-n4.nii.gz'>A Lion from Zenodo</option>
                    <option value='http://files.figshare.com/2284784/MRI_n4.nii.gz'>A Human from FigShare</option>
                    <option value='https://dl.dropbox.com/s/cny5b3so267bv94/p32-f18-uchar.nii.gz'>A 32 days old Ferret from DropBox</option>
                    <option value='https://s3.amazonaws.com/fcp-indi/data/Projects/ABIDE_Initiative/Outputs/freesurfer/5.1/Caltech_0051456/mri/T1.mgz&view=cor&slice=128'>A Subject from the ABIDE Initiative, from Amazon</option>
                </select>
                <button id="go" class="pushButton" @click="goToURL">Go</button>
            </div>
        </div>
  </div>

   <footerbar class="footer"/>

  </div>
</template>

<script>
import Footer from "../Footer.vue";
import Menubar from "../Menubar.vue";

export default {
  name: "HomePage",
  data() {
    return {
      selectvalue: "",
      styleObject: {}
    };
  },
  components: {
    Footerbar: Footer,
    Menubar
  },
  methods: {
    goToURL() {
      this.$router.push({ path: `/mri?url=${this.selectvalue}` });
    }
  }
};
</script>

<style lang="scss">
.home-container {
  height: 100vh;
  display: grid;
  grid-template-rows: 30px 1fr 50px;
  grid-template-columns: auto;
  grid-template-areas:
    "menubar"
    "slide"
    "footer";
}

.menubar {
  grid-area: menubar;
}

.slide {
  grid-area: slide;
  justify-self: stretch;
  align-self: stretch;
  overflow: hidden;
  background: #222;

  .search-container {
    position: relative;
    text-align: center;
  }

  #url {
    padding: 0 5px;
    display: block;
    width: 100%;
    margin-bottom: 1rem;
  }

  #list {
    width: 200px;
    height: 32px;
    text-align-last: center;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: none;
    text-align: center;
    -webkit-appearance: none;
    cursor: pointer;
  }

  #go {
    height: 32px;
    text-align-last: center;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: none;
    display: inline-block;
    width: 32px;
  }
}

.footer {
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

.linkNoULine {
  text-decoration: none;
  font-weight: lighter;
}

#MyLogin {
  display: inline-block;
  margin-left: 15px;
}

.a {
  border: thin solid #777;
  border-radius: 3px;
  margin: 1px;
  text-align: center;
  height: 22px;
  outline: none;
}
.a:hover {
  opacity: 0.5;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.pressed {
  background-color: #555 !important;
}

.content {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: calc(100% - 20px);

  h2 {
    margin-top: 0;
  }

  p {
    margin-bottom: 2rem;
  }
}

input#url,
input#projectName {
  width: calc(100% - 8px);
  height: 32px;
  border: 0px;
  padding: 0px;
  color: black;
}

#go {
  height: 30px;
  width: 30px;
}

h2 {
  margin-left: 5rem;
  opacity: 0;
  transition: margin-left 2s, opacity 2s;
}

img#logo {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50%;
  transform: translate(-50%, 0);
  width: 250px;
  text-align: center;
}

#neurons {
  filter: contrast(150%) brightness(60%);
  -webkit-filter: contrast(150%) brightness(60%);
}
</style>
