<template>
  <div class="battle_search_select">
    <div class="battle_search_select_title">
      Defense:
    </div>
    <div
      v-for="index in 5"
      :key="index"
      class="battle_search_empty"
    />
  </div>
</template>

<script>
export default {
  name: 'Defense',
}
</script>

<style>
.battle_search_empty {
  border-radius: 6px;
  background-image: url('../static/button/unknown.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  display: inline-block;
  margin: 2px 2px;
}
@media only screen and (max-width : 500px) {
  .battle_search_empty {
    width: 40px;
    height: 40px;
  }
}
@media only screen and (min-width : 501px) {
  .battle_search_empty {
    width: 60px;
    height: 60px;
  }
}
</style>
