<template>
  <footer class="footer">
    <div class="footer__container">
      <router-link :to="{name: 'Home'}" class="m-button m-button--small m-button--tertiary">
        Cancelar
      </router-link>

      <button class="m-button m-button--small m-button--outline" href="">Rascunho</button>

      <button @click="schedulePost" class="m-button m-button--small m-button--primary">
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
  background-color: rgb(255, 255, 255);
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

.footer__container > .m-button {
  margin-right: 10px;
  margin-left: 10px;
}

.footer__container > .m-button:first-of-type {
  margin-right: 10px;
  margin-left: 0;
}

.footer__container > .m-button:last-of-type {
  margin-right: 0;
  margin-left: 10px;
}
</style>
