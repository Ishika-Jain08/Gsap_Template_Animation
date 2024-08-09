function page1Animation(){
    var tl = gsap.timeline() 
tl.from("nav h4,nav h1, nav button",{
    y:-40,
    duration:0.3,
    delay:0.3,
    stagger:0.2,
    opacity:0
})
tl.from(".center-part1 h1",{
    x:-200,
    opacity:0,
    duration:0.5
},"-=0.3")
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.4
})
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.3
})

tl.from(".center-part2 img",{
    opacity:0,
    duration:0.5
},"-=0.3")

tl.from(".section1bottom img",{
    x:-30,
    opacity:0,
    stagger:0.15,
    duration:0.6
})


}

function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            start:"top 50%",
            end:"top -50",
            scrub:2 
        }
    })
    tl2.from(".services",{
        y:30,
        opacity:0,
        duration:0.5
    })
    tl2.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anime1")
    tl2.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:1
    },"anime1")
    
    tl2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:1
    },"anime2")
    tl2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anime2")
    
    tl2.from(".elem.line3.right",{
        x:300,
        opacity:0,
        duration:1
    },"anime3")
    tl2.from(".elem.line3.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anime3")
    
    tl2.from(".elem.line4.right",{
        x:300,
        opacity:0,
        duration:1
    },"anime4")
    tl2.from(".elem.line4.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anime4")

    tl2.from(" .context-left",{
        x:-200,
        opacity:0,
        duration:0.6,
        stagger:0.2
    })
}

function page3Animation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".section3",
            scroller:"body",
            start:"top 50%",
            end:"top 50%",
            scrub:2 
        }
    })
   
    tl3.from(".con3",{
        x:-200,
        opacity:0,
        duration:0.5,
    })
    tl3.from(".con3 .common",{
        x:-200,
        opacity:0,
        duration:0.7,
        stagger:0.2
    })
}
page1Animation();
page2Animation();
page3Animation();

