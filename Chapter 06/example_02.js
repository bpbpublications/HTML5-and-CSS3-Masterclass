canvas        = document.getElementById('canvas')
context       = canvas.getContext('2d')
canvas.width  = 640
canvas.height = 320

context.beginPath()
context.strokeStyle = 'green'
context.rect(20, 20, 600, 280)
context.stroke()
