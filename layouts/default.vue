<template>
    <div>
      <header>
        <slot name="header" />
        <Navbar />
      </header>
      <main>
        <slot />
      </main>
    </div>
  </template>