<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Page not found</p>
    <router-link to="/" class="btn">Go Home</router-link>
  </div>
</template>

<style>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h1 {
  font-size: 10rem;
  margin-bottom: 0;
}

p {
  font-size: 3rem;
  margin-top: 0;
}

.btn {
  margin-top: 2rem;
  padding: 1rem 2rem;
  border: none;
  background-color: #4caf50;
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  cursor: pointer;
}

.btn:hover {
  background-color: #388e3c;
}
</style>
