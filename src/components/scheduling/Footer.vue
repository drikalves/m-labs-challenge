<template>
  <footer class="footer">
    <div class="footer__container">
      <a class='button button--small button--tertiary' href="">Cancelar</a>
      <a class='button button--small button--outline' href="">Rascunho</a>
      <a class='button button--small button--primary' href="">Agendar</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  align-items: center;
  background-color: #FFF;
  bottom: 0;
  left: 0;
  position: fixed;
  padding-bottom: 28px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 28px;
  width: 100%;
}

.footer__container {
  display: flex;
  justify-content: center;
}

.footer__container > .button {
  margin-right: 10px;
  margin-left: 10px;
}

.footer__container > .button:first-of-type {
  margin-right: 10px;
  margin-left: 0;
}

.footer__container > .button:last-of-type {
  margin-right: 0;
  margin-left: 10px;
}
</style>
