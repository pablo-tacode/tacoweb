let arr = [ `<div class="tacoders" id="tacoder-one" onclick="">
<div class=" taco-one"></div><h4 class="us-name">Ariadna Gutiérrez</h4><h4 data-localize="squad.ux" class="us-role">Diseñadora UX</h4></div>
</div></div>`, `<div class="tacoders" id="tacoder-two" onclick="">
<div class=" taco-two"></div><h4 class="us-name">Ivan Quintana</h4><h4  data-localize="squad.software" class="us-role">Ingeniero de Software</h4></div>
</div></div>`,`<div class="tacoders" id="tacoder-three" onclick="">
<div class=" taco-three"></div><h4 class="us-name">Karen Amicone</h4><h4  data-localize="squad.full" class="us-role">Desarrolladora Fullstack</h4></div>
</div></div>`, `<div class="tacoders" id="tacoder-four" onclick="">
<div class="taco-four"></div><h4 class="us-name">Nohemí Moreno</h4><h4  data-localize="squad.ux" class="us-role">Diseñadora UX/UI</h4></div>
</div></div>`, `<div class="tacoders" id="tacoder-five" onclick="">
<div class=" taco-five"></div><h4 class="us-name">Olga Contreras</h4><h4  data-localize="squad.full" class="us-role">Desarrolladora Fullstack</h4></div>
</div></div>`, `<div class="tacoders" id="tacoder-six" onclick="">
<div class=" taco-six"></div><h4 class="us-name">Pablo Castellanos</h4><h4  data-localize="squad.ceo" class="us-role">Founder & CEO</h4></div>
</div></div>`];

const tacodersContainer = document.getElementById("tacoders-container");

const sortingRandomly = arr.sort(() => Math.random() - 0.5);

function renderRandomly () {
    sortingRandomly.forEach(element => {
        tacodersContainer.insertAdjacentHTML("beforeend", element);
    })
}

renderRandomly();