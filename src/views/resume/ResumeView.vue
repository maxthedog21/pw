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
      <embed
        id="pdfEmbed"
        style="border: 2px solid #0d0d0d"
        type="application/pdf"
        :src="resumePdf"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { PDFDocument } from "pdf-lib";
export default {
    name: "ResumeView",
     data(){
        return {
            resumePdf: null,
        }
    },
async    mounted(){
        let pdfEmbed = document.getElementById("pdfEmbed");
        pdfEmbed.width = document.body.offsetWidth * .75 ;
        pdfEmbed.height = document.body.offsetHeight * .65;
        let pdf64 = await import('@/assets/resumes/base64PDF.js');
        let pdfDoc = await PDFDocument.load(pdf64.default);
        const modifiedPdfBytes = await pdfDoc.save();
        const blob = new Blob([modifiedPdfBytes], {type: "application/pdf"});
        this.resumePdf = URL.createObjectURL(blob) + '#zoom=150';
    }
} 
</script>