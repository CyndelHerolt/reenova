<script setup lang="ts">
const steps = [
  {
    title: 'Projection de CO₂ solide',
    description: 'La glace carbonique, à -78°C, est projetée sous forme de micro-particules sur la surface à nettoyer.',
    // icon: 'i-tabler-snowflake'
  },
  {
    title: 'Effet thermique et cinétique',
    description: 'Le choc thermique provoque le gel et la fragmentation des salissures, tandis que l’énergie cinétique les détache.',
    // icon: 'i-tabler-bolt'
  },
  {
    title: 'Sublimation instantanée',
    description: 'Le CO₂ se transforme directement en gaz, laissant la toiture propre, sèche et sans résidus.',
    // icon: 'i-tabler-cloud'
  }
]

const advantages = [
  {
    title: 'Écologique',
    description: 'Aucune eau ni produit chimique, respectueux de l’environnement.',
    icon: 'i-tabler-leaf'
  },
  {
    title: 'Précis et non abrasif',
    description: 'Idéal pour les matériaux fragiles (tuiles, ardoises, zinc, etc.).',
    icon: 'i-tabler-diamond'
  },
  {
    title: 'Efficace',
    description: 'Élimine les bio-salissures profondes et les dépôts tenaces.',
    icon: 'i-tabler-sparkles'
  },
  {
    title: 'Sécurisé',
    description: 'Pas de risque de glissade ou de dommages aux joints.',
    icon: 'i-tabler-shield-check'
  }
]
</script>

<template>
  <UContainer class="py-24 sm:py-12 h-1/4">
    <div class="flex flex-col gap-12 items-center justify-center">
      <p class="border-2 border-gray-200 py-2 px-4 rounded-full font-medium flex items-center gap-2">  <UIcon name="i-lucide-circle" class="size-2" />Qu'est-ce que le nettoyage cryogénique ?</p>
      <p class="text-2xl text-gray-600 dark:text-gray-300 px-12 text-center">C'est une méthode révolutionnaire pour éliminer les mousses, lichens, algues et autres salissures tenaces sur les toitures, sans produits chimiques ni abrasion mécanique. Cette technique utilise de la glace carbonique (CO₂ solide) projetée à haute pression pour décoller et évacuer les dépôts indésirables, tout en préservant l’intégrité des matériaux.</p>
    </div>
  </UContainer>
  <USeparator />
  <div id="features" class="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900 flex flex-col gap-12">
    <UContainer>
      <div class="mx-auto text-center flex flex-col gap-12">
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
      <div class="mx-auto text-center flex flex-col gap-12">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Avantages du nettoyage cryogénique
          </h2>
          <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Cette méthode innovante allie performance et durabilité, pour une toiture impeccable et protégée sur le long terme.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          <UCard v-for="(advantage, index) in advantages" :key="index" class="relative overflow-hidden group hover:ring-2 hover:ring-primary-500 transition-all duration-300">
            <div class="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <UIcon :name="advantage.icon" class="w-24 h-24" />
            </div>
            
            <div class="flex flex-col gap-4 relative z-10">              
              <h3 class="font-bold text-xl text-primary-600 dark:text-primary-400">
                {{ advantage.title }}
              </h3>
              
              <p class="text-gray-600 dark:text-gray-300">
                {{ advantage.description }}
              </p>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </div>
</template>
