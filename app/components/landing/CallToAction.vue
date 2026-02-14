<script setup lang="ts">
  const links = ref([
  {
    label: 'Parlez-nous de votre projet',
    color: 'neutral' as const,
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
  class="m-4 sm:m-12 bg-neutral-50 dark:bg-secondary-950"
  >
  <template #title>
    Optez pour une solution nouvelle et <span class="text-primary">respectueuse de l'environnement</span>
  </template>
  <template #default>
    <img
      src="/images/cta.jpg"
      width="320"
      height="364"
      alt="Illustration"
      class="w-full max-w-xs sm:max-w-sm rounded-lg shadow-md"
    />
  </template>
</UPageCTA>
</template>
