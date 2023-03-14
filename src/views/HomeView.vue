<template>
  <div class="home-container">
    <h1>Welcome to our store!</h1>
    <p>Explore our collection of products</p>
    <router-link to="/products" class="btn">View Products</router-link>
  </div>
</template>

<style>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 50px;
}

h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
}

p {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  background-color: #5a67d8;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 1.5rem;
  transition: background-color 0.3s ease-in-out;
}

.btn:hover {
  background-color: #7f8ff4;
}

@media screen and (max-width: 740px) {
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

}

@media screen and (max-width: 325px) {
  h1 {
    font-size: 2rem;
    margin-bottom: .3rem;
  }
  .btn {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }
}
</style>
