import React from "react";
const confettiSource =  { x: 0, y: 0, w: window.innerWidth, h: window.innerHeight }

const confettiStates = [
    
    {
        colors:["#FFF","#F5FF81","#FF6F6F"],
        confettiSource:confettiSource,
        tweenDuration:1,
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
        confettiSource:confettiSource,
        tweenDuration:5000,
        drawShape: (ctx) => {
            const scale = 0.3; // Skalfaktor för att justera storleken på smile
    
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
        colors:["#8D89FF","#4695E8","#80BEFF"],
        confettiSource:confettiSource,
        tweenDuration:1,
        drawShape: (ctx) => {{
            ctx.save();
            ctx.strokeStyle="rgba(0,0,0,0)";
            ctx.miterLimit=4;
            ctx.font="15px ''";
            ctx.font="   15px ''";
            ctx.scale(0.134390538906061,0.134390538906061);
            ctx.translate(0.050220337573797735,0);
            ctx.scale(1,1);
            ctx.save();
            ctx.fillStyle="#ece766";
            ctx.font="   15px ''";
            ctx.beginPath();
            ctx.moveTo(309.06,276.29);
            ctx.lineTo(441.43,276.29);
            ctx.lineTo(375.25,390.92);
            ctx.lineTo(309.06,505.55);
            ctx.lineTo(242.88,390.92);
            ctx.lineTo(176.7,276.29);
            ctx.lineTo(309.06,276.29);
            ctx.lineTo(309.06,276.29);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.fillStyle="#ece766";
            ctx.font="   15px ''";
            ctx.beginPath();
            ctx.moveTo(309.29,434.46);
            ctx.lineTo(441.65,434.46);
            ctx.lineTo(375.47,549.09);
            ctx.lineTo(309.29,663.72);
            ctx.lineTo(243.1,549.09);
            ctx.lineTo(176.92,434.46);
            ctx.lineTo(309.29,434.46);
            ctx.lineTo(309.29,434.46);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            }
    
    }

    },
   
  
    {
        colors:["#FFE28B","#D32C43","#4695E8"],
        confettiSource:confettiSource,
        tweenDuration:1,
    },
   
    {
        colors:["#FFE28B","#D32C43","#4695E8"],
        confettiSource:confettiSource,
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
        confettiSource:confettiSource,
    },
    {
        colors:["#FFF","#F5FF81","#FF6F6F"],
        confettiSource:confettiSource,
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
        confettiSource:{ x: 0, y: 0, w: window.innerWidth, h: window.innerHeight/10*8 },
    },
    {
        colors:["#FF97E8","#FFB4EE","#D721AF"],
        confettiSource:{ x: 0, y: 0, w: window.innerWidth, h: window.innerHeight/10*8 },
    },
    {
        colors:["#FFE28B"],
        confettiSource:{ x: window.innerWidth/2,
                         y: window.innerWidth/3,
                         w: window.innerWidth/10, 
                         h: window.innerHeight/10 },
        tweenDuration:1,
        drawShape: (ctx) =>  {
        const scale = .5; // Skalfaktor för att göra stjärnan hälften så stor
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
        colors:["#FFE28B","#D32C43","#4695E8"],
        confettiSource:confettiSource,
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
        confettiSource:confettiSource,
    },
]


export default confettiStates






// {
//     colors:["#FFE28B","#D32C43","#4695E8"],
//     drawShape: (ctx)=> {
//         const scale = 0.2; // Skalfaktor för att justera storleken på spiralen
//         // spiral
//         ctx.beginPath();
//         for (let i = 0; i < 720; i++) {
//             const angle = (i * Math.PI) / 180;
//             const x = 120 * scale + (angle * Math.cos(angle)) * 5 * scale;
//             const y = 120 * scale + (angle * Math.sin(angle)) * 5 * scale;
//             ctx.lineTo(x, y);
//         }
//         // ctx.strokeStyle = "rgba(0, 0, 255, 1)"; // Blå färg med full opacitet
//         ctx.stroke();
//         ctx.closePath();
//     }
// },