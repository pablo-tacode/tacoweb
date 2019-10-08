const toggleMenu = document.getElementById("nav-fullscreen");
const toggleBttn = document.getElementById("nav-toggle");
const navLink = document.getElementsByClassName("nav-link");
const titleContainer = document.getElementById("title-container");
const sections = document.querySelectorAll(".section");
const headerCircle = document.getElementById("header-circle");
const headerBall = document.getElementById("header-ball");
const homeLink = document.getElementById("Inicio");
const logoContainer = document.getElementById("logo-container");
const map = document.getElementById("map");
const line = document.getElementById("line");
const mobileLine = document.getElementById("mobile-line");
const squadTitle= document.getElementById("about").title


const addingClass = toggleBttn.addEventListener("click", () => {
    //map.classList.remove("map-safari")
    toggleBttn.classList.toggle("open");
    toggleMenu.classList.toggle("open");
    line.classList.toggle("idx")
    map.classList.toggle("idx")
    mobileLine.classList.toggle("idx")
});

const onclickNamingSection = () => {
    for (let i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener("click", () => {
            if (navLink[i].id === "Inicio") {
                toggleBttn.classList.remove("open");
                toggleMenu.classList.remove("open");
                map.classList.remove("idx")
                line.classList.remove("idx")
                line.classList.remove("idx")
                mobileLine.classList.remove("idx")

            } else {
                toggleBttn.classList.remove("open");
                toggleMenu.classList.remove("open");
                map.classList.remove("idx")
                line.classList.remove("idx")
                mobileLine.classList.remove("idx")

                titleContainer.innerHTML = (`<h2 class="section-title" id="title">${navLink[i].id}</h2>`);
            }
        });
    };
}

onclickNamingSection();

onscrollNamingSection = () => {
    sections.forEach(section => {
        const sectionInAt = (window.scrollY + window.innerHeight) + section.offsetHeight / 2;
        const sectionBottom = section.offsetTop + section.offsetHeight;
        const isShown = sectionInAt > sectionBottom;
        const isNotScrolledPast = window.scrollY < sectionBottom;
        if (isShown && isNotScrolledPast) {
            titleContainer.innerHTML = (`<h2 class="section-title" id="title">${section.title}</h2>`);
        }
    });
}

window.addEventListener('scroll', onscrollNamingSection);

