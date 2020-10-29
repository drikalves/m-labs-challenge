<template>
  <div class="scheduling-list">
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
          <i class="scheduling-list__icon
            schedule-list__icon--instagram
            fab
            fa-instagram">
          </i>
        </td>
        <td>
          <img class="scheduling-list__midia" src="../assets/images/photo1.jpg" alt="" />
        </td>
        <td>
          <p class="scheduling-list__text">Aqui vai o texto descritivo desse post</p>
        </td>
        <td>
          <p>09/09/2020 às 14:45h</p>
        </td>
        <td>
          <a href="">Preview</a>
        </td>
        <td>
          <div class="scheduling-list__status">
            <div class="scheduling-list__status-badge
            scheduling-list__status-badge--is-scheduled">
            </div>
            <p>Agendado</p>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <i class="scheduling-list__icon
            schedule-list__icon--linkedin-in
            fab fa-linkedin-in"></i>
        </td>
        <td>
          <img class="scheduling-list__midia" src="../assets/images/photo2.jpg" alt="" />
        </td>
        <td>
          <p class="scheduling-list__text">Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </td>
        <td>
          <p>09/09/2020 às 14:45h</p>
        </td>
        <td>
          <a href="">Preview</a>
        </td>
        <td>
          <div class="scheduling-list__status">
            <div class="scheduling-list__status-badge
            scheduling-list__status-badge--is-posted">
            </div>
            <p>Postado</p>
          </div>
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
.scheduling-list {
  max-width: 100%;
  overflow: auto;
  padding-bottom: 80px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  white-space: nowrap;

  .scheduling-list__icon {
    align-items: center;
    border-radius: 50%;
    color: rgb(255, 255, 255);
    display: flex;align-items: center;
    font-size: 18px;
    height: 32px;
    justify-content: center;
    width: 32px;

    &.schedule-list__icon--instagram {
      background-color: rgb(214, 15, 134);
    }

    &.schedule-list__icon--linkedin-in {
      background-color: rgb(58, 112, 218);
    }
  }

  .scheduling-list__midia {
    height: 50px;
    width: 50px;
  }

  .scheduling-list__text {
    max-width: 600px;
    min-width: 400px;
    text-align: left;
    white-space: normal;
  }

  .scheduling-list__status {
    align-items: center;
    display: flex;
    justify-content: flex-start;

    .scheduling-list__status-badge {
      border-radius: 50%;
      display: flex;
      height: 12px;
      margin-right: 6px;
      width: 12px;

      &.scheduling-list__status-badge--is-scheduled{
        background-color: rgb(47, 128, 237);
      }

      &.scheduling-list__status-badge--is-posted{
        background-color: rgb(39, 174, 96);
      }

      &.scheduling-list__status--is-parcial-posted{
        background-color: rgb(242, 201, 76);
      }

      &.scheduling-list__status--not-approved{
        background-color: rgb(235, 87, 87);
      }
    }
  }
}
</style>
