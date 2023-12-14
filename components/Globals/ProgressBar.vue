<template>
  <div class="progressContainer">
    <div id="progress2" class="progress-2">
    </div>
    <div v-motion :initial="{
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 25,
        mass: 0.5,
      },
    }" id="progress" class="">
      <!-- <img
        src="https://vignette.wikia.nocookie.net/hollowknight/images/9/94/Knight_godmaster.png/revision/latest?cb=20190129170812"
        alt="Hollow Night"
        class="progress bg-transparent floating tester1"
      />
      <img
        src="https://www.pinclipart.com/picdir/big/572-5722312_transparent-masks-clipart-soul-hollow-knight-shade-png.png"
        alt="Hollow Night Shade"
        class="progress bg-transparent floating tester2"
      /> -->
      <!-- <p class="position-absolute start-0 top-0 font-1 text-success">
        {{ percent }}
      </p> -->
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { appState } from "../../appstate/appstate";

export default {
  props: {},
  setup(props) {
    const editable = ref({});

    onMounted(() => {
      window.addEventListener("scroll", function () {
        var top = window.scrollY;
        var height =
          document.body.getBoundingClientRect().height - window.innerHeight;
        updateProgress(top, height);
      });
    });
    function updateProgress(num1, num2) {
      var percent = Math.ceil((num1 / num2) * 100) + "%";
      appState.percent = percent;

      document.getElementById("progress2").style.height = percent;
    }

    watchEffect(() => { });

    return {
      editable,
      percent: computed(() => appState.percent),
    };
  },
};
</script>

<style lang="scss" scoped>
.tester1 {
  width: 25px;
  height: 25px;
}

#progress:hover {
  .tester1 {
    opacity: 0;
    transition: 0.25s ease;
  }

  .tester2 {
    opacity: 1;
    transition: all 0.25s ease;
  }
}

.progressContainer {
  position: fixed;
  top: 0px;
  /* Position it at the top of the screen */
  left: 0px;
  /* Position it on the left side */
  height: 100%;
  /* Set the height to define the thickness of the progress bar */
  width: 5px;
  /* Make it span the entire width */
  z-index: 9999;
  background: #000000;
}

#progress {
  position: relative;
  z-index: -999;

  .tester2 {
    opacity: 0;
    transition: all 0.25s ease;
    position: absolute;
    top: 0;
  }
}

#progress,
#progress2 {
  width: 5px;
  /* Start with 0 width */
  height: 0%;
  background: #8c8c73;
  transition: all 0.75s ease-out;
}
</style>

