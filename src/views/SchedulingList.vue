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

      <tr v-for="(post, index) in schedulePosts" :key="index">
        <td>
          <i v-if="post.socialMedia === 'instagram'"
            class="scheduling-list__icon schedule-list__icon--instagram fab fa-instagram">
          </i>
          <i v-else-if="post.socialMedia === 'linkedin'"
            class="scheduling-list__icon schedule-list__icon--linkedin fab fa-linkedin-in">
          </i>
        </td>
        <td>
          <img class="scheduling-list__midia" :src="post.image">
        </td>
        <td>
          <p class="scheduling-list__text">
            {{ post.text }}
          </p>
        </td>
        <td>
          <p>{{ post.date }} às {{ post.time }}</p>
        </td>
        <td>
          <a href="">Preview</a>
        </td>
        <td>
          <div v-if="post.status === 'scheduled'" class="scheduling-list__status">
            <div class="scheduling-list__status-badge
              scheduling-list__status-badge--is-scheduled">
            </div>
            <p>Agendado</p>
          </div>

          <div v-else-if="post.status === 'posted'" class="scheduling-list__status">
            <div class="scheduling-list__status-badge
              scheduling-list__status-badge--is-posted">
            </div>
            <p>Postado</p>
          </div>

          <div v-else-if="post.status === 'parcial-posted'" class="scheduling-list__status">
            <div class="scheduling-list__status-badge
              scheduling-list__status-badge--parcial-posted">
            </div>
            <p>Postado com ressalvas</p>
          </div>

          <div v-else class="scheduling-list__status">
            <div class="scheduling-list__status-badge
              scheduling-list__status-badge--not-approved">
            </div>
            <p>Não aprovado</p>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SchedulingList',
  components: {},
  computed: mapState(['schedulePosts']),
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
    display: flex;
    font-size: 16px;
    height: 32px;
    justify-content: center;
    width: 32px;

    &.schedule-list__icon--instagram {
      background-color: rgb(214, 15, 134);
    }

    &.schedule-list__icon--linkedin {
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
