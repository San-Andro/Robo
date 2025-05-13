<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'ГЛАВНАЯ'}">
            <img class="logo" src="./assets/build-a-bot-logo.png">
            HOME
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'ПОСТРОЙ РОБОТА'}">
            BUILDING
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view/>
  </main>
</template>

<script setup>

</script>

<style>
body{
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}

#app{
  font-family: Arial, Helvetica, sans-serif;
}

main{
  margin: 0 auto;
  margin-top: 50px;
  padding: 30px;
  background-color: white;
  width: 1200px;
  min-height: 300px;
}

header{
  background-color: #999;
  width: 1200px;
  margin: 0 auto;
  position: absolute;
}

ul{
  padding: 3px;
  display: flex;
}

.nav-item{
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.logo{
  vertical-align: middle;
  height: 30px;
}
.nav-link{
  text-decoration: none;
  color: inherit;
}
.router-link-active{
  color: #fff;
}
</style>
