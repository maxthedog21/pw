<template>
  <v-card
    color="primary"
  >
    <v-card-title>
      <v-col cols="12">
        <h2>Resume</h2>
      </v-col>
    </v-card-title>
    <v-card-text
      class="d-flex justify-center align-center"
    >
      <iframe
        id="pdfEmbed"
        style="border: 2px solid #0d0d0d"
        type="application/pdf"
        :src="resumePdf"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import pdf from "@/assets/resumes/resumeMaximilianFinal copy.pdf"
export default {
    name: "ResumeView",
     data(){
        return {
            resumePdf: pdf,
        }
    },
    mounted(){
        let pdfEmbed = document.getElementById("pdfEmbed");
        pdfEmbed.width = document.body.offsetWidth * .75 ;
        pdfEmbed.height = document.body.offsetHeight * .65;
    }
} 
</script>