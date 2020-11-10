"use strict";
// Dentro de uma linguagem tipada, ter mais flexibilidade
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
var newState = useState();
newState.setState(123);
console.log(newState.getState());
