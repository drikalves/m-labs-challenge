<template>
  <div class="post-linkedin">
    <div class="post-linkedin__header">
      <figure class="post-linkedin__header__logo">
        <img src="../assets/images/linkedin-logo.svg" alt="Linkedin logo" />
      </figure>

      <div class="post-linkedin__header__text">
        <p class="post-linkedin__header__text__title">Anselmo Carlos</p>
        <p class="post-linkedin__header__text__date">
          {{ post.date }}
        </p>
      </div>
    </div>

    <p class="post-linkedin__text">
      {{ post.text }}
    </p>

    <figure class="post-linkedin__image">
      <img :src="post.image">
    </figure>

    <div class="post-linkedin__footer">
      <p class="post-linkedin__footer__comments">5 comentários</p>

      <div class="post-linkedin__footer__actions">
        <i class="far fa-thumbs-up"></i>
        <i class="far fa-comment-alt"></i>
        <i class="fas fa-share"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostLinkedin',
  props: {
    post: Object,
  },
};
</script>

<style lang="scss" scoped>
.post-linkedin {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(189, 189, 189);
  border-radius: 4px;
  color: rgb(51, 51, 51);
  display: flex;
  flex-direction: column;
  font-family: Poppins, Arial, sans-serif;
  max-width: 368px;

  .post-linkedin__header {
    display: flex;
    padding-bottom: 14px;
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 14px;

    .post-linkedin__header__logo {
      margin-right: 12px;
    }

    .post-linkedin__header__text {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .post-linkedin__header__text__title {
        align-items: center;
        display: flex;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 6px;
      }

      .post-linkedin__header__text__date {
        color: rgb(130, 130, 130);
        font-size: 12px;
      }
    }
  }

  .post-linkedin__text {
    font-size: 14px;
    padding-bottom: 14px;
    padding-left: 14px;
    padding-right: 14px;
    word-wrap: break-word;
  }

  .post-linkedin__image {
    max-width: 100%;

    img {
      height: 368px;
      width: 100%;
      object-fit: cover;
    }
  }

  .post-linkedin__footer {
    display: flex;
    flex-direction: column;

    .post-linkedin__footer__comments {
      border-bottom: 1px solid rgb(189, 189, 189);
      color: rgb(130, 130, 130);
      font-size: 12px;
      line-height: 12px;
      padding-bottom: 8px;
      padding-left: 14px;
      padding-right: 14px;
      padding-top: 8px;
      width: 100%;
    }

    .post-linkedin__footer__actions {
      display: flex;
      justify-content: flex-start;
      padding-bottom: 10px;
      padding-left: 14px;
      padding-right: 14px;
      padding-top: 10px;

      .far {
        margin-right: 14px;

        &:last-of-type {
          margin: 0;
        }
      }
    }
  }
}
</style>
