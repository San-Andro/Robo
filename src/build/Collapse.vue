<template>
    <div>
        <div class="header" @click="open = !open">
            <span v-if="open">&#x25B2; СВЕРНУТЬ</span>
            <span v-if="!open">&#x25BC; РАЗВЕРНУТЬ</span>
        </div>
    </div>
    <slot v-if="open"></slot>
</template>

<script>
    export default {
        name: "Collapse",
        data() {
            return {open: true}
        }
    }
</script>

<style>
.header {
    background-color: #bbb;
    padding: 3px;
    cursor: pointer;
}
</style>