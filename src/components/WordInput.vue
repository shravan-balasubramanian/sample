<template>
    <div> 
        <img src = '../Assets/kangaroo.png'> 
        <div class = 'game-entry-message'> YOUR WORD IS  {{ displayedWord }} </div>
    </div>
</template>
<script>
export default {
    props : ['displayedWord']
}
</script>
<style scoped>
img {
    width: 30%;
    heigth: 30%;
    position:relative;
}
.game-entry-message {
    position: absolute;
    z-index: 999;
    margin: 0 auto;
    left: 9%;
    right: 0;
    top: 15%;
    line-height: 1.4;
    font-weight :  bold;
}
</style>