<template>
  <div class="m-card">
    <div class="m-card__title">
      {{ title }}
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
  },
};
</script>

<style lang="scss" scoped>
.m-card {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(224, 224, 224);
  border-radius: 4px;
  color: rgb(51, 51, 51);
  font-family: Poppins, Arial, sans-serif;
  margin-bottom: 16px;
  width: 100%;

  .m-card__title {
    border-bottom: 1px solid rgb(224, 224, 224);
    font-size: 16px;
    font-weight: bold;
    padding: 8px;
  }

  .m-card__content {
    padding: 24px;
  }
}
</style>
