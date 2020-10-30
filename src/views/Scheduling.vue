<template>
  <div class="scheduling">
    <form class="scheduling-form">
      <div class="m-card">
        <div class="m-card__title">
          Redes Sociais
        </div>

        <div class="m-card__content scheduling__form--social">
          <i class="m-button-social fab fa-instagram" @click="selectSocialMidia('instagram')"></i>
          <i class="m-button-social fab fa-linkedin-in" @click="selectSocialMidia('linkedin')"></i>
          <i class="m-button-social m-button-social--is-disabled fab fa-youtube"></i>
          <i class="m-button-social m-button-social--is-disabled fab fa-pinterest"></i>
          <i class="m-button-social m-button-social--is-disabled fab fa-twitter"></i>
          <i class="m-button-social m-button-social--is-disabled fab fa-facebook-f"></i>
        </div>
      </div>

      <div class="m-card">
        <div class="m-card__title"
          >Data de publicação
        </div>

        <div class="m-card__content scheduling__form--datetime">
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
        <div class="m-card__title">
          Texto do post
        </div>

        <div class="m-card__content">
          <textarea
          v-model="post.text"
          class="m-textarea"
          placeholder="Escreva uma legenda"></textarea>
        </div>
      </div>

      <div class="m-card">
        <div class="m-card__title">
          Upload de imagem
        </div>

        <div class="m-card__content">
          <div class="scheduling__form--upload">
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

  .scheduling__form--social {
    justify-content: space-between;
  }

  .scheduling__form--datetime {
    display: flex;
    justify-content: space-between;

    & > .m-input-container {
      width: 45%;
    }
  }

  .scheduling__form--upload {
    border: 1px dashed rgb(189, 189, 189);
    border-radius: 4px;
    min-height: 80px;
    width: 100%;

    & > label.m-button {
      margin: 24px 40px;
      font-weight: bold;
    }

    & > input[type="file"] {
      display: none;
    }
  }
}
</style>
