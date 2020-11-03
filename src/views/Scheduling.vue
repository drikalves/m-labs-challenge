<template>
  <div class="scheduling">
    <section class="scheduling__form">
      <div class="scheduling__form-container">
        <Card :title="'Redes Sociais'">
          <div class="scheduling__form-social">
            <span
              class="m-button-social"
              :class="{'m-button-social--is-active': isInstagramPost}"
              @click="selectSocialMidia('instagram')"
            >
              <i class="fab fa-instagram"></i>
            </span>
            <span
              class="m-button-social"
              :class="{'m-button-social--is-active': isLinkedInPost}"
              @click="selectSocialMidia('linkedin')"
            >
              <i class="fab fa-linkedin-in"></i>
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

              <datetime
                v-model="post.date"
                type="date"
                input-class="m-input__field"
                format="dd/MM/yyyy"
                placeholder="DD/MM"
                auto
              />
            </div>

            <div class="m-input">
              <i class="m-input__icon fas fa-clock m-icon"></i>

              <datetime
                v-model="post.time"
                type="time"
                input-class="m-input__field"
                format="HH:mm"
                placeholder="HH:MM"
                auto
              />
            </div>
          </div>
        </Card>
      </div>

      <Card :title="'Texto do post'">
        <textarea
          v-model="post.text"
          class="scheduling__form__text m-textarea"
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
            class="scheduling__form__upload__button m-button m-button--outline"
            for="arquivo">
            Pesquisar imagens
          </label>
          <input @change="uploadFile" type="file" id="arquivo">
        </div>
      </Card>

      <button
        @click="openMobilePreview"
        class="scheduling__form__preview-button
          m-button
          m-button--large
          m-button--secondary
          m-button--block"
        >
        Visualizar post
      </button>
    </section>

    <section class="scheduling__preview">
      <Card
        class="scheduling__preview__post"
        :class="{ 'scheduling__preview__post--is-open': showMobilePreview }"
        title="Visualização do post"
        :closable="!isDesktop"
        @closed="closeMobilePreview"
        >

        <PostInstagram v-if="isInstagramPost" :post="post" />

        <PostLinkedin v-else-if="isLinkedInPost" :post="post" />

        <div v-else class="scheduling__preview__post__default">
          <p class="scheduling__preview__post__default__text">
            Aguardando conteúdo. Informe os canais e as mídias desejadas para visualização.
          </p>

          <figure>
            <img src="../assets/images/preview-default.png" alt="Imagem default">
          </figure>
        </div>
      </Card>
    </section>

    <Modal :open="showScheduleConfirmationModal" />
    <Footer :post="post" @scheduled="showScheduleConfirmation" />
  </div>
</template>

<script>
import VueScreenSize from 'vue-screen-size';

import Footer from '@/components/scheduling/Footer.vue';
import Card from '@/components/scheduling/Card.vue';
import PostInstagram from '@/components/scheduling/PostInstagram.vue';
import PostLinkedin from '@/components/scheduling/PostLinkedin.vue';
import Modal from '@/components/scheduling/Modal.vue';

export default {
  name: 'Scheduling',
  components: {
    Footer,
    Card,
    PostInstagram,
    PostLinkedin,
    Modal,
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
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
      date: null,
      showMobilePreview: false,
      showScheduleConfirmationModal: false,
    };
  },
  computed: {
    isDesktop() {
      return this.$vssWidth >= 961;
    },
    isInstagramPost() {
      return this.post.socialMedia === 'instagram';
    },
    isLinkedInPost() {
      return this.post.socialMedia === 'linkedin';
    },
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
    openMobilePreview() {
      this.showMobilePreview = true;
    },
    closeMobilePreview() {
      this.showMobilePreview = false;
    },
    showScheduleConfirmation() {
      this.showScheduleConfirmationModal = true;
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
  overflow: hidden;

  @media only screen and (min-width: 961px) {
    flex-direction: row;
    padding-bottom: 96px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 32px;

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
  align-content: stretch;
  display: flex;
  flex-wrap: wrap;

  .m-card {
    margin-bottom: 16px;

    @media only screen and (min-width: 961px) {
      margin-bottom: 32px;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  .scheduling__form-container {
    width: 100%;

    @media only screen and (min-width: 961px) {
      display: flex;
      flex-direction: row;
      margin-bottom: 32px;
      width: 100%;

      .m-card {
        margin-bottom: 0;
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
        margin-right: 16px;
      }
    }
  }

  .scheduling__form__text {
    font-family: "Poppins", sans-serif;
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
        margin-bottom: 20px;
      }
    }

    .scheduling__form__upload__button {
      display: inline-flex;
      text-align: center;
      font-size: 16px;
      max-width: 180px;
    }
  }

  .scheduling__form__preview-button {
    font-size: 16px;

    @media only screen and (min-width: 961px) {
      display: none;
    }
  }
}

.scheduling__preview {
  align-content: stretch;
  display: flex;
  min-height: 100%;

  .scheduling__preview__post {
    display: none;

    &--is-open {
      display: flex;
      left: 0;
      min-height: 100vh;
      position: absolute;
      right: 0;
      top: 80px;
      overflow-x: hidden;
      z-index: 1;
    }

    @media only screen and (min-width: 961px) {
      display: flex;
      position: static;
      min-height: auto;
      z-index: 0;
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
}
</style>
