<template>
  <div>
      <h2>{{name}}</h2>
      <button @click="click">按钮</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name:"vue+webpack一个小引用"
    }
  },
  methods:{
    click(){
      
    }
  }
}
</script>

<style>

</style>