<template>
    <div>
        <div id="footer">
            <p class="footer-text">
                <a target="_blank" href="http://neuroanatomy.github.io">
                    <img class="logo-naat" src="../assets/img/naat-bw.svg"/>
                </a>
                <a target="_blank" href="http://neuroanatomy.github.io" class="neuro-link">
                    groupe de neuroanatomie appliquée et théorique
                </a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.footer-text {
  color: white;
  width: 100%;
  font-size: small;
  text-align: center;

  .neuro-link {
    color: white;
    text-decoration: none;
  }
}

.logo-naat {
  width: 28px;
  height: 28px;
  margin-right: 4px;
  display: inline-block;
  vertical-align: middle;
}

#footer {
  background-color: #000;
  display: flex;
  align-items: center;
  height: 50px;
}
</style>
