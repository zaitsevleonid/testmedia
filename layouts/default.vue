<template>
  <div>
    <header class="container">
      <div class="py-4 d-flex align-items-center justify-content-between">
        <h1>Dashboard</h1>
        <portal-target name="dashboard"></portal-target>
      </div>
    </header>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #f6f8fc;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
