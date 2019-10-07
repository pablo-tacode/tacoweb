const container = document.getElementById("background-img-scroll");
const home = document.getElementById("home-scroll");

const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave' // this works just fine with duration 0 as well
        // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
        // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
    }
});

const scene1 = new ScrollMagic.Scene({
        triggerElement: '#trigger2',
        triggerHook: 0, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 10 // move trigger to center of element
    })
    .setClassToggle(container, "dark2")
    .addTo(controller)

    const scene2 = new ScrollMagic.Scene({
        triggerElement: '#trigger3',
        triggerHook: 0, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 10 // move trigger to center of element
    })
    .setClassToggle(container, "dark3")
    .addTo(controller)

    const scene3 = new ScrollMagic.Scene({
        triggerElement: '#trigger4',
        triggerHook: 0, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
    })
    .setClassToggle(container, "dark4")
    .addTo(controller)