<template>
</template>

<script setup>
import apolloClient from '../apollo/client.js'
import { GET_ALL_BOOKS } from '../graphql'
const { data: { allBooks } } = await apolloClient.query({
  query: GET_ALL_BOOKS
})
console.log(allBooks)
</script>
