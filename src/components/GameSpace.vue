<template>
  <div>
    <div class = 'game-space'>
      <div class="indiv-block" v-for = '(letter,index) in displayedWordBlocks'></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// import Alphabet from './Alphabet.vue';
// const englishLetters = require('../lib/alphabets.js').alphabets;
import _ from 'lodash';
export default {
  name: 'GameSpace',
  props: ['displayedWord'],
  computed: {
    displayedWordBlocks: function() {
      return this.displayedWord.split('');
    }
  }
  // methods: {
  //   randomLetter: function() {
  //       const randomLetterIndex = Math.floor((Math.random()*englishLetters.length-1 + 1));
  //       return englishLetters[randomLetterIndex];
  //   }
  // },
  // computed: {
  //   allLetters: function () {
  //       let allLetters = this.displayedWord.split(''),
  //           allObjectLetters = allLetters.map(eachLetter=>{return englishLetters.filter(englishLetter=>englishLetter.letter === eachLetter)[0]});
  //       allObjectLetters = allObjectLetters.concat([this.randomLetter(), this.randomLetter(), this.randomLetter(), this.randomLetter()]);
  //       return _.shuffle(allObjectLetters);
  //   }
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .game-space{
    display : flex;
    height : 70px;
    width: 100%;
    /* background : gray; */
  }
  .indiv-block{
    width : 70px;
    height: 70px;
    border:1px solid black;
    border-radius : 15%;
-webkit-box-shadow: -5px 0px 20px -8px rgba(18,15,18,0.56);
-moz-box-shadow: -5px 0px 20px -8px rgba(18,15,18,0.56);
  box-shadow: -5px 0px 20px -8px rgba(18,15,18,0.56);
  }
</style>
