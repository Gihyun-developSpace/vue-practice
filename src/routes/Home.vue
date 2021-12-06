<template>
  <Headline />
  <Search />
  <MovieList />
  
</template>

<script>
import Headline from '~/components/Headline'
import Search from '~/components/Search'
import MovieList from '~/components/MovieList'
import LeftMenu from '~/components/LeftMenu'

export default {
  components: {
    Headline,
    Search,
    MovieList,
    LeftMenu
  },
  created() {
    this.$store.commit('movie/resetMovies')
  }
}
</script>

