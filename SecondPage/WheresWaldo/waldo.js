/*		TODO LIST: 	 Features
===========================================================
    ❌ 		Random pick targets
				1) Cannnot repeat
	❌		Remove Css inital color and moved into a initilizedColor function
    ❌ 		Add a config object for number of targets ( easy:3, difficult:10)
    ❌ 		Game screen is larger than viewport
    ❌ 		Game screen is draggable
    ❌ 		Allow user to skip a trial? Need skip button
    ❌ 		Closing the game page
	❌       Save your progress? Keeping score or returning once you hit goal?
	✅ 		Targets are now positioned by JS instead of CSS
    ✅       Convert colors to Name,Value object
    ✅ 		Count down the number of remaining tests
    ✅ 		add sound message on data
    ✅ 		Automate Targets ... 1,000 trials instead of 3x?
    ✅		Add Game screen and icon placeholder image
    ✅		Improve Game play:  Fade In/Out transitions?
============================================================
*/

//Data Array:  img url, location on page in pixels?
let data = [{
    img :"placeholder_icon_01.png",
    location : [null,406,76,null],
	id : "first_target",
    color: { "name": "red", "code": "hsla(0, 80%, 60%, 0.8)"},
    message: "Good Job! Let's do the next one."
},{
    img :"placeholder_icon_02.png",
    location : [197,616,null,null],
	id : "second_target",
	color: { "name": "yellow", "code": "hsla(60, 80%, 50%, 0.8)"},
    message: "Great Job!, let's do another."
},{
    img :"placeholder_icon_03.png",
    location : [null,null,83,394],
	id : "third_target",
	color: { "name": "indigo", "code": "hsla(260, 80%, 50%, 0.8)"},
    message: "Your amazing! Done!"
},{
    img :"placeholder_icon_04.png",
    location : [null,165,300,null],
	id : "fourth_target",
	color: { "name": "pink", "code": "hsla(300, 95%, 63%, 0.8)"},
    message: "Great Job! Again."
},{
    img :"placeholder_icon_05.png",
    location : [90,425,null,null],
	id : "fifth_target",
	color: { "name": "blue", "code": "hsla(230, 95%, 70%, 0.8)"},
    message: "Great Job!, Yeet!."
},{
    img :"placeholder_icon_06.png",
    location : [null,null,145,180],
	id : "sixth_target",
	color: { "name": "green", "code": "hsla(120, 70%, 10%, 0.8)"},
    message: "BooYah!"
}]


/*		Close Minigame
============================================================
		TODO: save game progress before you exit
============================================================
*/
function closeGame () {
    alert("You are closing the page!")
    return false;
}
let closeButton = document.getElementById('closeButton')
closeButton.onclick = closeGame


/*		Setup Helper Functions
============================================================
		These are the VERBS --> The specific things your script can do
		EXAMPLE:
			Show, Hide
			Play a Sound, 	Increment Counter
============================================================
*/
function initizalizeCount(){
    let dataCount = data.length
    let points = document.getElementById('points')
    points.dataset.counter = dataCount
    points.innerHTML = dataCount
}
function incrementCounter (color) {
    let points = document.getElementById('points')
	let count = Number( points.dataset.counter )
	count = !color ? 0 : count - 1
	points.dataset.counter = count
	points.style.backgroundColor = color
	points.innerHTML = count
}
function changeIcon (img) {
    let icon = document.getElementById("indicator")
    icon.style.backgroundImage = img == "none"? img : `url(images/${img})`
}
function show (target) {
    let nextTarget = document.getElementById(target)
    nextTarget.style.display = "block"
}

function hide (target) {
    let nextTarget = document.getElementById(target)
    nextTarget.style.display = "none"
}

function playMessage (message) {
    alert(message)
}
function setLocation( listItem, loc_array) {
    let [top, right, bottom, left] = loc_array
    if (top) listItem.style.top = `${top}px`
    if (right) listItem.style.right = `${right}px`
    if (bottom) listItem.style.bottom = `${bottom}px`
    if (left) listItem.style.left = `${left}px`
    return listItem
}

/*		Controller Functions
============================================================
		These are the applications of our basic actions
============================================================
*/
function createTarget(current, index, orginalArr){
    let next = null
    let isFinal = false
    let container = document.querySelector(".target")
    let el = document.createElement("li")
    if (index == orginalArr.length - 1){
        isFinal = true
    } else {
        next = orginalArr[index + 1]
    }
    el.setAttribute("id", current.id);
	el.setAttribute("class", current.color.name);
	//  el.style.backgroundColor = current.color.code
    setLocation(el, current.location)
    el.onclick = function(){
        incrementCounter( isFinal ? null : next.class )
        changeIcon( isFinal ? "none" : next.img)
        playMessage(current.message)
        hide(current.id)
        if (!isFinal){
            show(next.id)
        } else {
            closeGame()
        }
    }
    container.appendChild(el)
}


/*		Execute Controller Functions
============================================================
		We want to execute them when the user clicks,
		not when the page loads.
============================================================
*/
initizalizeCount()
data.forEach(createTarget)
show("first_target")
data.forEach(createTarget)
show("second_target")
