<template>
  <div>
    <!-- 
      Nuxt importe automatiquement les composants du dossier components/.
      La structure des dossiers définit le nom du composant :
      app/components/landing/Hero.vue devient <LandingHero />
    -->
      <MenuTopBar />
    <LandingHero />
    <LandingFeatures />
    <USeparator />
    <LandingServices />
    <LandingCallToAction />
    <LandingContactForm />
    
    <!-- Footer simple pour l'exemple -->
    <footer class="py-6 text-center text-gray-500 text-sm">
      &copy; {{ new Date().getFullYear() }} Reenova. Tous droits réservés.
    </footer>
  </div>
</template>

<script setup lang="ts">
import TopBar from '~/components/menu/TopBar.vue';

// Toujours aucun import nécessaire !
// Nuxt détecte automatiquement:
// - LandingHero -> components/landing/Hero.vue
// - LandingFeatures -> components/landing/Features.vue
// - LandingContact -> components/landing/Contact.vue
</script>
