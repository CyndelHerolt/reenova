<template>
  <div id="features" class="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900">
    <UContainer>
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Nos Fonctionnalités
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Tout ce dont vous avez besoin pour réussir votre projet.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
        <!-- Carte 1 -->
        <UCard>
          <template #header>
            <div class="font-bold text-xl">Rapidité</div>
          </template>
          <div class="text-gray-600 dark:text-gray-300">
            Développement ultra-rapide grâce à Nuxt 3 et ses performances optimisées.
          </div>
        </UCard>

        <!-- Carte 2 -->
        <UCard>
          <template #header>
            <div class="font-bold text-xl">Design Moderne</div>
          </template>
          <div class="text-gray-600 dark:text-gray-300">
            Interface utilisateur élégante et accessible avec Nuxt UI et Tailwind CSS.
          </div>
        </UCard>

        <!-- Carte 3 -->
        <UCard>
          <template #header>
            <div class="font-bold text-xl">Extensible</div>
          </template>
          <div class="text-gray-600 dark:text-gray-300">
            Architecture modulaire permettant d'ajouter facilement de nouvelles fonctionnalités.
          </div>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>
