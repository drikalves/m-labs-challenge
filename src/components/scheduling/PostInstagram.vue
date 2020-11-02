<template>
  <div class="post-instagram">
    <div class="post-instagram__header">
      <figure class="post-instagram__header__logo">
        <img src="../../assets/images/instagram-logo.svg"
          alt="Instagram logo">
      </figure>

      <p class="post-instagram__header__title">Anselmo Carlos</p>
    </div>

    <figure class="post-instagram__image">
      <img :src="post.image">
    </figure>

    <div class="post-instagram__footer">
      <div class="post-instagram__footer__actions">
        <div>
          <i class="far fa-heart fa-1x"></i>
          <i class="far fa-comment"></i>
        </div>

        <i class="far fa-bookmark"></i>
      </div>
      <p class="post-instagram__footer__text">
        {{ post.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostInstagram',
  props: {
    post: Object,
  },
};
</script>

<style lang="scss" scoped>
.post-instagram {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(224, 224, 224);
  border-radius: 4px;
  color: rgb(51, 51, 51);
  display: flex;
  flex-direction: column;
  font-family: Poppins, Arial, sans-serif;
  max-width: 368px;

  .post-instagram__header {
    display: flex;
    padding-bottom: 14px;
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 14px;

    .post-instagram__header__logo {
      margin-right: 12px;
    }

    .post-instagram__header__title {
      align-items: center;
      display: flex;
      font-weight: bold;
    }
  }

  .post-instagram__image {
    max-width: 100%;

    img {
      height: 368px;
      object-fit: cover;
      width: 100%;
    }
  }

  .post-instagram__footer {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    padding-left: 14px;
    padding-top: 10px;
    padding-right: 14px;

    .post-instagram__footer__actions {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;

      div > .far:first-of-type {
        margin-right: 14px;
      }

      .far {
        font-size: 22px;
      }
    }

    .post-instagram__footer__text {
      font-size: 14px;
      word-wrap: break-word;
    }
  }
}
</style>
