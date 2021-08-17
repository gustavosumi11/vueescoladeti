<template>

  <div id="app">
    <Menu/>
    <h1>Olá</h1>
<router-view/>
    
   
  </div>
  
</template>

<script>
 
 import Menu from './components/Menu';



export default {
  name: 'App',
  components: {
    Menu
  },
 
}
</script>

<style>
*{
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

* {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}


#form{
  margin:0px;
   background: #0F0C1D;
    background-repeat: no-repeat;
    min-height: 100vh;
    min-width:  100vh;
    display: flex;
    align-items: center;
    justify-content: center;
       outline: none;
    font-size: 1.0rem;
    text-align: left;
    
    
    color: #fff;
}


</style>
