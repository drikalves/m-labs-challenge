<template>
  <div
    class="m-modal"
    :class="{'m-modal--is-open': open}"
    aria-modal="true">
    <div class="m-modal__wrapper">
      <div class="m-modal__dialog">
        <img src="../../assets/images/emoji.svg" alt="Emoji" />
        <p>Agendado com sucesso!</p>
        <button
          class="m-modal__button m-button m-button--large m-button--primary"
          @click="goToSchedulingList"
        >
          OK
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    goToSchedulingList() {
      this.$router.push({ name: 'SchedulingList' });
    },
  },
};
</script>

<style lang="scss" scoped>
.m-modal {
  align-items: center;
  background-color: rgb(0, 0, 0, 50%);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;

  &--is-open {
    max-height: 100vh;
    opacity: 1;
    transition: all 0s, opacity 0.2;
  }
}

.m-modal__wrapper {
  align-items: center;
  background-color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
  height: 419px;
  justify-content: center;
  padding-bottom: 60px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 60px;
  pointer-events: none;
  width: 350px;

  @media only screen and (min-width: 961px) {
    min-width: 872px;
  }
}

.m-modal__dialog {
  border-radius: 4px;
  font-size: 18px;
  height: 100%;
  line-height: 36px;
  pointer-events: auto;
  text-align: center;
  width: 100%;
}

.m-modal__button {
  display: inline-flex;
  height: 45px;
  margin-top: 20px;
  width: 184px;
}
</style>
