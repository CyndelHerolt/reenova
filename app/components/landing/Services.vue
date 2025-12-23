<script setup lang="ts">
  const items = [
  {
    title: 'AVANT',
    titleHover: 'APRÈS',
    description: 'Ardoise naturelle',
    image: '/images/project.jpg',
    imageHover: '/images/project2.jpg'
  },
  {
    title: 'AVANT',
    titleHover: 'APRÈS',
    description: 'Tuiles en terre cuite',
    image: '/images/project.jpg',
    imageHover: '/images/project2.jpg'
  },
  {
    title: 'AVANT',
    titleHover: 'APRÈS',
    description: 'Ardoise fibrociment',
    image: '/images/project.jpg',
    imageHover: '/images/project2.jpg'
  },
  {
    title: 'AVANT',
    titleHover: 'APRÈS',
    description: 'Tuiles béton',
    image: '/images/project.jpg',
    imageHover: '/images/project2.jpg'
  },
  {
    title: 'AVANT',
    titleHover: 'APRÈS',
    description: 'Tuiles ciment',
    image: '/images/project.jpg',
    imageHover: '/images/project2.jpg'
  }
  ]
</script>

<template>
  <UContainer class="py-24 sm:py-12 h-1/4">
    <div class="mx-auto text-center flex flex-col gap-12">
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Nos projets de nettoyage
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Quelques exemples de projets que nous avons réalisés
        </p>
      </div>
      
        <!-- Carousel d'images avec description -->
      <UCarousel
        v-slot="{ item }"
        loop
        arrows
        wheel-gestures
        :prev="{ variant: 'solid' }"
        :next="{ variant: 'solid' }"
        :items="items"
        :ui="{
          item: 'basis-full sm:basis-1/2 lg:basis-1/3',
          prev: 'sm:start-8',
          next: 'sm:end-4',
          container: 'ms-0'
        }"
      >
        <UContainer>
          <div class="relative rounded-lg overflow-hidden group">
            <!-- Image de base -->
            <img :src="item.image" :alt="item.title" class="w-full h-92 object-cover transition-opacity duration-500 group-hover:opacity-0">
            <!-- Image au survol -->
            <img :src="item.imageHover" :alt="item.title" class="absolute inset-0 w-full h-92 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 text-center text-white p-6">
              <!-- Titre de base -->
              <h3 class="text-xl font-semibold absolute inset-0 group-hover:opacity-0 opacity-100">{{ item.title }}</h3>
              <!-- Titre au survol -->
              <h3 class="text-xl font-semibold absolute inset-0 group-hover:text-primary-600 opacity-0 group-hover:opacity-100">{{ item.titleHover }}</h3>
              <p class="mt-2">{{ item.description }}</p>
            </div>
          </div>
        </UContainer>
      </UCarousel>
    </div>
  </UContainer>
</template>
