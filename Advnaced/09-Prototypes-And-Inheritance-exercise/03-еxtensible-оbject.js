function extensibleObject() {
    let parent = {};
    let children = Object.create(parent);

    children.extend = function(obj) {
        let entries = Object.entries(obj);

        for (let [key, value] of entries) {
            if (typeof(value) == 'function') {
                parent[key] = value;
            } else {
                children[key] = value;
            }
        }
    }

    return children;
}