<template>
  <div class="listing scrolling-wrapper">
    <table class="m-table">
      <caption class="m-table-caption">
        Listagem de agendamento
      </caption>

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
          <i class="fab fa-instagram"></i>
        </td>
        <td>
          <img src="../assets/images/photo.jpg" alt="" />
        </td>
        <td class="m-table-text">
          Aqui vai o texto descritivo desse post
        </td>
        <td>09/09/2020 às 14:45h</td>
        <td>
          <a href="">Preview</a>
        </td>
        <td>
          <div class="m-table-status">
            <img src="../assets/images/agendado.svg" alt="" />
            <p class="status">Agendado</p>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Listing',
  components: {},
};
</script>

<style lang="scss" scoped>
.listing {
  padding-bottom: 80px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
}

.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
</style>
