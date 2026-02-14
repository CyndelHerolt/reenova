<template>

  <div class="w-full h-[75vh] absolute top-0 left-0 -z-10 mt-16">
    <img src="/images/hero.jpg" alt="Logo" class="w-full h-full object-cover object-center">
  </div>
  <UContainer :ui="{ constrained: 'max-w-none', padding: 'p-0 sm:p-0' }" class="w-full h-[75vh] flex flex-col items-center justify-center relative px-0 sm:px-0">
    <div class="relative mx-auto max-w-4xl text-center dark:bg-secondary-900/80 bg-surface/80 z-10 sm:rounded-xl sm:p-4 p-2 shadow-lg w-full sm:w-auto backdrop-blur-sm">
      <h1 class="text-3xl sm:text-6xl font-black tracking-tight text-secondary-600 dark:text-white mb-8 sm:mb-5 leading-tight">
        Reenova<span class="text-primary-600 dark:text-primary-600"> la propreté réinventée, naturellement</span>
      </h1>
      <div class="absolute w-full left-0 flex items-center justify-center -bottom-6 sm:-bottom-5 px-4">
        <p class="text-xs sm:text-lg uppercase text-surface dark:text-neutral-800 font-bold sm:w-fit w-full dark:bg-surface bg-secondary-00 sm:py-2 sm:px-4 py-2 px-3 rounded-lg">
          Nettoyage cryogénique à base de <span class="text-primary-600">produits naturels.</span>
        </p>
      </div>
    </div>

    <UButton
      color="secondary"
      to="#contact"
      icon="i-lucide-arrow-right"
      label="Parlez-nous de votre projet"
      class="absolute bottom-25 sm:bottom-15 text-xs sm:text-base bg-primary-600 hover:bg-primary-700"
    />
  </UContainer>
</template>
