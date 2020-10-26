<template>
  <div>
    <footer class="footer">
      <div class="footer__container">
        <a class='button button--small button--tertiary' href="">Cancelar</a>
        <a class='button button--small button--outline' href="">Rascunho</a>
        <a class='button button--small button--primary' href="">Agendar</a>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'Scheduling',
  components: {},
};
</script>

<style lang="scss" scoped>
.footer {
  align-items: center;
  background-color: #FFF;
  display: fixed;
  position: relative;
  z-index: 0;
}

.footer__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 20px;
}
</style>
