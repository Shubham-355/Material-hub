function showMaterial(materialClass) {
    const materialContainers = document.querySelectorAll('.material-container');
    materialContainers.forEach(container => {
        container.style.display = 'none';
    });

    const selectedContainer = document.querySelector(`.${materialClass}`);
    if (selectedContainer) {
        selectedContainer.style.display = 'grid';
    }
}

function showsub(subclass) {
    const subcontainer = document.querySelectorAll('.sub');
    subcontainer.forEach(container => {
        container.style.display = 'none';
    });

    const selectedContainer = document.querySelector(`.${subclass}`);
    if (selectedContainer) {
        selectedContainer.style.display = 'grid';
    }
}
