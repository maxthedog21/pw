<template>
  <v-container class="portfolio">
    <!-- Hero Section -->
    <v-row justify="center">
      <v-col
        cols="12"
        class="text-center"
      >
        <h1 class="crt-glow">
          Welcome to My Portfolio
        </h1>
        <p class="subtitle">
          Current Projects
        </p>
      </v-col>
    </v-row>

    <!-- Projects Section -->
    <v-row justify="center">
      <v-col
        v-for="project in projects"
        :key="project.title"
        cols="12"
        md="4"
      >
        <v-card
          color="primary"
          class="crt-card"
          elevation="10"
        >
          <v-card-title><h3>{{ project.title }}</h3></v-card-title>
          <v-card-text><h4>{{ project.description }}</h4></v-card-text>
          <v-card-actions>
            <v-btn
              class="crt-btn"
              :href="project.link"
              target="_blank"
            >
              View Project
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Contact Section -->
    <v-row justify="center">
      <v-col
        cols="12"
        class="text-center"
      >
        <h2 class="crt-glow">
          Let's Connect
        </h2>
        <v-btn
          color="secondary"
          class="crt-btn"
          href="mailto:maximilianmoore44@gmail.com"
        >
          Email Me
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: "PortfolioView",
    data() {
        return {
            projects: [
                { title: "Tictactoe", description: "Real time tictactoe server.", link: "https://github.com/maxthedog21/jetMan" },
                { title: "Spolaxy", description: "Animated Spotify Client.", link: "https://github.com/maxthedog21/spolaxy" },
                { title: "Mobile Animation", description: "Jetpack compose animations.", link: "https://github.com/maxthedog21/ticktacktoe" },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
/* Hero Text Styling */
h1,
h2 {
    color: var(--v-theme-primary);
    text-shadow: 0 0 10px var(--v-theme-primary);
    font-family: 'Courier New', monospace;
}

/* Subtitle */
.subtitle {
    color: var(--v-theme-accent);
    text-shadow: 0 0 8px var(--v-theme-accent);
}



/* CRT Project Card */
.crt-card {
    border: 2px solid var(--v-theme-secondary);
    color: var(--v-theme-primary);
    text-shadow: 0 0 5px var(--v-theme-primary);
}

/* Neon Button */
.crt-btn {
    text-shadow: 0 0 8px var(--v-theme-secondaryNew);
    border: 1px solid var(--v-theme-accent);
    font-weight: bold;
}

.crt-btn:hover {
    background-color: var(--v-theme-accent) !important;
    text-shadow: 0 0 12px var(--v-theme-accent);
}


</style>
