<script setup lang="ts">
const links = ref([
  {
    label: 'Demander un devis',
    color: 'neutral'
  },
  {
    label: 'En savoir plus',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageCTA
    description="Contactez-nous pour un devis ou pour en savoir plus sur notre service de nettoyage cryogénique."
    orientation="horizontal"
    :links="links"
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
