<template>
  <div class = 'letter-storage'>
      <div :v-for = 'letter in allLetters'>
          <alphabet :val = letter />
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import Alphabet from './Alphabet.vue';
const englishLetters = require('../lib/alphabets.js').alphabets;
import _ from 'lodash';
export default {
  name: 'LetterStorage',
  props: ['displayedWord'],
  components: {
    alphabet: Alphabet
  },    
  methods: {
    randomLetter: function() {
        const randomLetterIndex = Math.floor((Math.random()*englishLetters.length-1 + 1));
        return englishLetters[randomLetterIndex];
    },
  },
  computed: {
    allLetters: function () {
        let allLetters = this.displayedWord.split(''),
            allObjectLetters = allLetters.map(eachLetter=>{return englishLetters.filter(englishLetter=>englishLetter.letter === eachLetter)[0]});
        allObjectLetters = allObjectLetters.concat([this.randomLetter(), this.randomLetter(), this.randomLetter(), this.randomLetter()]);
        return _.shuffle(allObjectLetters);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .letter-storage{
  width : 100%;
  height  : 300px;;
  background : transparent;
  border-bottom : 5px solid red;
  border-left : 1px solid white;
  border-right : 1px solid white;
  border-bottom-left-radius : 30%;
  border-bottom-right-radius : 30%;
  }
</style>
