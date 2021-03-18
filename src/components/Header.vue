<template>
  <div class="nav">
    <input
      id="nav-check"
      type="checkbox"
    >
    <div class="nav-header">
      <div class="nav-title">
        Princess Connect Thailand Arena
      </div>
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span />
        <span />
        <span />
      </label>
    </div>

    <div
      v-for="menu in menus"
      :key="menu.name"
      class="nav-links"
    >
      <router-link
        tag="li"
        active-class="active"
        :to="{ name: menu.name }"
      >
        <a
          href="#"
          class="nav-link"
        >{{ menu.text.thai }}</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menus: [
        {
          name: 'home',
          text: {
            thai: 'หน้าหลัก',
            eng: 'home',
          },
        },
        {
          name: 'arena',
          text: {
            thai: 'อารีณา',
            eng: 'Arena',
          },
        },
        {
          name: 'tier-list',
          text: {
            thai: 'จัดอันดับ',
            eng: 'Tier List',
          },
        },
        {
          name: 'contact',
          text: {
            thai: 'ติดต่อ',
            eng: 'contact',
          },
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.nav {
  position: relative;
  padding: 16px;
  width: 100%;
  background-color: #24292e;
}
.nav > .nav-header {
  display: inline;
}
.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
}
</style>
