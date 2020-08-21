<template>
  <div class="calculation">
    <div class="description">
      Create as many field as you need. Each field has an input for name and a number input for the grade. If you are done, please click the analyze button
    </div>
    <hr/>
    <div class="input-data-s">
      <InputData 
        v-for="input in inputData" 
        :key="input" 
        @removeField="removeField" 
        :id="input"
        @acceptName="acceptName"
        @acceptScore="acceptScore"
        />
    </div>
    <div class="buttons">
      <button type="button" @click="addField()">Add Field</button>
      <button type="button" @click="analyze()">Analyze</button>
      <button type="button" @click="goBack()">Go Back</button>
    </div>
  </div>
</template>

<script>
import InputData from '@/components/InputData.vue';
export default {
  components:{
    InputData
  },
  data: function(){
    return {
      inputData: [],
      data: []
    }
  },
  methods: {
    addField(){
      this.inputData = [...this.inputData, this.inputData.length];
    },
    removeField(id){
      this.inputData.splice(this.inputData.indexOf(id), 1);
    },
    acceptName(id, name){
      if (typeof this.data[id] === "undefined"){
        this.data.push({name});
      } else {
        this.data[id].name = name
      }
    },
    acceptScore(id, score){
      if (typeof this.data[id] === "undefined"){
        this.data.push({score});
      } else {
        this.data[id].score = score
      }
    },
    analyze(){
      this.$store.dispatch("updateData", this.data);
      this.$router.push({name: 'Result'});
    },
    goBack(){
      this.$router.push({name: 'Home'});
    }
  }
}
</script>

<style lang="scss" scoped>
.calculation {
  padding: 0.5em;
  .input-data-s{
  margin-top: 0.5em;
  }
  .buttons {
    margin-top: 1em;
    button[type="button"]{
      border: 1px solid #fc5c65;
      background: #fc5c65;
      color: white;
      padding: 0.3em 0.6em;
      border-radius: 1em;
      margin-left: 1em;
      cursor: pointer;
      
      &:hover {
        background-color: white;
        color: #fc5c65;
        transition: 0.5s ease-in-out;
      }
    }
  }
}
</style>