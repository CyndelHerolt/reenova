<template>
  <div id="contact" class="py-24 sm:py-32">
    <UContainer>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Contactez-nous
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Prêt à démarrer ? Envoyez-nous un message.
        </p>
        
        <form class="mt-10 max-w-xl mx-auto space-y-6">
          <UFormField label="Email" name="email">
            <UInput placeholder="vous@exemple.com" icon="i-heroicons-envelope" />
          </UFormField>
          
          <UFormField label="Message" name="message">
            <UTextarea placeholder="Votre message..." />
          </UFormField>

          <UButton type="submit" block color="neutral">
            Envoyer
          </UButton>
        </form>
      </div>
    </UContainer>
  </div>
</template>
