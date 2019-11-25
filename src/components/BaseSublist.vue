<script>
export default {
  name: "Sublist",
  props: ["sublist"],
  computed: {
    list: function() {
      return this.sublist;
    }
  }
};
</script>
<template>
  <ul class="sublist">
    <li
      v-for="item in list"
      :key="item.content"
      :class="item.highlight ? 'sublist__item sublist__item--highlight' : 'sublist__item'"
    >{{item.content}}</li>
  </ul>
</template>
<style>
.sublist__item {
  color: rgba(0, 0, 0, 0.86);
  font-size: 1rem;
  display: flex;
  margin-bottom: 25px;
}

.sublist__item:before {
  content: "";
  display: inline-block;
  border-top: 4px solid transparent;
  border-left: 7px solid #1650fe;
  border-bottom: 4px solid transparent;
  margin-top: 6px;
  margin-right: 16px;
  height: 0;
  width: 0;
}

.sublist__item--highlight {
  color: #1650fe;
}
</style>
