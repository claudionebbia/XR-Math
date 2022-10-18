import { createApp } from 'vue'	 

createApp({
    data() {
    return {
        message: 'Hello Vue!',
        array: [1, 2, 3, 4, 5]
    } 
    },
    computed: {
        getPlotValues2D: function() {

        },
        getPlotValues3D: function() {
            let valores = []
            let minX = -10
            let maxX = 10
            let minY = -10
            let maxY = 10
            let step = 0.1
            for (let x = minX; x <= maxX; x += step) {
                for (let y = minY; y <= maxY; y += step) {
                    valores.push({
                        x,y,z: x*x + y*y
                    })
                }
            }
        }
    }
}).mount('#app')