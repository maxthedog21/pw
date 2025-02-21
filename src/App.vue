
<template>
  <v-app>
    <v-toolbar
      height="100"
      color="primary"
      density="compact"
      :elevation="24"
    >
      <v-toolbar-title>
        <h2> Maximilian Moore </h2>
      </v-toolbar-title>
      <!--      <template #prepend>
        <v-app-bar-nav-icon />
      </template> -->
      <v-spacer />
      <h3>Maximilian</h3>
      <v-icon icon="mdi-arrow-right-bold" />
      <div class="pr-2">
        <v-avatar
          color="secondary"
          size="80"
          image="@/assets/maxPic.png"
        />
      </div>
    </v-toolbar>
    <v-container>
      <div class="flex-container">
        <router-view />
      </div>
    </v-container>
    <v-bottom-navigation
      bg-color="primary"
      :elevation="24"
    >
      <v-btn
        value="portfolio"
        @click="() => {bottomNavigationClick(&quot;portfolio&quot;)}"
      >
        <v-icon>mdi-application-brackets-outline</v-icon>

        <span>Portfolio</span>
      </v-btn>

      <v-btn
        value="resume"
        @click="() => {bottomNavigationClick(&quot;resume&quot;)}"
      >
        <v-icon>mdi-file-document-outline</v-icon>
        <span>Resume</span>
      </v-btn>

      <v-btn
        value="chat"
        @click="featureNotDone"
      >
        <v-icon>mdi-message</v-icon>

        <span>Chat with Max</span>
      </v-btn>
      <v-btn 
        value="game"
        @click="() => {bottomNavigationClick(&quot;game&quot;)}"
      >
        <v-icon>mdi-controller</v-icon>

        <span>Mini Game</span>
      </v-btn>
    </v-bottom-navigation>
    <v-snackbar
      v-model="snackbar"
      timeout="2000"
      color="error"
    >
      <h3>
        Feature is not complete yet!
      </h3>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  data(){
    return {
      snackbar: false,
    }
  },
  methods: {
    bottomNavigationClick(navStr){
      this.$router.push(navStr);
    },
    featureNotDone(){
      this.snackbar = true;
    }

  }
}
</script>

<style>
/* Portfolio Theme Styling */
body {
  background-color: var(--v-theme-background);
  color: var(--v-theme-primary);
  font-family: 'Courier New', Courier, monospace;
  text-shadow: 0 0 5px var(--v-theme-primary);
}

/* Vuetify Global Theme Styling */
.v-application {
  background-color: var(--v-theme-background) !important;
  color: var(--v-theme-primary) !important;
}

/* Buttons */
.v-btn {
  background-color: var(--v-theme-secondary) !important;
  color: var(--v-theme-background) !important;
  text-shadow: 0 0 8px var(--v-theme-secondary);
  border: 1px solid var(--v-theme-accent);
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}

.v-btn:hover {
  background-color: var(--v-theme-accent) !important;
  text-shadow: 0 0 12px var(--v-theme-accent);
}

/* Portfolio Card */
.v-card {
  background-color: var(--v-theme-surface) !important;
  border: 2px solid var(--v-theme-secondary);
  color: var(--v-theme-primary);
  text-shadow: 0 0 5px var(--v-theme-primary);
  box-shadow: 0 0 10px var(--v-theme-secondary);
}

/* Headers and Text */
h1, h2, h3, h4, h5, h6 {
  color: var(--v-theme-primary);
  text-shadow: 0 0 10px var(--v-theme-primary);
  font-family: 'Courier New', monospace;
}

/* Links */
a {
  color: var(--v-theme-accent);
  text-shadow: 0 0 5px var(--v-theme-accent);
  transition: all 0.3s ease-in-out;
}

a:hover {
  color: var(--v-theme-warning);
  text-shadow: 0 0 8px var(--v-theme-warning);
}

/* CRT Scanline Effect */
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0px,
    rgba(0, 0, 0, 0) 2px,
    rgba(0, 0, 0, 0.2) 4px
  );
  pointer-events: none;
  z-index: 9999;
  opacity: 0.15;
}





</style>
