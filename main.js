quick_draw_array_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear","face","fan","feather","fence","finger","fire hydrant","fireplace","firetruck","fish","flamingo","flashlight","flip flops","floor lamp","flower","flying saucer","foot","fork","frog","frying pan","garden","garden hose","giraffe","goatee","golf club","grapes","grass","guitar","hamburger","hammer","hand","harp","hat","headphones","hedgehog","helicopter","helmet","hot dog","hot tub","hourglass","house","house plant","hurricane","ice cream","jacket","jail","kangaroo","key","keyboard","knee","knife","ladder","lantern","laptop","leaf","leg","light bulb","lighter","lighthouse","lightning","line","lion","lipstick","lobster","lollipop","mailbox","map","marker","matches","megaphone","mermaid","microphone","microwave","monkey","moon","mosquito","motorbike","mountain","mouse","moustache","mouth","mug","mushroom","nail","necklace","nose","ocean","octagon","octopus","onion","oven","owl","paintbrush","paint can","palm tree","panda","pants","paper clip","parachute","parrot","passport","peanut","pear","peas","pencil","penguin","piano","pickup truck","picture frame","pig","pillow","pineapple","pizza","pliers","police car","pond","pool","popsicle","postcard","potato","power outlet","rake","remote control","rhinoceros","rifle","river","roller coaster","scissors","scorpion","screwdriver","sea turtle","see saw","shark","skull","skyscraper","sleeping bag","smiley face","snail","snake","spider","spoon","spreadsheet","square","squiggle","squirrel","stop sign","stove","strawberry","streetlight","string bean","submarine","suitcase","sun","swan","sweater","swingset","sword","syringe","table","teapot","teddy-bear","telephone","television","toaster","toe","toilet","tooth","toothbrush","toothpaste","van","vase","violin","washing machine","watermelon","waterslide","yoga","zebra","zigzag"];

 random_no = Math.floor((Math.random()*quick_draw_array_set.length)+1);

 Element_of_array = quick_draw_array_set[random_no];

 console.log(15);
 console.log(23);

 var timer_counter = 0;
 var timer_check = "";
 var drawn_sketch = "";
 var answer_holder = "";
 var score = 0;

function preload()
{
    classifier = ml5.imageClassifier('DoodleNet');
}
function setup()
{
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas());
}
function draw()
{
    strokeWeight = 15;
    strokeColor = rgb(255, 0, 0);

if(mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
}

    check_sketch();
if (drawn_sketch == show_sketch)
{
    var answer_holder = "set";
    var score = 0;
    var span = document.getElementById("Score : ");
}
}
function updateCanvas()
{
    background("white");
}
function check_sketch()
{
    counter=0 
if(timer_counter < 0) {
    counter++
}
    var span = document.getElementById("Timer : ");
    console.log(timer_counter);

if(timer_counter > 400) {
    timer_counter = 0;
    timer_check = "completed";
}

    if(timer_counter == "completed") (answer_holder == "set") 
    timer_check = "";
    answer_holder = "";
    updateCanvas();
}
function classifyCanvas() 
{
    classifier.classify(canvas, gotResult);
}
function gotResult(error, results)
{
    if(error) {
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'Label: ' + results[0].label;
    document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(result[0],confidence*100)+'%'
    ;
}