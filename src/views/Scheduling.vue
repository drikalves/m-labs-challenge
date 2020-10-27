<template>
  <div class="scheduling">
    <form class="schedule-form">
      <div class="card">
        <div class="card-title">
          Redes Sociais
        </div>

        <div class="card-content social-networks">
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-pinterest"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-facebook-f"></i>
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

.fab {
  background-color: white;
  border: 1px solid #989898;
  padding: 8px;
  width: 33px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;

  &:hover {
    border-color: #EF9F2E;
    color: #EF9F2E;
  }

  &:disabled {
    @extend .fab--is-disabled;
  }
}

.fab--is-disabled {
  background-color: #DDDDDD;
  border-color: #989898;
  color: #989898;
  pointer-events: none;

  & > * {
    color: #989898;
  }
}
</style>
