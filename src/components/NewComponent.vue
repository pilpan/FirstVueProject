<template>
  <div :style="addStyle">
    <button @click='random(1, $event)'>-1</button>
    <button @click='random(-1)'>+1</button>
    <button @click="isShow = !isShow">{{ isShow ? 'Скрыть' : 'Показать' }}</button>
    <p class="counterText" v-if='isShow'>Кнопка нажата {{ count }} раз</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      isShow: false,
    }
  },
  methods: {
    random(number, e = '') {
      console.log(e.target)
      this.count += -number;
    },
    subHandler() {
      console.log('Отправка данных')
    }
  },
  computed: {
    addStyle() {
      return {
        width: '300px',
        backgroundColor: 'black',
        display: 'inline-flex',
        gap: '5px',
        justifyContent: "center",
      }
    }
  },
}
</script>
<style>
.counterText {
  color: white;
}
</style>