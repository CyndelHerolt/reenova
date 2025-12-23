<script setup lang="ts">
const email = ref('')
const message = ref('')

const handleSubmit = () => {
  console.log(email.value, message.value)
}
</script>

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
        
        <div class="space-y-4">
            <UInput v-model="email" placeholder="Enter your email">
              <template #leading>
                <UIcon name="i-lucide-at-sign" class="w-5 h-5 text-gray-500" />
              </template>
            </UInput>
            <UTextarea v-model="message" placeholder="Enter your message" />
            <UButton @click="handleSubmit" block color="neutral">
              Envoyer
            </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
