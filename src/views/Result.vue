<template>
  <div class="result">
    <p>Avarage Score {{ average }}</p>
    <p>Passing rate {{ grades.f.length === 0 ? 100 : students.length - grades.f.length }}%</p>
    <div class="charts">
      <div class="chart-line">
        <canvas id="line" width="20" height="20"></canvas>
      </div>
      <div class="chart-line">
        <canvas id="barChartGrades" width="20" height="20"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js';


export default {
  data () {
    return {
      average: 0,
      students: [],
      scores: [],
      grades: {}
    }
  },
  computed: {
    line() {
      return {
        type: 'line',
        data: {
          labels: this.students,
          datasets: [{
            label: "score",
            data: this.scores,
          }]
        },     
      }
    },
    barChartGrades(){
      let grades = []
      const keys = Object.keys(this.grades);
      keys.map((val) => grades.push(this.grades[val].length))
      console.log(grades);
      return {
        type: 'bar',
        data: {
          labels: keys,
          datasets: [{
            label: "Number of Students",
            data: grades
          }]
        }
      }
    },
  },
  beforeMount(){
    const data = this.$store.getters.recieveData;
    if (!data) {
      this.$router.push({ name: 'Home'});
    }
    data.sort((a, b) => a.score - b.score)    
    this.students = data.map(val => val.name);
    this.scores = data.map(val => val.score);
    this.average = data.reduce((acc, value) => acc + (value.score === 0 || value.score ? value.score : 0), 0) / data.length;
    this.grades.a = []
    this.grades.b = []
    this.grades.c = []
    this.grades.d = []
    this.grades.f = []
    data.map((val) => {
      if (val.score < 59) this.grades.f.push(val.name)
      if (val.score < 70 && val.score > 59) this.grades.d.push(val.name)
      if (val.score < 80 && val.score >= 70) this.grades.c.push(val.name)
      if (val.score < 90 && val.score >= 80) this.grades.b.push(val.name)
      if (val.score >= 90) this.grades.a.push(val.name)
    });
    console.log(this.grades);
  },
  mounted(){
    this.createChart("line", this.line);
    this.createChart("barChartGrades", this.barChartGrades);
  },
  methods: {
    createChart(chartId, chartData){
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, chartData)
    }
  },
}


</script>

<style lang="scss" scoped>
.result {
  .charts {
    display: flex;
    .chart-line {
      width:400px;
      height: 400px;
    }
  } 
}

</style>