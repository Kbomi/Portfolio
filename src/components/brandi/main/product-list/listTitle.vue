<template>
  <div class="list-title">
    <h2>{{title}}</h2>
    <ul v-if="tabs.length > 0" class="tab-list">
      <li v-for="(tab, index) in tabs" :key="index">
        <button :class="{active: index === 0}">{{tab}}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'listTitle',
  props: {
    title: String,
    tabs: Array
  }
}
</script>


<style lang='scss' scoped>
.list-title {
  display: flex;
  flex-direction: column;
  @media screen and (min-width: $screen-md-min) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
  }
}
h2 {
  margin: 0 0 16px 0;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  line-height: normal;
  letter-spacing: normal;
  word-break: break-word;
  color: #202429;

  @media screen and (min-width: $screen-md-min) {
    font-size: 32px;
    margin: 0;
  }
}
.tab-list {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;

  @media screen and (min-width: $screen-md-min) {
    margin: 0;
    font-size: 17px;
  }

  li:not(:first-child) {
    margin-left: 5px;

    @media screen and (min-width: $screen-md-min) {
      margin-left: 32px;
    }
  }

  button {
    display: block;
    padding: 0 4px 4px;
    background: transparent;
    border: none;
    font-size: 14px;
    color: #808893;

    &.active {
      border-bottom: 2px solid #ff204b;
      font-weight: 700;
      color: #ff204b;
    }
  }
}
</style>