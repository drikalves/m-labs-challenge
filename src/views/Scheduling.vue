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
            <button class="m-button m-button--secondary"> text1
            </button>
            <button class="m-button m-button--secondary"> text2
            </button>
          </div>
        </Card>
      </div>

      <Card class="scheduling__form-post-text" :title="'Texto do post'">
        <textarea
          v-model="post.text"
          class="m-textarea"
          placeholder="Escreva uma legenda">
        </textarea>
      </Card>

      <Card :title="'Upload de imagem'">
        <div class="scheduling__form-upload">
          <label
            class="m-button m-button--large m-button--outline"
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
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;

  @media only screen and (min-width: 961px) {
    padding-bottom: 104px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 40px;
    flex-direction: row;

    & > section {
      margin-right: 40px;
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
      margin-bottom: 40px;
    }
  }

  .scheduling__form-container {
    @media only screen and (min-width: 961px) {
      display: flex;
      flex-direction: row;
      margin-bottom: 40px;

      .m-card {
        margin-bottom: 0px;
        margin-right: 40px;

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
      justify-content: space-between;
      width: 100%;
    }
  }

  .scheduling__form-upload {
    border: 1px dashed rgb(189, 189, 189);
    border-radius: 4px;
    padding: 24px 32px;
    width: 100%;

    & > input[type="file"] {
      display: none;
    }

    .m-button {
      padding: 8px;
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
  }

  .scheduling__preview-button {
    @media only screen and (min-width: 961px) {
      display: none;
    }
  }
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
</style>
