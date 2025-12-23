<template>

  <div class="w-full h-[75vh] absolute top-0 left-0 -z-10 mt-16">
    <img src="/images/hero.jpg" alt="Logo" class="w-full h-full object-cover">
  </div>
  <UContainer :ui="{ constrained: 'max-w-none', padding: 'p-0 sm:p-0' }" class="w-full h-[75vh] flex flex-col items-center justify-center">
    <div class="relative mx-auto max-w-4xl text-center dark:bg-gray-900/80 bg-gray-100/80 z-10 rounded-xl p-10 shadow-lg">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-5">
        Reenova,<span class="text-primary-600 dark:text-primary-400"> votre solution innovante pour le nettoyage des toitures.</span>
      </h1>
      <div class="absolute w-full left-0 flex items-center justify-center -bottom-5">
        <p class="text-lg uppercase text-gray-200 dark:text-gray-800 font-bold w-fit dark:bg-gray-100 bg-gray-800 py-2 px-4 rounded-lg">
          Nettoyage cryogénique à base de <span class="text-primary-600">produits naturels.</span>
        </p>
      </div>
    </div>
  </UContainer>
</template>
