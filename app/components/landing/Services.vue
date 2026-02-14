<script setup lang="ts">
  interface CarouselItem {
    title: string
    titleHover: string
    description: string
    image: string
    imageHover: string
  }

  interface StrapiResponse {
    data: CarouselItem[]
  }

  // faire une requête axios
  const { data: elementsGalerie } = await useFetch<StrapiResponse>(
    'http://localhost:1337/api/galeries?populate=*'
  )

  console.log(elementsGalerie.value)

  const itemsCarousel: CarouselItem[] = elementsGalerie.value?.data || [
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
  
  const itemsGalerie = [
  {
    image: '/images/hero.jpg',
    description: 'Projection de CO₂ solide'
  },
  {
    image: '/images/hero.jpg',
    description: 'Effet thermique et cinétique'
  },
  {
    image: '/images/hero.jpg',
    description: 'Sublimation instantanée'
  }
  
  ]
</script>

<template>
  <UContainer class="py-12 sm:py-24 px-4 sm:px-0 h-1/4">
    <div class="mx-auto text-center flex flex-col gap-8 sm:gap-12">
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
      :items="itemsCarousel"
      :ui="{
        item: 'basis-full sm:basis-1/2 lg:basis-1/3',
        prev: 'sm:start-8',
        next: 'sm:end-4',
        container: 'ms-0'
      }"
      >
      <UContainer v-if="item">
        <div class="relative rounded-lg overflow-hidden group shadow-md">
          <!-- Image de base -->
          <img :src="item.image" :alt="item.title" class="w-full h-64 sm:h-92 object-cover transition-opacity duration-500 group-hover:opacity-0">
          <!-- Image au survol -->
          <img :src="item.imageHover" :alt="item.title" class="absolute inset-0 w-full h-64 sm:h-92 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 text-center text-white p-6">
            <!-- Titre avec transition -->
            <h3 class="text-lg sm:text-xl font-semibold transition-colors duration-500 group-hover:text-primary-600">
              <span class="group-hover:hidden">{{ item.title }}</span>
              <span class="hidden group-hover:inline">{{ item.titleHover }}</span>
            </h3>
            <p class="mt-2 text-sm sm:text-base font-bold">{{ item.description }}</p>
          </div>
        </div>
      </UContainer>
    </UCarousel>
    <USeparator />
    <div>
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        Le nettoyage cryogénique en action
      </h2>
      <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
        À quoi ressemble une intervention cryogénique ?
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
      <div v-for="item in itemsGalerie" :key="item.image" class="relative rounded-lg">
        <img :src="item.image" :alt="item.description" class="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-lg"></div>
        <div class="absolute bottom-0 left-0 right-0 text-center text-white p-6">
          <p class="mt-2 text-sm sm:text-base font-bold">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</UContainer>
</template>
