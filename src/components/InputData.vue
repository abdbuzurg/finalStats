<template>
  <div class="input-data">
    <input type="text" v-model="name" @keyup="emitName"/>
    <input type="number" v-model="score" @keyup="emitScore"/>
    <button type="button" @click="removeField()">X</button>
  </div>   
</template>

<script>
export default {
  props: {
    id: Number,
  },
  name: 'InputData',
  data: function(){
    return {
      name: '',
      score: 0,
    }
  },
  methods: {
    removeField(){
      this.$emit('removeField', this.id);
    },
    emitName(){
      this.$emit('acceptName', this.id, this.name);
    },
    emitScore(){
      this.$emit('acceptScore', this.id, this.score);
    }
  }
}
</script>

<style scoped lang="scss">
.input-data {
  margin-bottom: 0.5em;
  hr {
    -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.33);
    -moz-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.33);
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.33);
    margin: 1em 0em;
  }
  input {
    border: 1px solid #fc5c65;
    padding: 0.3em 0.6em;
    margin-right: 0.5em;
    border-radius: 1em;
    outline: none;
    text-align: center;
  }
  input[type="text"] {
    width: 250px;
  }
  input[type="number"] {
    width: 100px;
  }
  button {
    background-color: red;
    border: 1px solid red;
    border-radius: 50%;
    padding: 0.5em;
    width: 35px;
    outline: none;
    color: white;
    cursor: pointer;
  }
}
</style>
