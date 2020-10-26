<template>
  <div class="scheduling">
    <form class="schedule-form">
      <div class="card">
        <div class="card-title">
          Redes Sociais
        </div>

        <div class="card-content social-networks">
          <i class="circle-icon fab fa-instagram"></i>
          <i class="circle-icon fab fa-linkedin-in"></i>
          <i class="circle-icon circle-icon--is-disabled fab fa-youtube"></i>
          <i class="circle-icon circle-icon--is-disabled fab fa-pinterest"></i>
          <i class="circle-icon circle-icon--is-disabled fab fa-twitter"></i>
          <i class="circle-icon circle-icon--is-disabled fab fa-facebook-f"></i>
        </div>
      </div>

      <div class="card">
        <div class="card-title"
          >Data de publicação
        </div>

        <div class="card-content"></div>
      </div>

      <div class="card">
        <div class="card-title">
          Texto do post
        </div>

        <div class="card-content">
          <textarea class="textarea" placeholder="Escreva uma legenda" name="text-post"></textarea>
        </div>
      </div>

      <button class="button button--large button--secondary button--block" href="">
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
.scheduling{
  padding-bottom: 80px;
}

.schedule-form {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 17px 30px;
}

.social-networks {
  justify-content: space-between;
}
</style>
