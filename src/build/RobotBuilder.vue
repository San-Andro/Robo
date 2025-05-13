<template>
  <div class="content">
    <div class="preview">
    <Collapse>
      <div class="preview-content">
        <div class="top-row">
          <img :src="selectedRobot.head.src">
        </div>
        <div class="middle-row">
          <img :src="selectedRobot.leftArm.src" class="rotate-l">
          <img :src="selectedRobot.torso.src">
          <img :src="selectedRobot.rightArm.src" class="rotate-r">
        </div>
        <div class="bottom-row">
          <img :src="selectedRobot.base.src">
        </div>
      </div>
      <button class="add-to-cart" @click="addToCart()"> В КОРЗИНУ</button>
    </Collapse>
    </div>
  </div>
    <div>
        <div class="top-row">
            <!-- <div class="top part">
              <div class="robot-name">
                {{ selectedRobot.head.title }}
                <span v-if="selectedRobot.head.onSale" class="sale">
                  SALE!
                </span>
              </div> -->
              <PartSelector
              :parts="availableParts.heads"
              position="top"
              @partSelected="(part) => selectedRobot.head = part"/>
            </div>
        </div>
        <div class="middle-row">
            <div class="left part">
              <PartSelector
              :parts="availableParts.arms"
              position="left"
              @partSelected="(part) => selectedRobot.leftArm = part"/>
            </div>
            <div class="center part">
              <PartSelector
              :parts="availableParts.torsos"
              position="center"
              @partSelected="(part) => selectedRobot.torso = part"/>
            </div>
            <div class="right part">
              <PartSelector
              :parts="availableParts.arms"
              position="right"
              @partSelected="(part) => selectedRobot.rightArm = part"/>
            </div>
        </div>
        <div class="bottom-row">
            <div class="bottom part">
              <PartSelector
              :parts="availableParts.bases"
              position="bottom"
              @partSelected="(part) => selectedRobot.base = part"/>
            </div>
        </div>
        <div>
          <h3 class="h3">КОРЗИНА</h3>
          <table>
            <thead>
              <tr>
                <th>РОБОТ</th>
                <th class="cost">ЦЕНА</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="robot in cart">
                <td>{{ robot.head.title }}</td>
                <td>{{ robot.cost }}</td>
              </tr>
            </tbody>
          </table>
        </div>
</template>

<script>
    import availableParts from "../data/parts"
    import Collapse from "./Collapse.vue";
    import PartSelector from "./PartSelector.vue";

    function getPreviosValidIndex(index, length) {
      const decIndex = index - 1;
      return decIndex < 0 ? length - 1 : decIndex;
    }

    function getNextValidIndex(index, length) {
      const incIndex = index +1;
      return incIndex > length - 1 ? 0 : incIndex;
    }

    export default {
        name: "RobotBuilder",
        components: {PartSelector, Collapse},
        data(){
            return{
                availableParts,
                cart: [],
                selectedRobot: {
                  head: {},
                  leftArm: {},
                  torso: {},
                  rightArm: {},
                  base: {},
                }
              }
            },
        computed: {

        },
        methods: {
          addToCart() {
            const robot = this.selectedRobot;
            const cost = robot.head.cost +
                         robot.leftArm.cost +
                         robot.torso.cost +
                         robot.rightArm.cost +
                         robot.base.cost;
            this.cart.push(Object.assign({}, robot, {cost}))
          },
          selectNextHead() {
            this.selectedHeadIndex = getNextValidIndex(this.selectedHeadIndex, 
            availableParts.heads.length)
          },
          selectPreviosHead() {
            this.selectedHeadIndex = getPreviosValidIndex(this.selectedHeadIndex,
              availableParts.heads.length)
          },
          selectNextLeftArm() {
            this.selectedLeftArmIndex = getNextValidIndex(this.selectedLeftArmIndex, 
            availableParts.arms.length)
          },
          selectPreviosLeftArm() {
            this.selectedLeftArmIndex = getPreviosValidIndex(this.selectedLeftArmIndex,
              availableParts.arms.length)
          },
          selectNextRightArm() {
            this.selectedRightArmIndex = getNextValidIndex(this.selectedRightArmIndex, 
            availableParts.arms.length)
          },
          selectPreviosRightArm() {
            this.selectedRightArmIndex = getPreviosValidIndex(this.selectedRightArmIndex,
              availableParts.arms.length)
          },
          selectNextTorso() {
            this.selectedTorsoIndex = getNextValidIndex(this.selectedTorsoIndex, 
            availableParts.torsos.length)
          },
          selectPreviosTorso() {
            this.selectedTorsoIndex = getPreviosValidIndex(this.selectedTorsoIndex,
              availableParts.torsos.length)
          },
          selectNextBottom() {
            this.selectedBottomIndex = getNextValidIndex(this.selectedBottomIndex, 
            availableParts.bases.length)
          },
          selectPreviosBottom() {
            this.selectedBottomIndex = getPreviosValidIndex(this.selectedBottomIndex,
              availableParts.bases.length)
          }
        }
    }
</script>

<style>
* {
  font-family: monospace;
  color: black;
}
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name{
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
  color: black;
}
.sale {
  color: red;
}
.add-to-cart {
  position: absolute;
  /* display: block; */
  /* margin-left: 300px; */
  width: 210px;
  padding: 3px;
  font-size: 16px;
}
td, th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}
.cost {
  text-align: right;
}
.h3 {
  margin-left: 70px;
}
.preview {
  position: absolute;
  top: 320px;
  /* left: 760px; */
  width: 210px;
  height: auto;
  padding: 5px;
}
.preview-content {
  border: 1px solid #000;
}
.preview img {
  height: 60px;
  width: 60px;
}
.rotate-l {
  transform: rotate(-90deg);
}
.rotate-r {
  transform: rotate(90deg);
}
</style>