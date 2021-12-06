<template>
  <div class="container">
    <input 
      v-model="title"
      class="form-control" 
      type="text"
      style="color:#ECF0F1;"
      placeholder="Search for Movies, Series & more"
      @keyup.enter="apply"/>
    <div class="selects">
      <select
      v-for="filter in filters"
      v-model="$data[filter.name]"
      :key="filter.name"
      class="form-select">
       <option 
        v-if="filter.name === 'year'"
        value="">
        All Years
       </option>
       <option
        v-for="item in filter.items"
        :key="item">
        {{ item }}
       </option>
      </select>
    </div>
    <button 
      class="btn btn-primary"
      @click="apply">
      Search
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      type: 'movie',
      number: 10,
      year: '',
      filters: [
        {
          name: 'type',
          items: ['movie', 'series', 'episode']
        },
        {
          name:'number',
          items: [10, 20, 30]
        },
        {
          name:'year',
          items: (() => {
            const years = []
            const thisYear = new Date().getFullYear()
            for(let i = thisYear; i>=1985; i-=1) {
              years.push(i)
            }
            return years
          })()
        }
      ]
    }
  },
  methods: {
    async apply() {
      this.$store.dispatch('movie/searchMovies', {
        title: this.title,
        type: this.type,
        number: this.number,
        year: this.year
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

.container {
  display:flex;
  > * {
    margin-right:10px;
    font-size:15px;
    &:last-child {
      margin-right:0;
    }
  }
  input::placeholder {
    color: #ECF0F1;
  }
  .selects{
    display:flex;
    select {
      width:120px;
      margin-right:10px;
      &:last-child {
        margin-right:0;
      }
    }
  }
  .form-control {
    background-color: #1E293B;
    border: 1px solid #1E293B;
  }
  .form-select {
    background-color: #1E293B;
    color: #ECF0F1;
    border: 1px solid #1E293B;
  }
  .btn {
    width:120px;
    height:50px;
    color:#34495E;
    font-weight:700;
    flex-shrink: 0;
  }

  @media (max-width: 991.98px) {
    display: block;
    input {
      margin-right: 0;
      margin-bottom: 10px;
    }
    .selects {
      margin-right: 0;
      margin-bottom: 10px;
      select {
        width: 100%;
      }
    }
    .btn {
      width: 100%;
    }
  }
}
</style>