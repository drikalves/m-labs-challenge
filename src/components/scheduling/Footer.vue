<template>
  <footer class="footer">
    <div class="footer__container">
      <router-link :to="{name: 'Home'}" class="m-button m-button--small m-button--tertiary">
        Cancelar
      </router-link>

      <button class="m-button m-button--small m-button--outline" href="">Rascunho</button>

      <button
        @click="schedule()"
        class="m-button m-button--small m-button--primary"
        :class="{ 'm-button--is-disabled': !isValidPost }"
      >
        Agendar
      </button>
    </div>
  </footer>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Footer',
  props: {
    post: Object,
  },
  computed: {
    isValidPost() {
      return this.post.socialMedia !== null
      && this.post.date !== null
      && this.post.time !== null
      && this.post.text !== null
      && this.post.image !== null;
    },
  },
  methods: {
    ...mapActions(['schedulePost']),
    schedule() {
      if (this.isValidPost) {
        this.schedulePost(this.post);
        this.$router.push({ name: 'SchedulingList' });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  align-items: center;
  background-color: rgb(255, 255, 255);
  bottom: 0;
  display: flex;
  height: 64px;
  left: 0;
  position: fixed;
  padding-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  justify-content: center;
  width: 100%;
  z-index: 0;

  @media only screen and (min-width: 961px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  .footer__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    @media only screen and (min-width: 961px) {
      justify-content: flex-end;

      .m-button {
        margin-right: 16px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
