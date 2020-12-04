function showModal() {
    document.getElementById("customModal").style.display = 'block';
    document.getElementById('customModalHeader').focus();
    activateAccessibilityTrap('customModal');
}

function closeModal() {
    document.getElementById("customModal").style.display = 'none';
}

function activateAccessibilityTrap(customModal) {
    var customModal = document.getElementById(customModal);
    const allFocusableElem = customModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusableElement = allFocusableElem[0];
    const lastFocusableElement = allFocusableElem[allFocusableElem.length - 1];

    customModal.addEventListener('keydown', function(event) {

        let isTabKeyPressed = event.key === "Tab"
        
        //tab key is not pressed in keydown event break out of loop
        if(!isTabKeyPressed) {
            return;
        }

        //tab + shift key Combination -> used to move backwards in keyboard navigation
        if(event.shiftKey) {
            if(document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                event.preventDefault();
            }
        } else { // tab key -> used to move forwards in keyboard navigation
            if(document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                event.preventDefault();
            }
        }
    })
    
}
