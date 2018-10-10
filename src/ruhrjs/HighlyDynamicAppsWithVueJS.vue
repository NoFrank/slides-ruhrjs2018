<template>
  <div id="VueJSTalk" class="eg-theme-refuel-dark">
    <div class="eg-slideshow">
      <slide class="center" enter="fadeIn" leave="bounceOutLeft">
        <h3 style="margin-top: 20vh;" class="slide-header">Build highly dynamic apps with Vue.js!</h3>
        <h4 style="text-align: center;">An advanced introduction</h4>
        <!--<eg-code-block
          lang="scss"
        >&lt;style lang='scss'&gt; @import url(https://fonts.googleapis.com/css?family=Raleway); #MyFirstSlideshow{ .eg-slideshow{ font-family: 'Raleway'; background-color: #eef; ... } &lt;/style&gt;</eg-code-block>-->
      </slide>
      <slide enter="bounceInRight" leave="fadeOut" :steps="3">
        <h3 class="slide-header">Hello there !</h3>
        <div class="center">
          <eg-transition enter="bounceInLeft" leave="bounceOutLeft">
            <p v-if="step >= 2">I'm Norbert</p>
          </eg-transition>
          <eg-transition enter="bounceInRight" leave="bounceOutRight">
            <p v-if="step >= 3">
              <span class="green">@norbertdfrank</span>
              <span class="orange tags">#JSEnthusiast #BornInHamburg
                <br>#WorksForLucom #SoftwareEngineer #SoftwareArchitect #MobileDev
                <br>#Consultant #InterestedInMoreThingsThanThereIsTime #Finfluence
              </span>
            </p>
          </eg-transition>
        </div>
      </slide>
      <slide enter="fadeIn" leave="zoomOut">
        <h3 class="green" style="margin-top: 40vh;">Let’s talk about Vue.js</h3>
      </slide>
      <slide :steps="4" enter="bounceInDown" leave="fadeOut">
        <h4 class="slide-header">What do I do with Vue.js?</h4>
        <eg-transition enter="fadeInLeft" leave="fadeOutLeft">
          <p v-if="step >= 2">First contact: End of 2016</p>
        </eg-transition>
        <eg-transition enter="fadeInLeft" leave="fadeOutLeft">
          <p v-if="step >= 3">Various individual projects since then</p>
        </eg-transition>
        <eg-transition enter="fadeInLeft" leave="fadeOutLeft">
          <p
            v-if="step >= 4"
          >Rendering engine for Lucom Interaction Platform: „Wordpress for web forms" (don't tell anyone I said that 😉)</p>
        </eg-transition>
      </slide>
      <slide :steps="5" enter="fadeIn" leave="fadeOut">
        <h4 class="slide-header">Vue at Lucom Interaction Platform</h4>
        <eg-transition enter="fadeIn" leave="fadeOut">
          <div class="third" v-if="step >= 2">
            <img src="./assets/designer.svg">
            <div>
              <p>Design tool produces XML</p>
            </div>
          </div>
        </eg-transition>
        <eg-transition enter="fadeIn" leave="fadeOut">
          <div class="third" v-if="step >= 3">
            <img src="./assets/server.svg">
            <div>
              <p>Java Server delivers JSON describing the current page layout and state</p>
            </div>
          </div>
        </eg-transition>
        <eg-transition enter="fadeIn" leave="fadeOut">
          <div class="third" v-if="step >= 4">
            <img src="./assets/Vue_logo.svg">
            <div>
              <p>Vue rendering app interpretes JSON-schema and renders form</p>
            </div>
          </div>
        </eg-transition>
        <eg-transition enter="fadeIn" leave="fadeOut">
          <div v-if="step >= 5">
            <p>The JSON describes the layout, component hierarchy, state, routes, data binding, validation rules → highly dynamic! 🙂</p>
            <p>The rendering engine is build up of very generic components generating the layout at runtime.</p>
          </div>
        </eg-transition>
      </slide>
      <slide enter="bounceInRight" leave="fadeOut" :steps="9">
        <h4 class="slide-header">Some key characteristics of Vue.js</h4>
        <eg-transition enter="fadeInLeft">
          <p v-if="step >= 2 && step <= 5">Can be used without a build step</p>
        </eg-transition>
        <eg-transition enter="fadeInLeft">
          <p
            v-if="step >= 3 && step <= 5"
          >HTML-templates by default, optional render functions (and even JSX)</p>
        </eg-transition>
        <eg-transition enter="fadeInLeft">
          <p v-if="step >= 4 && step <= 5">It's all about components</p>
        </eg-transition>
        <eg-transition enter="fadeInLeft">
          <p v-if="step == 5">Unobtrusive Reactivity system (observes data mutations)</p>
        </eg-transition>
        <eg-transition enter="fadeInLeft">
          <p
            v-if="step >= 6"
          >Directives, Filters, Mixins, Plugins, DI, Inheritance, Animations, Slots</p>
        </eg-transition>
        <eg-transition enter="fadeInLeft">
          <p v-if="step >= 7">Single File Components (SFC)</p>
        </eg-transition>
        <eg-transition enter="fadeInLeft">
          <p v-if="step >= 8">Vue Router, Vuex, CLI, Devtools</p>
        </eg-transition>
        <eg-transition enter="fadeInLeft">
          <p v-if="step >= 9">Small core team of independent developers</p>
        </eg-transition>
      </slide>
      <slide enter="rollIn" leave="fadeOut">
        <h3
          class="green"
          style="font-size: 1.6em;margin-top: 30vh;"
        >"Components are reusable Vue instances with a name"</h3>
        <p style="font-size: 0.5em;margin-left: 6vw;">https://vuejs.org/v2/guide/components.html</p>
      </slide>
      <!--<slide enter="bounceInRight" leave="fadeOut" :steps="9">
        <h4 class="slide-header">Components</h4>
        <div style="font-size:0.8em;">
          <eg-transition enter="fadeInLeft">
            <p v-if="step >= 2">Are Vue instances</p>
          </eg-transition>
          <eg-transition enter="fadeInLeft">
            <p v-if="step >= 3">HTML-Template or render function (or renderless)</p>
          </eg-transition>
          <eg-transition enter="fadeInLeft">
            <p v-if="step >= 4">Are configured with an object</p>
          </eg-transition>
          <eg-transition enter="fadeInLeft">
            <p v-if="step >= 5">
              Common properties: data attributes, props, computed props,
              watcher functions, lifecycle callbacks, methods
            </p>
          </eg-transition>
          <eg-transition enter="fadeInLeft">
            <p v-if="step >= 6">Are part of the component tree</p>
          </eg-transition>
          <eg-transition enter="fadeInLeft">
            <p v-if="step >= 7">Receive data via props, publish events</p>
          </eg-transition>
          <eg-transition enter="fadeInLeft">
            <p v-if="step >= 8">Can have slots</p>
          </eg-transition>
          <eg-transition enter="fadeInLeft">
            <p v-if="step >= 9">Functional components: lightweight, no Vue instance, no state</p>
          </eg-transition>
        </div>
      </slide>-->

      <slide enter="bounceInRight" leave="fadeOut">
        <h4 class="slide-header">Reactivity</h4>
        <div class="img-table">
          <img width="46%" style="height:48%" src="./assets/reactivity1.png">
          <img width="54%" style="height:48%" src="./assets/reactivity2.png">
          <img width="46%" style="height:42%" src="./assets/reactivity3.png">
          <img width="54%" style="height:42%" src="./assets/reactivity4.png">
        </div>
      </slide>
      <slide enter="rollIn" leave="fadeOut">
        <h3
          class="green"
          style="font-size: 1.6em;margin-top: 30vh;"
        >By the way: this slideshow about Vue.js is itself a Vue app 😲</h3>
      </slide>
      <slide enter="bounceInRight" leave="fadeOut">
        <h3
          class="green"
          style="font-size: 1.6em;margin-top: 30vh;"
        >Component communication patterns & State management</h3>
      </slide>
      <slide enter="bounceInRight" leave="fadeOut">
        <h4 class="slide-header">Option 1: Props & Events</h4>
        <div>
          <img src="./assets/props_events.png">
        </div>
      </slide>
      <slide enter="bounceInRight" leave="fadeOut">
        <h4 class="slide-header">Option 2: Event Bus per Vue-Instance</h4>
        <div>
          <img src="./assets/event_bus.png">
        </div>
      </slide>
      <slide enter="bounceInRight" leave="fadeOut">
        <h4 class="slide-header">Option 3: State Management per Vuex</h4>
        <div>
          <img src="./assets/vuex.png">
        </div>
      </slide>
      <slide enter="fadeIn" leave="fadeOut" :steps="2">
        <h3
          class="green"
          style="font-size: 1.6em;margin-top: 30vh;"
        >"Hey Vue.js! What else can you offer me?"</h3>
        <p
          style="margin-left: 6vw;color: white;text-align:center;"
        >..asks the curius software engineer</p>
        <eg-transition enter="rollIn">
          <p v-if="step >= 2">Let's see..</p>
        </eg-transition>
      </slide>
      <slide enter="bounceInRight" leave="fadeOut" :steps="10">
        <h4 class="slide-header">The architect's toolset</h4>
        <div style="font-size:0.8em;">
          <eg-transition enter="fadeInLeft">
            <p v-if="step >= 2">Mixins: yes, Vue.js has them</p>
          </eg-transition>
          <eg-transition enter="fadeInLeft">
            <p v-if="step >= 3">Plugins: simple plugin API</p>
          </eg-transition>
          <eg-transition enter="fadeInLeft">
            <p v-if="step >= 4">Animations: built-in features to control animations</p>
          </eg-transition>
          <eg-transition enter="fadeInLeft">
            <p v-if="step >= 5">Slots / Scoped Slots: placeholder in generic components</p>
          </eg-transition>
          <eg-transition enter="fadeInLeft">
            <p v-if="step >= 6">Directives: attach generic behaviour to any component</p>
          </eg-transition>
          <eg-transition enter="fadeInLeft">
            <p v-if="step >= 7">Extend: extend a base component</p>
          </eg-transition>
          <eg-transition enter="fadeInLeft">
            <p v-if="step >= 8">Dependency Injection: provide/inject along the component hierarchy</p>
          </eg-transition>
          <eg-transition enter="fadeInLeft">
            <p v-if="step >= 9">Filters: format output</p>
          </eg-transition>
          <eg-transition enter="fadeInLeft">
            <p v-if="step >= 10">Component-component: decide dynamically which component to use</p>
          </eg-transition>
        </div>
      </slide>
      <slide enter="bounceInRight" leave="fadeOut" :steps="2">
        <h4 class="slide-header">Higher Order Components</h4>
        <div style="vertical-align:top;">
          <div style="width:57%;display:inline-block;vertical-align:top;">
            <img src="./assets/hoc1.png">
          </div>
          <div style="width:43%;display:inline-block;">
            <div>
              <img src="./assets/hoc2.png">
            </div>
            <div>
              <img src="./assets/hoc3.png">
            </div>
          </div>
          <eg-transition enter="fadeIn">
            <p v-if="step >= 2">
              General approach:
              <span class="green">https://github.com/jackmellis/vue-hoc</span>
            </p>
          </eg-transition>
        </div>
      </slide>
      <slide enter="bounceInRight" leave="fadeOut">
        <h4 class="slide-header">Scoped Slots</h4>
        <div style="vertical-align:top;">
          <div style="width:57%;display:inline-block;vertical-align:top;">
            <img src="./assets/sc1.png">
          </div>
          <div style="width:43%;display:inline-block;">
            <div>
              <img src="./assets/sc2.png">
            </div>
            <div>
              <img src="./assets/sc3.png">
            </div>
          </div>
        </div>
      </slide>
      <slide enter="bounceInRight" leave="fadeOut" :steps="8">
        <h4 class="slide-header">Take aways</h4>
        <eg-transition enter="fadeInLeft">
          <p
            v-if="step >= 2"
          >Vue.js is regarding it's concepts in the middle between React and Angular</p>
        </eg-transition>
        <eg-transition enter="fadeInLeft">
          <p v-if="step >= 3">Flexible, powerful, scales well</p>
        </eg-transition>
        <eg-transition enter="fadeInLeft">
          <p v-if="step >= 4">Have a look at scoped slots!</p>
        </eg-transition>
        <eg-transition enter="fadeInLeft">
          <p v-if="step >= 5">Learn from common UI-libraries, how they implement generic features</p>
        </eg-transition>
        <eg-transition enter="fadeInLeft">
          <p v-if="step >= 6">Exciting stuff to come with 3.0:
            <a class="green" style="font-size:0.7em;display:block;"
              href="https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf"
            >https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf</a>
          </p>
        </eg-transition>
        <eg-transition enter="fadeInLeft">
          <p v-if="step >= 7">Slides of this talk at:</p>
        </eg-transition>
        <eg-transition enter="fadeInLeft">
          <p v-if="step >= 8">EOT (end of talk) 😀</p>
        </eg-transition>
      </slide>
    </div>
    <div class="fixed-border"></div>
  </div>
</template>

<script>
import eagle from "eagle.js";
export default {
  mixins: [eagle.slideshow],
  infos: {
    title: "Highly dynamic apps with Vue.js",
    description: "An advanced introduction to Vue.js",
    path: "ruhrjs"
  }
};
</script>

<style lang='scss'>
@import url(https://fonts.googleapis.com/css?family=Raleway);
@import "node_modules/highlight.js/styles/vs2015";
#VueJSTalk {
  .eg-slideshow {
    background-color: #313640;
    color: #adadad;
    .eg-slide {
      .eg-slide-content {
        h4 {
          font-size: 1.3em;
        }
        p {
          font-size: 0.9em;
        }
        width: 25em;
        max-width: 80%;
        margin: 0 auto;
        .slide-header {
          color: white;
        }
        .green {
          color: #57be8f;
        }
        .orange {
          color: #fb9738;
        }
        .tags {
          font-size: 0.7em;
        }
        .third {
          width: 33%;
          display: inline-block;
          vertical-align: top;
          text-align: center;
          p {
            font-size: 0.7em;
            margin-left: 1vw;
            margin-right: 1vw;
          }
          img {
            height: 10vh;
          }
        }
        .img-table {
          background-color: white;
          img {
            vertical-align: bottom;
          }
        }
      }
    }
  }
  .fixed-border {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 12px;
    background-color: #57be8f;
  }
}
</style>
