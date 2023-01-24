<template>
  <Form
    class="grid grid-cols-1 rounded-md bg-slate-200 p-4"
    @submit="onSubmit"
    :validation-schema="schema"
    @invalid-submit="onInvalidSubmit"
  >
    <FormInput
      name="email"
      type="email"
      label="E-mail"
      placeholder="Your email address"
    />
    <textarea rows="5" class="my-4" />

    <button class="submit-btn" type="submit">Submit</button>
  </Form>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import * as Yup from "yup";
import FormInput from "@/components/FormInput.vue";

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
});

function onSubmit(values: any) {
  alert(JSON.stringify(values, null, 2));
}

function onInvalidSubmit() {
  alert("Datos incorrectos");
}
</script>
