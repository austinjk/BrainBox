<template>
<div style="width:100%;height:100%;display:flex;flex-direction:column">
    
    <!-- Header (fixed height) -->
    <div style="flex:0 0 64px">
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
    <footerbar/>
</div>

</template>

<script>
import Menubar from "../Menubar";
import Footer from "../Footer";

export default {
  name: "NewProjectPage",
  components: {
    Menubar,
    Footerbar: Footer
  }
};
</script>

<style>

</style>