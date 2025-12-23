<script setup lang="ts">
const steps = [
  {
    title: 'Projection de CO₂ solide',
    description: 'La glace carbonique, à -78°C, est projetée sous forme de micro-particules sur la surface à nettoyer.',
    icon: 'i-tabler-snowflake'
  },
  {
    title: 'Effet thermique et cinétique',
    description: 'Le choc thermique provoque le gel et la fragmentation des salissures, tandis que l’énergie cinétique les détache.',
    icon: 'i-tabler-bolt'
  },
  {
    title: 'Sublimation instantanée',
    description: 'Le CO₂ se transforme directement en gaz, laissant la toiture propre, sèche et sans résidus.',
    icon: 'i-tabler-cloud'
  }
]
</script>

<template>
  <UContainer class="py-24 sm:py-24 h-1/4">
    <div class="flex flex-col gap-12 items-center justify-center">
      <p class="border-2 border-gray-200 py-2 px-4 rounded-full font-medium flex items-center gap-2">  <UIcon name="i-lucide-circle" class="size-2" />Qu'est-ce que le nettoyage cryogénique ?</p>
      <p class="text-2xl text-gray-600 dark:text-gray-300 px-12 text-center">C'est une méthode révolutionnaire pour éliminer les mousses, lichens, algues et autres salissures tenaces sur les toitures, sans produits chimiques ni abrasion mécanique. Cette technique utilise de la glace carbonique (CO₂ solide) projetée à haute pression pour décoller et évacuer les dépôts indésirables, tout en préservant l’intégrité des matériaux.</p>
    </div>
  </UContainer>
  <USeparator />
  <div id="features" class="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900 flex flex-col gap-12">
    <UContainer>
      <div class="mx-auto max-w-4xl text-center flex flex-col gap-12">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Comment ça marche ?
          </h2>
          <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            C'est un processus simple qui s'appuie sur des réactions physiques naturelles
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <UCard v-for="(step, index) in steps" :key="index" class="relative overflow-hidden group hover:ring-2 hover:ring-primary-500 transition-all duration-300">
            <div class="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <UIcon :name="step.icon" class="w-24 h-24" />
            </div>
            
            <div class="flex flex-col gap-4 relative z-10">
              <div class="bg-primary-50 dark:bg-primary-900/50 w-12 h-12 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold text-xl">
                {{ index + 1 }}
              </div>
              
              <h3 class="font-bold text-xl text-gray-900 dark:text-white">
                {{ step.title }}
              </h3>
              
              <p class="text-gray-600 dark:text-gray-300">
                {{ step.description }}
              </p>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
    <UContainer>
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Les avantages du nettoyage par cryogénie
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Ce processus offre plusieurs avantages
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
