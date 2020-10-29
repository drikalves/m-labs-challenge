<template>
  <div class="scheduling">
    <form class="scheduling-form">
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
            <input class="input-field" type="text" placeholder="DD/MM">
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

      <div class="card">
        <div class="card-title">
          Upload de imagem
        </div>

        <div class="card-content">
          <div class="upload-image">
            <label
              class="button button--outline"
              for="arquivo">
              Pesquisar imagens
            </label>
            <input type="file" id="arquivo">
          </div>
        </div>
      </div>

      <button class="button button--large button--secondary button--block" href="">
        Visualizar post
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
.scheduling {
  padding-bottom: 80px;
}

.scheduling-form {
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

.upload-image {
  border: 1px dashed #BDBDBD;
  border-radius: 4px;
  min-height: 80px;
  width: 100%;
}

.upload-image > label.button {
  margin: 24px 43px;
  font-weight: bold;
}

.upload-image > input[type="file"] {
  display: none;
}
</style>
