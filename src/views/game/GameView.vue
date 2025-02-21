<template>
  <v-card color="primary">
    <v-card-title>
      <v-row
        style="width: 100%"
        align-content="space-around"
        class="pa-5"
      >
        <v-col cols="4">
          <h3>Word Fall</h3>
        </v-col>
        <v-col
          class="d-flex justify-center align-center"
          cols="4"
        >
          <v-btn
            color="secondary"
            @click="gameStart"
          >
            <p
              class="ml-auto"
              style="color: black"
            >
              {{ buttonMessage }}
            </p>
          </v-btn>
        </v-col>
        <v-col
          class="d-flex justify-center align-end"
          cols="4"
        >
          <h3>Lives:</h3>
          <v-icon
            v-for="x in lives"
            :key="x"
            color="red"
          >
            mdi-heart
          </v-icon>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <div style="background-color: black;">
        <canvas
          id="canvas"
        />
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
import { start } from './GameCode/Game';
export default {
    name: "GamePage",
    components: {

    },
    data() {
        return {
            clientId: "",
            redirectURI: "",
            canvas: null,
            game: null,
            ctx: null,
        };
    },
    computed: {
        lives(){
            return this.game ? [...Array(this.game.lives).keys()] : [];
        },
        buttonMessage(){
                return this.game ? this.game.lives <= 0 ? "Play Game Again" : "Reset Game" : "Start Game" 
        }
    },
    async mounted() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = document.body.offsetWidth * .75 ;
        this.canvas.height = document.body.offsetHeight * .65;
        console.log(this.canvas.width);
        window.addEventListener("keypress", this.letterClicked);
    },
    methods: {
        async gameStart() {
            this.game = await start(this.canvas.width, this.canvas.height, this.ctx);
            window.requestAnimationFrame(this.runGame);

        },
        letterClicked(e) {
            this.game.letterClicked(e, this.game);
        },
        runGame() {
            this.clearRectangle();
            this.game.drawWords();
            if(!this.game.isGameOver()){
                window.requestAnimationFrame(this.runGame);
            }else{
                this.endGame(this.game.score);
            }
        },
        endGame(score){
            this.clearRectangle();
            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "white";
            this.ctx.fillText(`Game Over`, this.canvas.width / 2 - 100, this.canvas.height /2);
            this.ctx.fillText(`Score: ${score}`, this.canvas.width / 2 - 100, this.canvas.height /2 + 35);
 
        },
        clearRectangle() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
        updateCanvasSize() {
            this.canvas.width = document.body.offsetWidth;
            this.canvas.height = document.body.offsetHeight;
        },
    },
}
</script>