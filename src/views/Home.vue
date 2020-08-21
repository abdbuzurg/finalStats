<template>
  <div class="home">
    <h1> Welcome to the Exam Analyzer</h1>
    <hr/>
    <p> if you have a csv file please upload it here <label for="file">Choose File</label><input type="file" @change="previewFile" id="file"/></p>
    <p> if you have raw data procede <router-link to="/calculation">here</router-link> </p>
    <hr/>
    <p class="final"> Website created by Abdulloev Buzurgmehr for Final Statistics Project </p>
  </div>
</template>

<script>
// @ is an alias to /src
import Papa from 'papaparse';

export default {
  name: 'Home',
  methods: {
    previewFile(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      let result;
      reader.onload = e => {
        const data = e.currentTarget.result;
        result = Papa.parse(data);
        result = result.data.map((val) => {
          return {
            name: val[0],
            score: parseFloat(val[1]),
          }
        });
        this.$store.dispatch('updateData', result);
        this.$router.push({ name: "Result" });
      };
      reader.readAsText(file);      
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  hr {
    -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.33);
    -moz-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.33);
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.33);
    margin: 1em 0em;
  }
  h1 {
    text-align: center;
    margin-bottom: 1em;
  }
  p + p {
    margin-top: 1em;
  }
  input[type="file"]{
    display: none;
  }
  label[for="file"]{
    border: 1px solid #fc5c65;
    background: #fc5c65;
    color: white;
    padding: 0.3em 0.6em;
    border-radius: 1em;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: #fc5c65;
      transition: 0.5s ease-in-out;
    }
  }
  .final {
    text-align: center;
  }
}
</style>