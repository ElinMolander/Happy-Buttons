import React from "react";

const confettiStates = [
    {
        colors:["#FFF","#F5FF81","#FF6F6F"],
        confettiSource: { x: 0, y: 0, w: window.innerWidth, h: window.innerHeight },
        drawShape: (ctx) => {
            const scale = 0.2; // Skalfaktor för att göra hjärtat hälften så stort
            ctx.beginPath();
            ctx.moveTo(75 * scale, 40 * scale);
            ctx.bezierCurveTo(75 * scale, 37 * scale, 70 * scale, 25 * scale, 50 * scale, 25 * scale);
            ctx.bezierCurveTo(20 * scale, 25 * scale, 20 * scale, 62.5 * scale, 20 * scale, 62.5 * scale);
            ctx.bezierCurveTo(20 * scale, 80 * scale, 40 * scale, 102 * scale, 75 * scale, 120 * scale);
            ctx.bezierCurveTo(110 * scale, 102 * scale, 130 * scale, 80 * scale, 130 * scale, 62.5 * scale);
            ctx.bezierCurveTo(130 * scale, 62.5 * scale, 130 * scale, 25 * scale, 100 * scale, 25 * scale);
            ctx.bezierCurveTo(85 * scale, 25 * scale, 75 * scale, 37 * scale, 75 * scale, 40 * scale);
            ctx.fill();
            ctx.closePath();
            },
    },
    {
        colors:["#FFE28B","#D32C43","#4695E8"],
        drawShape: (ctx)=> {
            const scale = 0.2; // Skalfaktor för att justera storleken på spiralen
            // spiral
            ctx.beginPath();
            for (let i = 0; i < 720; i++) {
                const angle = (i * Math.PI) / 180;
                const x = 120 * scale + (angle * Math.cos(angle)) * 5 * scale;
                const y = 120 * scale + (angle * Math.sin(angle)) * 5 * scale;
                ctx.lineTo(x, y);
            }
            // ctx.strokeStyle = "rgba(0, 0, 255, 1)"; // Blå färg med full opacitet
            ctx.stroke();
            ctx.closePath();
        }
    },
    {
        colors:["#FF97E8","#FFB4EE","#D721AF"],
    },
   
    {
        colors:["#FFE28B","#D32C43","#4695E8"],
        confettiSource: { x: 500, y: 100, w: 200, h: 200 },
        drawShape: (ctx) => {
            const scale = 0.3; // Skalfaktor för att justera storleken på smileyn
    
            // Rita cirkel (huvudet)
            ctx.beginPath();
            ctx.arc(75 * scale, 75 * scale, 50 * scale, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        
            // Rita vänster öga 
            ctx.beginPath();
            ctx.arc(60 * scale, 65 * scale, 8 * scale, 0, Math.PI * 2);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();
        
            // Rita höger öga 
            ctx.beginPath();
            ctx.arc(90 * scale, 65 * scale, 8 * scale, 0, Math.PI * 2);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();
        
            // Rita munen 
            ctx.beginPath();
            ctx.arc(75 * scale, 75 * scale, 35 * scale, 0, Math.PI, false);
            ctx.lineWidth = 5 * scale;
            ctx.strokeStyle ="black";
            ctx.stroke();
            ctx.closePath();
        },
      
        
    },
    {
        colors:["#FFE28B","#E3BF55","#FFEEB9"],
    },
    {
        colors:["#FFF","#F5FF81","#FF6F6F"],
        confettiSource: { x: 500, y: -400, w: 400, h: 400 },
        drawShape: (ctx) => {
            const scale = 0.2; // Skalfaktor för att göra hjärtat hälften så stort
            ctx.beginPath();
            ctx.moveTo(75 * scale, 40 * scale);
            ctx.bezierCurveTo(75 * scale, 37 * scale, 70 * scale, 25 * scale, 50 * scale, 25 * scale);
            ctx.bezierCurveTo(20 * scale, 25 * scale, 20 * scale, 62.5 * scale, 20 * scale, 62.5 * scale);
            ctx.bezierCurveTo(20 * scale, 80 * scale, 40 * scale, 102 * scale, 75 * scale, 120 * scale);
            ctx.bezierCurveTo(110 * scale, 102 * scale, 130 * scale, 80 * scale, 130 * scale, 62.5 * scale);
            ctx.bezierCurveTo(130 * scale, 62.5 * scale, 130 * scale, 25 * scale, 100 * scale, 25 * scale);
            ctx.bezierCurveTo(85 * scale, 25 * scale, 75 * scale, 37 * scale, 75 * scale, 40 * scale);
            ctx.fill();
            ctx.closePath();
            },
    },
  
   
 
    {
        colors:["#8D89FF","#4695E8","#80BEFF"],
    },
   
    {
        colors:["#FFE28B","#D32C43","#4695E8"],
    },
    {
        colors:["#FF97E8","#FFB4EE","#D721AF"],
    },
    {
        colors:["#8D89FF","#4695E8","#80BEFF"],
    },
    {
        colors:["#FFE28B","#D32C43","#4695E8"],
        drawShape: (ctx) =>  {
            const scale = 0.3; // Skalfaktor för att göra stjärnan hälften så stor
            const spikes = 5; // Antal spikar på stjärnan
        
            ctx.beginPath();
            ctx.moveTo(75 * scale, 40 * scale);
        
            for (let i = 0; i < spikes * 2; i++) {
                const angle = i * Math.PI / spikes;
                const radius = i % 2 === 0 ? 30 * scale : 15 * scale; // Växla mellan långa och korta strålar
                const x = 75 * scale + Math.cos(angle) * radius;
                const y = 40 * scale + Math.sin(angle) * radius;
                ctx.lineTo(x, y);
            }
        
            ctx.closePath();
            ctx.fill();
        },
        
    },
    {
        colors:["#8D89FF","#4695E8","#80BEFF"],
    },
]


export default confettiStates