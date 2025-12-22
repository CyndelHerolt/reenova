<template>
  <UContainer class="py-24 sm:py-32">
    <div class="mx-auto max-w-2xl text-center">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
        Bienvenue sur Reenova
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
        Votre solution innovante pour [Votre Proposition de Valeur]. Développé avec Nuxt 3 et Nuxt UI.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <UButton to="#features" size="xl" color="primary">
          En savoir plus
        </UButton>
        <UButton to="#contact" size="xl" color="neutral" variant="ghost">
          Contactez-nous <span aria-hidden="true">→</span>
        </UButton>
      </div>
    </div>
  </UContainer>
</template>
