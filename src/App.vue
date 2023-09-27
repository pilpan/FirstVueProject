<template lang="">

  <form :style="{backgroundColor: 'Yellow', paddingLeft: '10px'}" @submit.prevent='subHandler'>
    <input type="text">
    <button :class='{activeButton: isActive}' @click='isActive = !isActive'>Отправить</button>
  </form>
  <div class='container'>
    <router-link :to="{name: 'MainPage'}">MainPage</router-link>
    <router-link :to="{name: 'FromPage'}">Form</router-link>
    <router-link :to="{name: 'CounterPage'}">Counter</router-link>

  </div>
  <router-view></router-view>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    subHandler(){
      console.log('Отправка данных')
    }
  },
}
</script>

<style>
  .container{
    display: inline-flex;
    justify-content: space-between;
    width: 300px;
  }
  .activeButton{
    background-color: red;
  }

</style>
