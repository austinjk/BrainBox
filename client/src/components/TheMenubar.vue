<template>
   <div id="menu">

            <router-link to="project/new"><img id="addProject" class="button" title="add project" src='../assets/img/plus.svg'/></router-link>
            <a href="http://openneu.ro/metasearch" target="_blank"><img id="search" class="button" title="search" src='../assets/img/search.svg'/></a>
            <a href="/doc/index.html" target="_blank"><img id="doc" class="button" title="documentation" src='../assets/img/doc.svg'/></a>
            <a href="https://github.com/OpenNeuroLab/BrainBox/issues" target="_blank"><img id="bug" class="button issues-img" title="report a bug" src='../assets/img/bug.svg'/></a>
            <a href="https://github.com/OpenNeuroLab" target="_blank"><img id="github" class="button github-img" title="join our github project"  src='../assets/img/github.svg'/></a>
            <div id="MyLogin" class="login-button">
                <span>Login with GitHub</span>
            </div>

    </div>
</template>

<script>
export default {
  name: 'TheMenubar',
};
</script>

<style scoped>
button {
  padding-right: 0.5px;
}
.pushButton {
  border: 1px solid #ddd;
  border-radius: 6px;
  color: #ddd;
  text-align: center;
  -webkit-appearance: none;
  cursor: pointer;
}
img.button {
  width: 0.9rem;
  height: 0.9rem;
  margin: 8px 2px;
  vertical-align: middle;
  cursor: pointer;
}
img.button:hover {
  opacity: 0.5;
}
img.icon {
  width: 1rem;
  height: 1rem;
  margin: 4px 2px;
  vertical-align: middle;
  cursor: pointer;
}

.login-button {
  padding-right: 10px;
}
.github-img {
  width: 15px;
  height: 15px;
  padding-right: 1px;
}

.issues-img {
  padding-right: 0.5px;
}

#menu {
  /* position: fixed; */
  z-index: 2;
  text-align: right;
  top: 0;
  margin-top: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: top 0.5s, opacity 0.5s;
  -moz-transition: top 0.5s, opacity 0.5s;
  -webkit-transition: top 0.5s, opacity 0.5s;
  margin-right: 10px;
  background-color: #111;
}

#menu img {
  margin-left: 15px;
}
</style>
