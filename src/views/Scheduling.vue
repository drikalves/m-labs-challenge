<template>
  <div class="scheduling">
    <form class="scheduling-form">
      <div class="m-card">
        <div class="m-card-title">
          Redes Sociais
        </div>

        <div class="m-card-content social-networks">
          <i class="fab fa-instagram" @click="selectSocialMidia('instagram')"></i>
          <i class="fab fa-linkedin-in" @click="selectSocialMidia('linkedin')"></i>
          <i class="fab fa-youtube fab--is-disabled"></i>
          <i class="fab fa-pinterest fab--is-disabled"></i>
          <i class="fab fa-twitter fab--is-disabled"></i>
          <i class="fab fa-facebook-f fab--is-disabled"></i>
        </div>
      </div>

      <div class="m-card">
        <div class="m-card-title"
          >Data de publicação
        </div>

        <div class="m-card-content post-datetime">
          <div class="m-input-container">
            <i class="fas fa-calendar-alt m-icon"></i>
            <input v-model="post.date" class="m-input-field" type="text" placeholder="DD/MM">
          </div>

          <div class="m-input-container">
            <i class="fas fa-clock m-icon"></i>
            <input v-model="post.time" class="m-input-field" type="text" placeholder="HH:MM">
          </div>
        </div>
      </div>

      <div class="m-card">
        <div class="m-card-title">
          Texto do post
        </div>

        <div class="m-card-content">
          <textarea
          v-model="post.text"
          class="m-textarea"
          placeholder="Escreva uma legenda"></textarea>
        </div>
      </div>

      <div class="m-card">
        <div class="m-card-title">
          Upload de imagem
        </div>

        <div class="m-card-content">
          <div class="upload-image">
            <label
              class="m-button m-button--outline"
              for="arquivo">
              Pesquisar imagens
            </label>
            <input @change="uploadFile" type="file" id="arquivo">
          </div>
        </div>
      </div>

      <button class="m-button m-button--large m-button--secondary m-button--block" href="">
        Visualizar post
      </button>
    </form>

    <!-- <div class="m-modal m-modal--is-open" aria-modal="true">
      <div class="m-modal__wrapper">
        <div class="m-modal__dialog">
          <div>
            <img src="../assets/images/emoji.png" />
            <p>Agendado com sucesso!</p>
          </div>
        </div>
        <button
            class="m-button
            m-button--primary
            m-button--large">
            OK
          </button>
      </div>
    </div> -->

    <Footer :post="post" />
  </div>
</template>

<script>
import Footer from '@/components/scheduling/Footer.vue';

export default {
  name: 'Scheduling',
  components: {
    Footer,
  },
  data() {
    return {
      post: {
        socialMedia: null,
        date: null,
        time: null,
        text: '',
        image: null,
      },
    };
  },
  methods: {
    uploadFile({ target }) {
      const [file] = target.files;
      this.post.image = file;
    },
    selectSocialMidia(value) {
      this.post.socialMedia = value;
    },
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

.post-datetime > .m-input-container {
  width: 45%;
}

.upload-image {
  border: 1px dashed #BDBDBD;
  border-radius: 4px;
  min-height: 80px;
  width: 100%;
}

.upload-image > label.m-button {
  margin: 24px 43px;
  font-weight: bold;
}

.upload-image > input[type="file"] {
  display: none;
}
</style>
