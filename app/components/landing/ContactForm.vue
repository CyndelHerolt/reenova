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
        
        <form @submit.prevent="handleSubmit" class="mt-10 max-w-xl mx-auto space-y-4">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UIcon name="i-lucide-at-sign" class="w-5 h-5 text-gray-400" />
            </div>
            <input
              v-model="email"
              type="email"
              placeholder="Saisissez votre email"
              class="block w-full pl-10 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UIcon name="i-lucide-message-circle" class="w-5 h-5 text-gray-400" />
            </div>
            <textarea
              v-model="message"
              placeholder="Rédigez votre message"
              class="block w-full pl-10 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-primary focus:border-primary"
            ></textarea>
          </div>
          <UButton type="submit" color="primary" block>
            Envoyer
          </UButton>
        </form>
      </div>
    </UContainer>
  </div>
</template>