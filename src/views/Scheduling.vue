<template>
  <div class="scheduling">
    <section class="scheduling__form">
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
            class="m-button m-button--outline"
            for="arquivo">
            Pesquisar imagens
          </label>
          <input @change="uploadFile" type="file" id="arquivo">
        </div>
      </Card>
    </section>

    <section class="scheduling__preview">
      <Card class="scheduling__preview-post" :title="'Visualização do post'">
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

export default {
  name: 'Scheduling',
  components: {
    Footer,
    Card,
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
  padding-bottom: 16px;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 16px;

  @media only screen and (min-width: 961px) {
    flex-direction: row;

    & > section {
      height: 100%;
      width: 50%;
      margin-right: 40px;

      &:last-of-type {
        margin: 0;
      }
    }
  }
}

.scheduling__preview-button {
  @media only screen and (min-width: 961px) {
    display: none;
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

    &:last-of-type {
      margin: 0;
    }
  }
  .scheduling__form-social {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  // .scheduling__datetime-card {
  //   display: flex;
  //   justify-content: space-between;
  //   width: 100%;

  //   & > .m-input-container {
  //     width: 45%;
  //   }

  //   @media screen and (min-width: 960px){
  //     min-height: 110px;
  //     min-width: 315px;
  //   }
  // }

  .scheduling__form-upload {
    border: 1px dashed rgb(189, 189, 189);
    border-radius: 4px;
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
