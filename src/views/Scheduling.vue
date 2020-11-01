<template>
  <div class="scheduling">
    <section class="scheduling__form">
      <div class="scheduling__form-container">
        <Card :title="'Redes Sociais'">
          <div class="scheduling__form-social">
            <span class="m-button-social">
              <i class="fab fa-instagram" @click="selectSocialMidia('instagram')"></i>
            </span>
            <span class="m-button-social">
              <i class="fab fa-linkedin-in" @click="selectSocialMidia('linkedin')"></i>
            </span>
            <span class="m-button-social m-button-social--is-disabled ">
              <i class="fab fa-youtube"></i>
            </span>
            <span class="m-button-social m-button-social--is-disabled">
              <i class="fab fa-pinterest"></i>
            </span>
            <span class="m-button-social m-button-social--is-disabled">
              <i class="fab fa-twitter"></i>
            </span>
            <span class="m-button-social m-button-social--is-disabled">
              <i class="fab fa-facebook-f"></i>
            </span>
          </div>
        </Card>

        <Card :title="'Data de publicação'">
          <div class="scheduling__form-datetime">
            <div class="m-input">
              <i class="m-input__icon fas fa-calendar-alt"></i>

              <input v-model="post.date"
                class="m-input__field"
                type="text"
                placeholder="DD/MM"
                name="date">
            </div>

            <div class="m-input">
              <i class="m-input__icon fas fa-clock m-icon"></i>

              <input v-model="post.time"
                class="m-input__field"
                type="text"
                placeholder="HH:MM"
                name="time">
            </div>
          </div>
        </Card>
      </div>

      <Card :title="'Texto do post'">
        <textarea
          v-model="post.text"
          class="m-textarea"
          placeholder="Escreva uma legenda">
        </textarea>
      </Card>

      <Card :title="'Upload de imagem'">
        <div class="scheduling__form__upload">
          <i class="scheduling__form__upload__icon fas fa-cloud-upload-alt"></i>

          <p class="scheduling__form__upload__text">
            Arraste e solte uma imagem aqui ou clique no botão abaixo
          </p>

          <label
            class="scheduling__form__upload__button m-button m-button--large m-button--outline"
            for="arquivo">
            Pesquisar imagens
          </label>
          <input @change="uploadFile" type="file" id="arquivo">
        </div>
      </Card>
    </section>

    <section class="scheduling__preview">
      <Card class="scheduling__preview__post" title="Visualização do post">
        <div class="scheduling__preview__post__default">
          <p class="scheduling__preview__post__default__text">
            Aguardando conteúdo. Informe os canais e as mídias desejadas para visualização.
          </p>

          <figure>
            <img src="../assets/images/preview-default.png" alt="Imagem default">
          </figure>
        </div>

        <!-- <PostInstagram /> -->

        <!-- <PostLinkedin /> -->
      </Card>

      <button class="scheduling__preview-button
        m-button
        m-button--large
        m-button--secondary
        m-button--block" href="">
        Visualizar post
      </button>
    </section>

    <Footer :post="post" />
  </div>
</template>

<script>
import Footer from '@/components/scheduling/Footer.vue';
import Card from '@/components/Card.vue';
// import PostInstagram from '@/components/PostInstagram.vue';
// import PostLinkedin from '@/components/PostLinkedin.vue';

export default {
  name: 'Scheduling',
  components: {
    Footer,
    Card,
    // PostInstagram,
    // PostLinkedin,
  },
  data() {
    return {
      post: {
        socialMedia: null,
        date: null,
        time: null,
        text: '',
        image: null,
        status: 'scheduled',
      },
    };
  },
  methods: {
    uploadFile(event) {
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.post.image = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    previewImage(event) {
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    selectSocialMidia(value) {
      this.post.socialMedia = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.scheduling {
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;

  @media only screen and (min-width: 961px) {
    padding-bottom: 104px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 32px;
    flex-direction: row;

    & > section {
      margin-right: 32px;
      width: 50%;

      &:last-of-type {
        margin: 0;
      }
    }
  }
}

.scheduling__form {
  display: flex;
  flex-direction: column;

  .m-card {
    margin-bottom: 16px;

    @media only screen and (min-width: 961px) {
      margin-bottom: 32px;
    }
  }

  .scheduling__form-container {
    @media only screen and (min-width: 961px) {
      display: flex;
      flex-direction: row;
      margin-bottom: 32px;

      .m-card {
        margin-bottom: 0px;
        margin-right: 32px;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    .scheduling__form-social {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }

    .scheduling__form-datetime {
      display: flex;
      width: 100%;

      .m-input:first-of-type {
        margin-right: 30px;
      }
    }
  }

  .scheduling__form__upload {
    border: 1px dashed rgb(189, 189, 189);
    border-radius: 4px;
    color: rgb(130, 130, 130);
    padding: 24px 32px;
    text-align: center;
    width: 100%;

    & > input[type="file"] {
      display: none;
    }

    .scheduling__form__upload__icon {
      display: none;

      @media only screen and (min-width: 961px) {
        display: block;
        font-size: 45px;
        margin-bottom: 20px;
      }
    }

    .scheduling__form__upload__text {
      display: none;

      @media only screen and (min-width: 961px) {
        display: block;
        font-size: 16px;
        margin-bottom: 24px;
      }
    }

    .scheduling__form__upload__button {
      display: inline;
      font-size: 16px;
      max-width: 180px;
    }
  }
}

.scheduling__preview {
  min-height: 100%;

  .scheduling__preview__post {
    display: none;

    @media only screen and (min-width: 961px) {
      display: flex;
    }

    .scheduling__preview__post__default {
      padding-bottom: 46px;
      padding-top: 46px;
      text-align: center;

      .scheduling__preview__post__default__text {
        color: rgb(130, 130, 130);
        font-size: 16px;
        margin-bottom: 40px;
        text-align: center;
      }
    }
  }

  .scheduling__preview-button {
    font-size: 16px;

    @media only screen and (min-width: 961px) {
      display: none;
    }
  }
}
</style>
