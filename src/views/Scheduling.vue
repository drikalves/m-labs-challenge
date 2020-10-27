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
          <i class="fab fa-youtube fab--is-disabled"></i>
          <i class="fab fa-pinterest fab--is-disabled"></i>
          <i class="fab fa-twitter fab--is-disabled"></i>
          <i class="fab fa-facebook-f fab--is-disabled"></i>
        </div>
      </div>

      <div class="card">
        <div class="card-title"
          >Data de publicação
        </div>

        <div class="card-content post-datetime">
          <div class="input-container">
            <i class="fas fa-calendar-alt icon"></i>
            <input class="input-field" type="text" placeholder="DD/MM/AAAA">
          </div>

          <div class="input-container">
            <i class="fas fa-clock icon"></i>
            <input class="input-field" type="text" placeholder="HH:MM">
          </div>
        </div>
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
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 17px 30px;
  width: 100%;
}

.social-networks {
  justify-content: space-between;
}

.post-datetime {
  justify-content: space-between;
}

.post-datetime > .input-container {
  width: 45%;
}

.fab {
  background-color: white;
  border: 1px solid #989898;
  padding: 8px;.post-datetime > .input-container:first-of-type {
  margin-right: 15px;
}
  width: 33px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;

  &:hover {
    background-color: #FFF3E0;
    border-color: #EF9F2E;
    color: #EF9F2E;
  }

  &:disabled {
    @extend .fab--is-disabled;
  }
}

.fab--is-disabled {
  background-color: #DDDDDD;
  border-color: #9E9E9E;
  color: #989898;
  pointer-events: none;

  & > * {
    color: #989898;
  }
}
</style>
