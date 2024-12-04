<template>
<h1> <button class="btn" type="button" style="background-color: gray;  margin-left:65%" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
<font-awesome-icon icon="fa-solid fa-bars" /></button></h1>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
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
</template>
  
<script>

</script>