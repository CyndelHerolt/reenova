<script setup lang="ts">
  const links = ref([
  {
    label: 'Parlez-nous de votre projet',
    color: 'neutral',
    icon: "i-lucide-arrow-right",
    to: '#contact'
  }
  ])
</script>

<template>
  <UPageCTA
  description="Contactez-nous pour obtenir un devis personnalisé."
  orientation="horizontal"
  :links="links"
  class="m-12 bg-gray-50 dark:bg-gray-900"
  >
  <template #title>
    Optez pour une solution nouvelle et <span class="text-primary">respectueuse de l'environnement</span>
  </template>
  <img
  src="/images/cta.jpg"
  width="320"
  height="364"
  alt="Illustration"
  class="w-full rounded-lg"
  />
</UPageCTA>
</template>
