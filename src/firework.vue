<template>
  <canvas
    class="vue-fireworks-fixed"
    :style="fireCanvasStyle"
  ></canvas>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'VueFirework',
  props: {
    el: {
      type: undefined,
      default() {
        return document.body;
      },
    },
    fireCanvasStyle: {
      type: Object,
      default() {
        return {
          left: 0, top: 0,
        };
      },
    },
  },
  //   data() {
  //     return {
  //       colors: ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"],
  //       canvasEl: null,
  //       ctx: null
  //     };
  //   },

  mounted() {
    const canvasEl = document.querySelector('.vue-fireworks-fixed');
    const ctx = canvasEl.getContext('2d');
    const numberOfParticules = 30;
    let pointerX = 0;
    let pointerY = 0;
    const tap = 'ontouchstart' in window || navigator.msMaxTouchPoints
      ? 'touchstart'
      : 'mousedown';
    const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

    function setCanvasSize() {
      canvasEl.width = window.innerWidth * 2;
      canvasEl.height = window.innerHeight * 2;
      canvasEl.style.width = `${window.innerWidth}px`;
      canvasEl.style.height = `${window.innerHeight}px`;
      canvasEl.getContext('2d').scale(2, 2);
    }

    // 更新坐标
    function updateCoords(e) {
      pointerX = e.clientX || e.touches[0].clientX;
      pointerY = (e.clientY || e.touches[0].clientY) - 50;
    }

    // 设置颗粒的方向
    function setParticuleDirection(p) {
      const angle = (anime.random(0, 360) * Math.PI) / 180;
      const value = anime.random(50, 180);
      const radius = [-1, 1][anime.random(0, 1)] * value;
      return {
        x: p.x + radius * Math.cos(angle),
        y: p.y + radius * Math.sin(angle),
      };
    }

    // 创建小圆圈颗粒
    function createParticule(x, y) {
      const p = {};
      p.x = x;
      p.y = y;
      p.color = colors[anime.random(0, colors.length - 1)];
      p.radius = anime.random(16, 32);
      p.endPos = setParticuleDirection(p);
      p.draw = () => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = p.color;
        ctx.fill();
      };
      return p;
    }

    // 渲染小圆圈
    function renderParticule(anim) {
      for (let i = 0; i < anim.animatables.length; i++) {
        anim.animatables[i].target.draw();
      }
    }

    // 动画颗粒
    function animateParticules(x, y) {
      const particules = [];
      for (let i = 0; i < numberOfParticules; i++) {
        particules.push(createParticule(x, y));
      }
      anime.timeline().add({
        targets: particules,
        x(p) {
          return p.endPos.x;
        },
        y(p) {
          return p.endPos.y;
        },
        radius: 0.1,
        duration: anime.random(1200, 1800),
        easing: 'easeOutExpo',
        update: renderParticule,
      });
    }

    const render = anime({
      duration: Infinity,
      update() {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      },
    });

    this.el.addEventListener(
      tap,
      (e) => {
        render.play();
        updateCoords(e);
        animateParticules(pointerX, pointerY);
      },
      false,
    );

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize, false);
  },
};
</script>

<style scoped>
.vue-fireworks-fixed {
  position:fixed;
  z-index:99999999;
  pointer-events:none;
}
</style>
