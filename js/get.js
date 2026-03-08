function get(id) {
    const el = document.getElementById(id);

    if (!el) {
        console.warn("Element not found!");
        return null;
    }

    return el;
}