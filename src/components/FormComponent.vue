<template>
  <div class="flex flex-1 items-end justify-center p-4">
    <Form
      class="grid h-4/5 w-full grid-cols-1 rounded-md p-4 md:w-2/3"
      @submit="onSubmit"
      :validation-schema="schema"
      @invalid-submit="onInvalidSubmit"
    >
      <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
        <div class="flex flex-col justify-end">
          <FormInput
            name="name"
            type="test"
            label="Name"
            placeholder="Your name"
          />
          <FormInput
            name="email"
            type="email"
            label="E-mail"
            placeholder="Your email address"
          />
        </div>

        <div class="flex flex-col justify-end">
          <label class="text-sm md:text-base" for="message "
            >Your message</label
          >
          <textarea
            v-model="message"
            rows="3"
            class="w-full border-b-2 bg-transparent outline-none md:text-xl"
          />
        </div>
      </div>

      <div class="flex items-center justify-center">
        <button class="submit-btn btn w-1/2 text-xl md:w-1/3" type="submit">
          Submit
        </button>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import * as Yup from "yup";
import FormInput from "@/components/FormInput.vue";
import { ref } from "vue";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
});

const message = ref("");

function onSubmit(values: any) {
  alert(JSON.stringify(values, null, 2));
}

function onInvalidSubmit() {
  alert("Datos incorrectos");
}
</script>
