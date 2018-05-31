<template>
<div class="page-container">

    <!-- Header (fixed height) -->
    <div class="header-container">
        <the-menubar/>

        <!-- Small left-top logo -->
        <div class="header-logo">
            <router-link to="/" style="text-decoration:none">
                <img class="logo-image" src='../../assets/img/brainbox-logo-small_noFont.svg'/>
                <span class="logo-text" id="fontLogo">
                    BrainBox
                </span>
            </router-link>
        </div>
    </div>

    <!-- Content (variable height) -->
    <div id="content" style="flex:1 0 auto">

        <!-- New Project Name -->
        <div style="display:block;width:600px;margin:0 auto;padding:20px;background:#333">

            <div style="max-width:480px;display:block;margin:0 auto">
                <h1>Create a new project</h1>
                <p>
                    A project contains a list of MRI files, a set of volume or
                    text annotations, and a list of collaborators with their access rights.
                    The short name of a project can only contain letters and numbers, but
                    you can choose a longer display name later.
                </p>

                <input id="projectName" type="text" placeholder="Enter the project short name"></input>
                <div id='warning' style="display:none">
                </div>
            </div>

            <!-- Save or Cancel -->
            <div style="display:block;margin:0 auto;width:200px">
                <h2 id="createProject" class="pushButton">Create Project</h2>
                <h2 id="cancelChanges" class="pushButton">Cancel</h2>
            </div>
        </div>
    </div>
    <!-- End Content -->

    <!-- Space (fixed height) -->
    <div style="flex:0 0 50px">
    </div>

    <!-- Footer (fixed height) -->
    <the-footer/>
</div>

</template>

<script>
import TheMenubar from '../TheMenubar';
import TheFooter from '../TheFooter';

export default {
  name: 'NewProjectPage',
  components: {
    TheMenubar,
    TheFooter,
  },
};
</script>

<style lang="scss">
.page-container {
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .header-logo {
    display: inline-block;
    margin: 10px;

    .logo-image {
      height: 56px;
      vertical-align: middle;
    }

    .logo-text {
      font-family: Roboto, sans-serif;
      font-size: 36px;
      font-weight: 100;
      vertical-align: middle;
      text-decoration: none;
      color: white;
    }
  }
}
.header-container {
  flex: 0 0 64px;
}
</style>