headerCircle.addEventListener("click", () => {
    
        logoContainer.innerHTML = '';
        logoContainer.innerHTML = `<svg width="428px" height="138px" viewBox="0 0 428 138" version="1.1"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Artboard-1" transform="translate(-226.000000, -198.000000)">
                <g id="Group" transform="translate(226.780960, 198.630868)">
                    <path
                        d="M204.553673,64.4610522 C201.34256,68.1504154 197.37997,71.0711175 192.665784,73.2232461 C187.951598,75.3753747 182.520117,76.4514228 176.371178,76.4514228 C170.768811,76.4514228 165.593532,75.5290958 160.845185,73.6844142 C156.096838,71.8397326 151.980527,69.2264728 148.496128,65.8445565 C145.01173,62.4626402 142.278909,58.4146496 140.297584,53.7004632 C138.316259,48.9862768 137.325612,43.7939176 137.325612,38.1232296 C137.325612,32.3158986 138.33334,27.0552188 140.348825,22.3410324 C142.364311,17.626846 145.148372,13.6130157 148.701092,10.2994209 C152.253812,6.98582613 156.421363,4.44088688 161.203871,2.6645268 C165.986379,0.888166718 171.144578,-8.52651283e-14 176.678623,-8.52651283e-14 C181.802739,-8.52651283e-14 186.841377,0.905246847 191.794689,2.7157677 C196.748,4.52628855 200.761831,7.17370858 203.8363,10.6581072 L191.948411,22.545996 C190.308694,20.2913851 188.156598,18.6175325 185.492058,17.5243878 C182.827518,16.4312431 180.094697,15.884679 177.293514,15.884679 C174.219045,15.884679 171.400823,16.4483233 168.838766,17.5756287 C166.276708,18.7029341 164.073371,20.2572259 162.228689,22.2385506 C160.384008,24.2198753 158.949277,26.559853 157.924454,29.2585539 C156.899631,31.9572548 156.387227,34.9121171 156.387227,38.1232296 C156.387227,41.4026636 156.899631,44.4087663 157.924454,47.141628 C158.949277,49.8744897 160.366928,52.2144674 162.177449,54.1616313 C163.987969,56.1087952 166.157146,57.6289267 168.685043,58.7220714 C171.21294,59.8152161 173.979921,60.3617802 176.986069,60.3617802 C180.470467,60.3617802 183.51073,59.678575 186.106949,58.3121442 C188.703167,56.9457134 190.786943,55.1693799 192.358339,52.9830906 L204.553673,64.4610522 Z"
                        stroke="black" fill="none" stroke-dashoffset="1000" stroke-dasharray="1000">
                        <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="11s" begin="0"
                            calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" restart="always" />
                        <animate attributeName="fill" from="none" to="black" dur="0.5s" begin="2.3s"
                            calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" fill="freeze"
                            restart="always" />
                    </path>
                    <path
                        d="M285.266849,37.918266 C285.266849,43.6572755 284.276202,48.9008752 282.294877,53.6492223 C280.313552,58.3975694 277.563652,62.4626402 274.045092,65.8445565 C270.526533,69.2264728 266.341901,71.8397326 261.491072,73.6844142 C256.640242,75.5290958 251.379563,76.4514228 245.708875,76.4514228 C240.038187,76.4514228 234.794587,75.5290958 229.977918,73.6844142 C225.16125,71.8397326 220.993698,69.2264728 217.475139,65.8445565 C213.956579,62.4626402 211.206679,58.3975694 209.225354,53.6492223 C207.244029,48.9008752 206.253382,43.6572755 206.253382,37.918266 C206.253382,32.110935 207.244029,26.8673353 209.225354,22.1873097 C211.206679,17.5072841 213.956579,13.527614 217.475139,10.24818 C220.993698,6.968746 225.16125,4.44088688 229.977918,2.6645268 C234.794587,0.888166718 240.038187,-8.52651283e-14 245.708875,-8.52651283e-14 C251.379563,-8.52651283e-14 256.640242,0.888166718 261.491072,2.6645268 C266.341901,4.44088688 270.526533,6.968746 274.045092,10.24818 C277.563652,13.527614 280.313552,17.5072841 282.294877,22.1873097 C284.276202,26.8673353 285.266849,32.110935 285.266849,37.918266 Z"
                        stroke="#FCB424" fill="none" stroke-dashoffset="1000" stroke-dasharray="1000">
                        <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="11s" begin="0"
                            calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" restart="always" />
                        <animate attributeName="fill" from="none" to="#FCB424" dur="0.5s" begin="2.3s"
                            calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" fill="freeze"
                            restart="always" />
                    </path>
                    <g id="Group-3" transform="translate(296.907293, 1.947154)">
                        <path
                            d="M67.7404698,36.0735936 C67.7404698,42.427497 66.5619409,47.9102184 64.2048477,52.5219225 C61.8477545,57.1336266 58.739171,60.9254152 54.8790039,63.8974023 C51.0188368,66.8693894 46.6634039,69.0556459 41.8125744,70.4562375 C36.9617449,71.8568291 32.0426677,72.5571144 27.0551952,72.5571144 L0,72.5571144 L0,2.84217094e-14 L26.2353408,2.84217094e-14 C31.3594564,2.84217094e-14 36.4151747,0.597804522 41.4026472,1.7934315 C46.3901197,2.98905848 50.8309533,4.97035346 54.7252812,7.7373759 C58.6196091,10.5043983 61.7623528,14.2107864 64.1536068,18.8566512 C66.5448608,23.502516 67.7404698,29.2414394 67.7404698,36.0735936 Z"
                            stroke="black" fill="none" stroke-dashoffset="1000" stroke-dasharray="1000">
                            <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="11s"
                                begin="0" calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1"
                                restart="always" />
                            <animate attributeName="fill" from="none" to="black" dur="0.5s" begin="2.3s"
                                calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" fill="freeze"
                                restart="always" />
                        </path>
                        <path
                            d="M49.4987094,36.0735936 C49.4987094,31.9743011 48.8325844,28.5753554 47.5003143,25.8766545 C46.1680442,23.1779536 44.3917108,21.0258573 42.1712607,19.4203011 C39.9508106,17.8147449 37.4229515,16.6703762 34.5876075,15.9871608 C31.7522635,15.3039454 28.8315614,14.9623428 25.8254136,14.9623428 L17.1144606,14.9623428 L17.1144606,57.389808 L25.4154864,57.389808 C28.5582773,57.389808 31.5814602,57.0311253 34.4851257,56.3137491 C37.3887912,55.5963729 39.9508106,54.417844 42.1712607,52.778127 C44.3917108,51.13841 46.1680442,48.9521535 47.5003143,46.2192918 C48.8325844,43.4864301 49.4987094,40.1045646 49.4987094,36.0735936 Z"
                            stroke="black" fill="#FFFFFF" stroke-dashoffset="1000" stroke-dasharray="1000">
                            <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="11s"
                                begin="0" calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1"
                                restart="always" />
                        </path>
                    </g>
                    <polygon
                        points="376.288206 74.5042686 376.288206 1.9471542 425.069543 1.9471542 425.069543 16.8070152 393.197703 16.8070152 393.197703 30.4370946 423.327352 30.4370946 423.327352 44.4771012 393.197703 44.4771012 393.197703 59.5419258 426.914215 59.5419258 426.914215 74.5042686"
                        stroke="black" fill="none" stroke-dashoffset="1000" stroke-dasharray="1000">
                        <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="11s" begin="0"
                            calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" restart="always" />
                        <animate attributeName="fill" from="none" to="black" dur="0.5s" begin="2.3s"
                            calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" fill="freeze"
                            restart="always" />
                    </polygon>
                    <polygon
                        points="31.6668762 74.5042686 24.2881866 74.5042686 24.2881866 8.5059894 8.52651283e-14 8.5059894 8.52651283e-14 1.9471542 55.9550628 1.9471542 55.9550628 8.5059894 31.6668762 8.5059894"
                        stroke="#8B1F8E" fill="none" stroke-dashoffset="1000" stroke-dasharray="1000">
                        <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="11s" begin="0s"
                            calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" restart="always"/>
                            <animate attributeName="fill" from="none" to="#8B1F8E" dur="0.5s" begin="2.3s"
                            calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" fill="freeze"
                            restart="always"/>
                    </polygon>
                    <g id="Group-2" transform="translate(52.060754, 1.947154)">
                        <polygon
                            points="8.0960622 72.5571144 -5.68434189e-14 72.5571144 31.3594308 2.84217094e-14 38.5331568 2.84217094e-14 69.687624 72.5571144 61.48908 72.5571144 53.4954996 53.4954996 15.9871608 53.4954996"
                            stroke="#8B1F8E" fill="none" stroke-dashoffset="1000" stroke-dasharray="1000">
                            <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="11s"
                                begin="0" calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1"
                                restart="always" />
                            <animate attributeName="fill" from="none" to="#8B1F8E" dur="0.5s" begin="2.3s"
                                calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" fill="freeze"
                                restart="always" />
                        </polygon>
                        <polygon points="18.7541694 46.7317008 50.728491 46.7317008 34.7413302 8.198544"
                            stroke="#8B1F8E" fill="#FFFFFF" stroke-dashoffset="1000"
                            stroke-dasharray="1000">
                            <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="11s"
                                begin="0" calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1"
                                restart="always" />
                        </polygon>
                    </g>
                    <text id="slogan" font-size="30" font-weight="100" letter-spacing="-0.10"
                        fill="#000000">
                        <tspan data-localize="home.slogan" x="19.03444" y="115">Una idea... una app</tspan>
                    </text>
                </g>
            </g>
        </g>
    </svg>`
   

    
});
headerBall.addEventListener("click", () => {
    
    logoContainer.innerHTML = '';
    logoContainer.innerHTML = `<svg width="428px" height="138px" viewBox="0 0 428 138" version="1.1"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Artboard-1" transform="translate(-226.000000, -198.000000)">
            <g id="Group" transform="translate(226.780960, 198.630868)">
                <path
                    d="M204.553673,64.4610522 C201.34256,68.1504154 197.37997,71.0711175 192.665784,73.2232461 C187.951598,75.3753747 182.520117,76.4514228 176.371178,76.4514228 C170.768811,76.4514228 165.593532,75.5290958 160.845185,73.6844142 C156.096838,71.8397326 151.980527,69.2264728 148.496128,65.8445565 C145.01173,62.4626402 142.278909,58.4146496 140.297584,53.7004632 C138.316259,48.9862768 137.325612,43.7939176 137.325612,38.1232296 C137.325612,32.3158986 138.33334,27.0552188 140.348825,22.3410324 C142.364311,17.626846 145.148372,13.6130157 148.701092,10.2994209 C152.253812,6.98582613 156.421363,4.44088688 161.203871,2.6645268 C165.986379,0.888166718 171.144578,-8.52651283e-14 176.678623,-8.52651283e-14 C181.802739,-8.52651283e-14 186.841377,0.905246847 191.794689,2.7157677 C196.748,4.52628855 200.761831,7.17370858 203.8363,10.6581072 L191.948411,22.545996 C190.308694,20.2913851 188.156598,18.6175325 185.492058,17.5243878 C182.827518,16.4312431 180.094697,15.884679 177.293514,15.884679 C174.219045,15.884679 171.400823,16.4483233 168.838766,17.5756287 C166.276708,18.7029341 164.073371,20.2572259 162.228689,22.2385506 C160.384008,24.2198753 158.949277,26.559853 157.924454,29.2585539 C156.899631,31.9572548 156.387227,34.9121171 156.387227,38.1232296 C156.387227,41.4026636 156.899631,44.4087663 157.924454,47.141628 C158.949277,49.8744897 160.366928,52.2144674 162.177449,54.1616313 C163.987969,56.1087952 166.157146,57.6289267 168.685043,58.7220714 C171.21294,59.8152161 173.979921,60.3617802 176.986069,60.3617802 C180.470467,60.3617802 183.51073,59.678575 186.106949,58.3121442 C188.703167,56.9457134 190.786943,55.1693799 192.358339,52.9830906 L204.553673,64.4610522 Z"
                    stroke="black" fill="none" stroke-dashoffset="1000" stroke-dasharray="1000">
                    <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="11s" begin="0"
                        calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" restart="always" />
                    <animate attributeName="fill" from="none" to="black" dur="0.5s" begin="2.3s"
                        calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" fill="freeze"
                        restart="always" />
                </path>
                <path
                    d="M285.266849,37.918266 C285.266849,43.6572755 284.276202,48.9008752 282.294877,53.6492223 C280.313552,58.3975694 277.563652,62.4626402 274.045092,65.8445565 C270.526533,69.2264728 266.341901,71.8397326 261.491072,73.6844142 C256.640242,75.5290958 251.379563,76.4514228 245.708875,76.4514228 C240.038187,76.4514228 234.794587,75.5290958 229.977918,73.6844142 C225.16125,71.8397326 220.993698,69.2264728 217.475139,65.8445565 C213.956579,62.4626402 211.206679,58.3975694 209.225354,53.6492223 C207.244029,48.9008752 206.253382,43.6572755 206.253382,37.918266 C206.253382,32.110935 207.244029,26.8673353 209.225354,22.1873097 C211.206679,17.5072841 213.956579,13.527614 217.475139,10.24818 C220.993698,6.968746 225.16125,4.44088688 229.977918,2.6645268 C234.794587,0.888166718 240.038187,-8.52651283e-14 245.708875,-8.52651283e-14 C251.379563,-8.52651283e-14 256.640242,0.888166718 261.491072,2.6645268 C266.341901,4.44088688 270.526533,6.968746 274.045092,10.24818 C277.563652,13.527614 280.313552,17.5072841 282.294877,22.1873097 C284.276202,26.8673353 285.266849,32.110935 285.266849,37.918266 Z"
                    stroke="#FCB424" fill="none" stroke-dashoffset="1000" stroke-dasharray="1000">
                    <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="11s" begin="0"
                        calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" restart="always" />
                    <animate attributeName="fill" from="none" to="#FCB424" dur="0.5s" begin="2.3s"
                        calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" fill="freeze"
                        restart="always" />
                </path>
                <g id="Group-3" transform="translate(296.907293, 1.947154)">
                    <path
                        d="M67.7404698,36.0735936 C67.7404698,42.427497 66.5619409,47.9102184 64.2048477,52.5219225 C61.8477545,57.1336266 58.739171,60.9254152 54.8790039,63.8974023 C51.0188368,66.8693894 46.6634039,69.0556459 41.8125744,70.4562375 C36.9617449,71.8568291 32.0426677,72.5571144 27.0551952,72.5571144 L0,72.5571144 L0,2.84217094e-14 L26.2353408,2.84217094e-14 C31.3594564,2.84217094e-14 36.4151747,0.597804522 41.4026472,1.7934315 C46.3901197,2.98905848 50.8309533,4.97035346 54.7252812,7.7373759 C58.6196091,10.5043983 61.7623528,14.2107864 64.1536068,18.8566512 C66.5448608,23.502516 67.7404698,29.2414394 67.7404698,36.0735936 Z"
                        stroke="black" fill="none" stroke-dashoffset="1000" stroke-dasharray="1000">
                        <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="11s"
                            begin="0" calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1"
                            restart="always" />
                        <animate attributeName="fill" from="none" to="black" dur="0.5s" begin="2.3s"
                            calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" fill="freeze"
                            restart="always" />
                    </path>
                    <path
                        d="M49.4987094,36.0735936 C49.4987094,31.9743011 48.8325844,28.5753554 47.5003143,25.8766545 C46.1680442,23.1779536 44.3917108,21.0258573 42.1712607,19.4203011 C39.9508106,17.8147449 37.4229515,16.6703762 34.5876075,15.9871608 C31.7522635,15.3039454 28.8315614,14.9623428 25.8254136,14.9623428 L17.1144606,14.9623428 L17.1144606,57.389808 L25.4154864,57.389808 C28.5582773,57.389808 31.5814602,57.0311253 34.4851257,56.3137491 C37.3887912,55.5963729 39.9508106,54.417844 42.1712607,52.778127 C44.3917108,51.13841 46.1680442,48.9521535 47.5003143,46.2192918 C48.8325844,43.4864301 49.4987094,40.1045646 49.4987094,36.0735936 Z"
                        stroke="black" fill="#FFFFFF" stroke-dashoffset="1000" stroke-dasharray="1000">
                        <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="11s"
                            begin="0" calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1"
                            restart="always" />
                    </path>
                </g>
                <polygon
                    points="376.288206 74.5042686 376.288206 1.9471542 425.069543 1.9471542 425.069543 16.8070152 393.197703 16.8070152 393.197703 30.4370946 423.327352 30.4370946 423.327352 44.4771012 393.197703 44.4771012 393.197703 59.5419258 426.914215 59.5419258 426.914215 74.5042686"
                    stroke="black" fill="none" stroke-dashoffset="1000" stroke-dasharray="1000">
                    <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="11s" begin="0"
                        calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" restart="always" />
                    <animate attributeName="fill" from="none" to="black" dur="0.5s" begin="2.3s"
                        calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" fill="freeze"
                        restart="always" />
                </polygon>
                <polygon
                    points="31.6668762 74.5042686 24.2881866 74.5042686 24.2881866 8.5059894 8.52651283e-14 8.5059894 8.52651283e-14 1.9471542 55.9550628 1.9471542 55.9550628 8.5059894 31.6668762 8.5059894"
                    stroke="#8B1F8E" fill="none" stroke-dashoffset="1000" stroke-dasharray="1000">
                    <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="11s" begin="0s"
                        calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" restart="always"/>
                        <animate attributeName="fill" from="none" to="#8B1F8E" dur="0.5s" begin="2.3s"
                        calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" fill="freeze"
                        restart="always"/>
                </polygon>
                <g id="Group-2" transform="translate(52.060754, 1.947154)">
                    <polygon
                        points="8.0960622 72.5571144 -5.68434189e-14 72.5571144 31.3594308 2.84217094e-14 38.5331568 2.84217094e-14 69.687624 72.5571144 61.48908 72.5571144 53.4954996 53.4954996 15.9871608 53.4954996"
                        stroke="#8B1F8E" fill="none" stroke-dashoffset="1000" stroke-dasharray="1000">
                        <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="11s"
                            begin="0" calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1"
                            restart="always" />
                        <animate attributeName="fill" from="none" to="#8B1F8E" dur="0.5s" begin="2.3s"
                            calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" fill="freeze"
                            restart="always" />
                    </polygon>
                    <polygon points="18.7541694 46.7317008 50.728491 46.7317008 34.7413302 8.198544"
                        stroke="#8B1F8E" fill="#FFFFFF" stroke-dashoffset="1000"
                        stroke-dasharray="1000">
                        <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="11s"
                            begin="0" calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1"
                            restart="always" />
                    </polygon>
                </g>
                <text id="slogan" font-size="30" font-weight="100" letter-spacing="-0.10"
                    fill="#000000">
                    <tspan data-localize="home.slogan" x="19.03444" y="115">Idea to App</tspan>
                </text>
            </g>
        </g>
    </g>
</svg>`

});