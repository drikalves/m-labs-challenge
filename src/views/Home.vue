<template>
  <div class="home">
    <figure class="home__image">
      <img src="../assets/images/post-vector.svg" alt="post-illustration">
    </figure>

    <router-link :to="{name: 'Scheduling'}"
      class="home__button
      m-button
      m-button--large
      m-button--secondary">
      Agendar post
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 64px;

  .home__image {
    margin-bottom: 50px;
    margin-top: 84px;
    max-width: 100%;
  }

  .home__button {
    min-width: 184px;
  }
}
</style>
