<template>
  <div class="min-h-screen pb-24">
    <SectionHeader header="< Contact />" />
    <div class="flex items-center justify-center ">
      <div class="w-2/3 p-10">
        <h2 v-motion :initial="{
          opacity: 0,
          y: 100,
        }" :visible="{
  opacity: 1,
  y: 0,
  transition: {

    duration: 1000,
    delay: 100,
  },
}" class=" text-8xl font-bold p-3 ">Get in touch.</h2>
        <h3 v-motion :initial="{
          opacity: 0,
          y: 100,
        }" :visible="{
  opacity: 1,
  y: 0,
  transition: {

    duration: 1000,
    delay: 100,
  },
}" class=" text-3xl text-[#8c8c73]   my-5 p-4">
          I am currently working a full-time job, but I am always open to new opportunities. If you have any questions, or
          just want to say hi, feel free to reach out to me.
        </h3>
        <div v-motion :initial="{
          opacity: 0,
          y: 100,
        }" :visible="{
  opacity: 1,
  y: 0,
  transition: {

    duration: 1000,
    delay: 100,
  },
}" class="">
          <v-form @submit.prevent="sendEmail">
            <v-container>
              <v-row class="mb-4">
                <v-col cols="12" md="6">
                  <v-text-field v-model="name" :rules="nameRules" label="Your name"
                    color="orange-lighten-2"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="email" label="Your email" :rules="emailRules"
                    color="orange-lighten-2"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="subject" label="Subject" :rules="subjectRules"
                    color="orange-lighten-2"></v-text-field>
                </v-col>
              </v-row>
              <v-textarea v-model="content" :rules="contentRule" clearable label="Your message"
                color="orange-lighten-2"></v-textarea>
              <div class=" w-fit">
                <v-btn type="submit" variant="outlined" block  class="mt-2 !text-[#8c8c73]  ">Send a
                  message</v-btn>
              </div>
            </v-container>
          </v-form>
        </div>
      </div>
      <div v-motion :initial="{
        opacity: 0,
        y: 100,
      }" :visible="{
  opacity: 1,
  y: 0,
  transition: {
    duration: 1000,
    delay: 100,
  },
}" class="w-1/3 flex flex-col   items-start">
        <h3 class=" font-bold text-4xl mb-5">Contact & Socials</h3>
     
        <div class="">
      
          <SocialIconList />
        </div>
        <div class="">
          <h3 class=" font-bold text-4xl my-5">Location</h3>
          Idaho, United States
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SectionHeader from './Globals/SectionHeader.vue';
const name = ref('');
const email = ref('');
const subject = ref('');
const content = ref('')
const requiredRule = (value: any) => value ? true : 'This field is required.';
const emailRule = (value: any) => /.+@.+\..+/.test(value) || 'Enter a valid email address.';
const nameRules = [requiredRule];
const emailRules = [requiredRule, emailRule];
const subjectRules = [requiredRule];
const contentRule = [requiredRule];

const sendEmail = async () => {
  try {


    const res = await useFetch("/api/send", {
      method: 'POST',
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        subject: subject.value,
        content: content.value
      })
    })
    console.log(res.data.value);

  } catch (error) {

  }
}


</script>

<style></style>