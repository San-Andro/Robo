<template>
    <div class="qr--wrapper">
        <h2>QR Code</h2>
        <canvas ref="canvas"></canvas>
        <p>Отсканировать</p>
        <button class="visit--btn" @click="visitSite">Перейти</button>
    </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
    name: 'QRCode',
    data() {
        return {
            url: 'https://san-andro.github.io/Robo/'
        }
    },
    mounted() {
        const canvas = this.$refs.canvas
        if (canvas) {
            QRCode.toCanvas(canvas, this.url, {width: 100}, (error) => {
                if (error) console.error(error)
            })
        }
    },
    methods: {
        visitSite() {
            window.open(this.url, '_blank')
        }
    }
}
</script>