<template>
  <div class="home">
    <figure class="home-image-container">
      <img class="home-image" src="../assets/images/Vetor-posts.png" alt="Vector-posts">
    </figure>

    <a class="home-button" href="#">Agendar post</a>
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

.home-image-container {
  margin-top: 85px;
  margin-bottom: 50px;
}

.home-image {
  width: 100%;
}

.home-button {
  display: block;
  text-decoration: none;
  color: #FFF;
  background-color: #F2994A;
  padding-top: 10px;
  padding-right: 30px;
  padding-bottom: 10px;
  padding-left: 30px;
  text-align: center;
  border: 1px solid #E0812C;
  border-radius: 4px;
  margin: auto;
}
</style>
