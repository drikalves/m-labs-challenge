<template>
  <div class="m-card">
    <div class="m-card__header">
      {{ title }}

      <button
        v-if="closable"
        type="button"
        aria-label="Fechar"
        class="m-modal__close-button"
        title="Fechar"
        @click="closed"
        >
        <i class="m-modal__close-icon fas fa-times"></i>
      </button>
    </div>

    <div class="m-card__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    closable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closed() {
      if (this.closable) this.$emit('closed');
    },
  },
};
</script>

<style lang="scss" scoped>
.m-card {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(224, 224, 224);
  border-radius: 4px;
  color: rgb(51, 51, 51);
  display: flex;
  flex-direction: column;
  width: 100%;

  .m-card__header {
    display: flex;
    border-bottom: 1px solid rgb(224, 224, 224);
    font-size: 16px;
    padding: 8px;
    justify-content: space-between;

    .m-modal__close-button {
      align-self: flex-end;
      background-color: white;
      border-style: none;
      cursor: pointer;
      flex-shrink: 0;
      padding: 0;
      pointer-events: auto;

      .m-modal__close-icon {
        height: 12px;
        width: 12px;
      }
    }
  }

  .m-card__content {
    display: flex;
    justify-content: center;
    padding: 18px;
  }
}
</style>
