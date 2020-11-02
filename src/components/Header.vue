<template>
  <header class="header">
    <i class="header__bars fas fa-bars fa-2x"></i>
    <img class="header__logo"
      src="../assets/images/mlabs-logo.png"
      alt="logo">

    <div class="header__user">
      <img class="header__user-avatar" src="../assets/images/Avatar.svg" alt="avatar">
      <p class="header__user-name">Anselmo Carlos</p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  align-items: center;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  padding-left: 24px;
  padding-top: 16px;
  padding-right: 24px;
  height: 80px;

  .header__logo {
    display: none;

    @media only screen and (min-width: 961px) {
      display: flex;
      width: 115px;
    }
  }

  .header__bars {
    @media only screen and (min-width: 961px) {
      display: none;
    }
  }

  .header__user {
    display: flex;

    .header__user-avatar {
      width: 45px;
    }

    .header__user-name {
      display: none;

      @media only screen and (min-width: 961px) {
        align-items: center;
        color: rgb(0, 0, 0);
        display: flex;
        font-family: Poppins, Arial, sans-serif;
        font-size: 14px;
        font-weight: bold;
        margin-left: 8px;
      }
    }
  }
}
</style>
