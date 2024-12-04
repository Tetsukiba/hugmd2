<template>
<h1 style="margin-left:20%">Common Symptoms: <button class="btn" type="button" style="background-color: gray; margin-left:20%" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
<font-awesome-icon icon="fa-solid fa-bars" /></button></h1>
<div class="offcanvas offcanvas-end" tabindex="-1" data-bs-backdrop="false" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body" ><h1 style="text-align: left; display: inline-block; cursor: pointer;">    
    <router-link to="/" class="nav-link"><font-awesome-icon icon="fa-solid fa-house-chimney" /> Home<br><br></router-link>
    <router-link to="/chat" class="nav-link"><font-awesome-icon icon="fa-solid fa-robot" /> Chat <br><br></router-link>
    <router-link to="/settings" class="nav-link"><font-awesome-icon icon="fa-solid fa-gear" /> Settings</router-link></h1>
  </div>
</div>
<p style="color: gray">Select One: </p>
<div class="card" @click="this.$router.replace({ path: '/chat', query: {message: 'prompt1'}})">
    <div class="card-body">
        <p class="prompt-font" id="prompt1">Lately I've been feeling tired with body aches</p>
    </div>
</div>
<div class="card" @click="this.$router.replace({ path: '/chat', query: {message: 'prompt2'}})">
    <div class="card-body">
        <p class="prompt-font" id="prompt2">I'm feeling tense or irritable</p>
    </div>
</div>
<div class="card" @click="this.$router.replace({ path: '/chat', query: {message: 'prompt3'}})">
    <div class="card-body">
        <p class="prompt-font" id="prompt3">Frequently I experience abdominal pain</p>
    </div>
</div>

<div class="card">
    <div class="card-body">
        <router-link to="/chat" class="nav-link"><p class="prompt-font" id="chat">Ask Anything <br><font-awesome-icon icon="fa-solid fa-robot" /></p></router-link>
    </div>
</div>
</template>
<style scoped>
.card{
  cursor: pointer;
  justify-content: center;
  margin-top: 1rem;
  width: 20%;
  height: 10rem;
  left: 40%;
  border-radius: 50px;
  border-color: rgb(148, 148, 148);
  border-width: 5px;
  background-color: rgb(148, 148, 148)
}
.card:hover{
  border-color: rgb(78, 110, 179);
}
.prompt-font{  
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
    margin-top:5%;
}
</style>
<script>

</script>
