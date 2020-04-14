<template>
  <div>
      this is id.vue in /user
      <b>{{$route.params.id}}</b>
  </div>
</template>

<script>
export default {

    // returns true or false
    validate({params, query, store}){
        return true
    }
}
</script>

<style>

</style>