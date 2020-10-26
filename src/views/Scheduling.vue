<template>
  <div class="scheduling">
    <form class="schedule-form">
      <div class="card">Redes Sociais</div>
      <div class="card">Data da publicação</div>
      <div class="card">Texto do post</div>
      <div class="card">Upload de imagem</div>

      <button class="button button--large button--secondary button--fullwidth" href="">
        Vizualizar post
      </button>
    </form>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/scheduling/Footer.vue';

export default {
  name: 'Scheduling',
  components: {
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.schedule-form {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 17px 30px;
}

.card {
  background-color: #FFF;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  padding: 18px;
  margin-bottom: 15px;
  width: 100%;
}
</style>
