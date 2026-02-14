<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Accueil',
    to: '/',
    active: route.path.startsWith('/')
  },
  {
    label: 'Services',
    to: '#services',
    active: route.path.startsWith('#services')
  },
  {
    label: 'Contact',
    to: '#contact',
    active: route.path.startsWith('#contact')
  }
])
</script>

<template>
  <UHeader>
    <template #title>
      <div class="flex items-center">
        <img src="/images/logo.png" alt="Logo" class="h-12 w-auto rounded-full" />
      <span class="ml-2">Reenova</span>
      </div>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" />
    </template>
  </UHeader>
</template>
