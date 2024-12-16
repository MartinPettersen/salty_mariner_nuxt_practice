<script setup>
    
    const nuxt = useNuxtApp()
    
    //const route = useRoute()
    //console.log(route.params.id)

    //console.log(nuxt)
</script>

<template>
    <div>
        event id: {{  $route.params.id }}
    </div>
</template>