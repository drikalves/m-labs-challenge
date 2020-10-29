<template>
  <footer class="footer">
    <div class="footer__container">
      <router-link :to="{name: 'Home'}" class="button button--small button--tertiary">
        Cancelar
      </router-link>

      <button class="button button--small button--outline" href="">Rascunho</button>

      <button @click="schedulePost" class="button button--small button--primary">
        Agendar
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    post: Object,
  },
  methods: {
    schedulePost() {
      console.log(this.post);
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  align-items: center;
  background-color: #FFF;
  bottom: 0;
  left: 0;
  position: fixed;
  padding-bottom: 28px;
  padding-left: 30px;
  padding-right: 30px;
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
