<template>
  <div class="page-scheduling-list">
    <table class="m-table">
      <tr>
        <th>Redes Sociais</th>
        <th>Mídia</th>
        <th>Texto</th>
        <th>Data</th>
        <th>Ações</th>
        <th>Status</th>
      </tr>

      <tr>
        <td>
          <i class="page-scheduling-list__icon
            page-schedule-list__icon--instagram
            fab
            fa-instagram">
          </i>
        </td>
        <td>
          <img class="page-scheduling-list__img" src="../assets/images/photo1.jpg" alt="" />
        </td>
        <td>
          <p>Aqui vai o texto descritivo desse post</p>
        </td>
        <td>
          <p>09/09/2020 às 14:45h</p>
        </td>
        <td>
          <a href="">Preview</a>
        </td>
        <td>
          <div class="page-scheduling-list__status
            page-scheduling-list__status--is-scheduled"></div>
        </td>
      </tr>
      <tr>
        <td>
          <i class="page-scheduling-list__icon
            page-schedule-list__icon--linkedin-in
            fab fa-linkedin-in"></i>
        </td>
        <td>
          <img class="page-scheduling-list__img" src="../assets/images/photo2.jpg" alt="" />
        </td>
        <td>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
           officia consequat duis enim velit mollit.</p>
        </td>
        <td>
          <p>09/09/2020 às 14:45h</p>
        </td>
        <td>
          <a href="">Preview</a>
        </td>
        <td>
          <div class="page-scheduling-list__status
            page-scheduling-list__status--is-posted"></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SchedulingList',
  components: {},
};
</script>

<style lang="scss" scoped>
.page-scheduling-list {
  max-width: 100%;
  overflow: auto;
  padding-bottom: 80px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  white-space: nowrap;

  .page-scheduling-list__icon {
    align-items: center;
    border-radius: 50%;
    color: rgb(255, 255, 255);
    display: flex;
    font-size: 18px;
    height: 32px;
    justify-content: center;
    width: 32px;

    &.page-schedule-list__icon--instagram {
      background-color: rgb(214, 15, 134);
    }

    &.page-schedule-list__icon--linkedin-in {
      background-color: rgb(58, 112, 218);
    }
  }

  .page-scheduling-list__img {
    height: 50px;
    width: 50px;
  }

  .page-scheduling-list__status {
    align-items: center;
    border-radius: 50%;
    display: flex;
    height: 12px;
    width: 12px;

    &.page-scheduling-list__status--is-scheduled{
      background-color: rgb(47, 128, 237);
    }

    &.page-scheduling-list__status--is-posted{
      background-color: rgb(39, 174, 96);
    }

    &.page-scheduling-list__status--is-posted-with-reservations{
      background-color: rgb(242, 201, 76);
    }

    &.page-scheduling-list__status--not-approved{
      background-color: rgb(235, 87, 87);
    }
  }
}
</style>
