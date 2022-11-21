<template>
  <div>
    <button @click="$router.push('/')">Go back</button>
    <p>{{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  name: "CatIdPage"
}
</script>

<style scoped>

</style>