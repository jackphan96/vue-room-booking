<template>
    <div>
        <h1>CUSTOM ERROR PAGE</h1>
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>{{error.message}}</h1>
        <h1>{{error.statusCode}}</h1>
        <p>custom layout p tag</p>
        <nuxt-link to="/">Home Page</nuxt-link>
    </div>
</template>

<script>
export default {
    props: ['error'],
    // layout: 'custom'
}
</script>