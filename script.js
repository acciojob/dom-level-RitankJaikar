//your JS code here. If required.
let depth=1;
function domLevelFinder(ele) {
	if(ele.parentElement !== null) {
		depth++;
		//console.log(ele.parentElement.nodeName);
		domLevelFinder(ele.parentElement);	
	}
	else {
		console.log(depth);
		return depth;
	}
}

const ele= document.querySelector("#level");
domLevelFinder(ele);




