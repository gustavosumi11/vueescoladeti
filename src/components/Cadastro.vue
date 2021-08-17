<template>
   <div id="cadastro">
    <form>
      <label>Nome </label>
       <br/>
      <input type="text" v-model="nome" value="Seu nome" placeholder="Seu nome"/> 
      <br/>
       <label>Sobrenome </label>
       <br/>
      <input type="text" v-model="sobrenome" value="Seu sobrenome" placeholder="Seu sobrenome"/> 
        <br/>
        <label>Sua senha</label>
        <br/>
      <input type="password" v-model="sobrenome" value="Sua senha" placeholder="Sua senha"/> 
        <br/>
      
      </form>
    </div>
</template>

<script>
export default {
 name:'Cadastro'
}
</script>

<style>

</style>