<template>
  <div class = 'alphabet' ref='letter' draggable="true" @dragstart="dragStartEvent">
    {{ val.letter }}
  </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: [ 'val' ],
  methods: {
    getRandomColor: function() {
      const letters = '0123456789ABCDEF'
      let color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    },
    dragStartEvent : function() {
      this.$emit('dragAlphabet',this.val);
    }
  },
  mounted () {
    this.$refs.letter.style.setProperty('--primary-color', this.val.color);
    this.$refs.letter.style.setProperty('--rotate-deg', this.val.rotation);
    this.$refs.letter.style.setProperty('--left-pos', this.val.position.left);
    this.$refs.letter.style.setProperty('--right-pos', this.val.position.right);
    // this.$refs.letter.classList.add('animated', 'bounce', 'fast', 'infinite');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .alphabet {
    position : relative;
    left : var(--left-pos);
    right : var(--right-pos);
    width : 70px;
    height: 70px;
    background : var(--primary-color);
    display:flex;
    color: white;
    font-size : 2em;
    justify-content : center;
    line-height: 70px;
    color: white;
    font-weight: bold;
    flex:1;
  border-radius : 15%;
-webkit-box-shadow: -5px 0px 20px -8px rgba(18,15,18,0.56);
-moz-box-shadow: -5px 0px 20px -8px rgba(18,15,18,0.56);
  box-shadow: -5px 0px 20px -8px rgba(18,15,18,0.56);
  transform : rotate(calc(var(--rotate-deg) * 1deg));
}
</style>
