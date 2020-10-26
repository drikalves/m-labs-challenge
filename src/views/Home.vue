<template>
  <div class="home">
    <figure class="home-image__container">
      <img class="home-image" src="../assets/images/Vetor-posts.png" alt="Vector-posts">
    </figure>

    <router-link :to="{name: 'Scheduling'}" class="button button--large button--secondary">
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.home-image__container {
  margin-top: 85px;
  margin-bottom: 50px;
}

.home-image {
  width: 100%;
}
</style>
