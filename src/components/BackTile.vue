<template>


  <div
    class="innerCard flip-card-back backster flex slotwrapper justify-center gap-1"
    v-bind:class="{
      wiggle: row.tried === true,
        
      
    }"
    v-bind:id="'guess-' + rowIndex"
  >
    <div
      v-for="(char, index) in row.letters"
      v-bind:key="char.id"
      class=" grid  items-center justify-center ffront border-2 border-gray-400 w-16 h-16 inputF text-3xl font-bold text-center "
      v-bind:id="'letter-' + rowIndex + '-' + ++index"
      v-bind:class="{
        darkModeRows: darkMode,
        flipcardactive: char.flipped === true,
        active1: char.letter.length > 0,
        inword: char.inWord === true,
        inposition: char.rightPosition === true,
        notInword: char.notInWord === true,
      }"
    >
      {{ char.letter }}
    </div>
  </div>

</template>

<script lang="ts">
import { getTodayWord } from "../utils/words";
import { defineComponent, reactive, ref } from "@vue/runtime-core";
import { computed } from "vue";
import { inputFocus } from "../functions/inputFocus.jsx";
export default defineComponent({
  name: "BackTile",
  props: ["wiggle", "rowIndex", "row", "darkMode", "flipit", "testy", "flipTest"],
  components: {},
  setup(props) {
    const { rowIndex, row, darkMode, flipit, wiggle, testy, flipTest } = props;

    const dictionary = getTodayWord();
    const isInWord = computed(() => {});
    

    return {  rowIndex, row, darkMode, flipit, wiggle, testy };
  },
});
</script>

<style>

.active1 {
  border: 2px solid grey !important;
  outline: none !important;
}
.slotwrapper {
  direction: rtl;
}
.inputF {
  caret-color: transparent;
}
.inputF:focus {
  outline: none;
  border: 2px solid grey;
}
.inword {
  background-color: rgb(210 179 92);
  color: rgb(236, 179, 54);
  /* -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg); */
}
.inposition {
  background-color: rgb(107, 194, 107) !important;
  color: white !important;
  /* -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg); */
}
.notInword {
  background-color: gray !important;
  color: white !important;
}
.darkModeRows {
  background-color: #121213;
  color: white;
  /* animation-name: vertical-rotate;
  animation-duration: 3.5s; */
}

.veritaclfliph {
  animation-name: vertical-rotate;
  animation-duration: 3s;
}

.innerCard {
  transition: transform 1.3s;
  transform-style: preserve-3d;
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
}
.flip-card {
  background-color: transparent;
  /* width: 300px;
  height: 300px;
  perspective: 1000px; */
}
.flip-card-front,
.flip-card-back {
  /* position: absolute;
  width: 100%;
  height: 100%; */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  /* position: absolute; */
  /* background-color: #2980b9;
  color: white; */
  transform: rotateX(180deg);
}

.flipcardactive {
  transform: rotateX(180deg);
}

@keyframes vertical-rotate {
  0% {
    transform: rotate(0);
  }
  20% {
    transform: rotateX(100deg);
  }
  40% {
    transform: rotateX(180deg);
  }
  60% {
    transform: rotateX(240deg);
  }
  75% {
    transform: rotateX(300deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}

.wiggle {
  animation: wiggle 500ms ease-in-out 0ms 2;
}
@keyframes wiggle {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(calc(min(0.9vw, 0.5vh)));
  }
  75% {
    transform: translateX(calc(max(-0.9vw, -0.5vh)));
  }
  100% {
    transform: translateX(0);
  }
}
</style>
