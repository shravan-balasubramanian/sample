<template>
  <div id="app" class='bg-image'>
    <word-input :displayedWord = 'displayedWord'/>
    <game-space :displayedWord = 'displayedWord'/>
    <letter-storage :displayedWord = 'displayedWord'/>
  </div>
</template>

<script>
import WordInput from '@/components/WordInput.vue'
import LetterStorage from '@/components/LetterStorage.vue'
import GameSpace from '@/components/GameSpace.vue'
import words from './lib/words.js'
export default {
  name: 'App',
  data () {
    return {
      displayedWord: ''
    }
  },
  components: {
    wordInput : WordInput,
    letterStorage: LetterStorage,
    gameSpace: GameSpace
  },
  async mounted() {
    const allSampleWords = await words.getSampleWords(),
          randomWordIndex = Math.floor((Math.random() * allSampleWords.length-1+1));
    this.displayedWord = allSampleWords[randomWordIndex].toUpperCase();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body, html {
  height: 100%;
  margin: 0;
}

.bg-image {
  background-image : url('./Assets/bgimage.jpg'); 
   /* Full height */
  height: 100%; 
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow:hidden;
}

</style>
