<template>
    <header id="header">
        <!-- <img id="wordmark" src="../assets/Wordmark.png"> -->
    </header>
</template>

<script>

/* Script do scroll da Header */
var prevScrollpos = window.pageYOffset;
window.onscroll = function(){

    var currentScrollpos = window.pageYOffset;
    
    if(prevScrollpos > currentScrollpos){
        document.getElementById("header").style.top = "0px";
    }else{
        document.getElementById("header").style.top = "-100px"
    }

    prevScrollpos = currentScrollpos;
}

</script>

<style lang="scss" scoped>

    header{
        top: 0;
        display: block;
        position: fixed;

        height: 50px;
        width: 100%;
        
        transition: top 0.3s;
        background-color: #090673;
    }
</style>

