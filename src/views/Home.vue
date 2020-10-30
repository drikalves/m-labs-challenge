<template>
  <div class="home">
    <figure class="home__image">
      <img src="../assets/images/post-vector.svg" alt="post-illustration">
    </figure>

    <router-link :to="{name: 'Scheduling'}"
      class="home__button
      m-button
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

  .home__image {
    max-width: 100%;
    margin-top: 85px;
    margin-bottom: 50px;
  }

  .home__button {
    width: 184px;
  }
}
</style>
