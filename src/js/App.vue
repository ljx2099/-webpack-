<template>
  <div>
      <h2>{{name}}</h2>
      <p>傻逼webpack，不多说配置了一晚上。</p>
      <button @click="click">按钮1</button>
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