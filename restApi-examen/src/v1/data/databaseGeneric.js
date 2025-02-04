let objects = [
    { id: 1, productName: 'Xbox360', price: 2500, description: 'A gaming machine'}, 
    { id: 2, productName: 'XboxOne',  price: 2000, description: 'A gaming machine'},
    { id: 3, productName: 'PS5', price: 5000, description: "A gaming machine    " },
    { id: 4, productName: 'Xbox Controller', price: 500, description: 'Xbox Controller'},
    { id: 5, productName: 'PS4 Controller', price: 500, description: 'PS4 Controller'},
];

// Get all objects
const getAllObjects = () => {
    return [...objects];
}

// Add object
const addObject = (object) => {
    const id = objects.length ? objects[objects.length - 1].id + 1 : 1; // Ensure the ID is unique by checking the length of the movies array
    const newObject = { id, ...object };
    objects.push(newObject);
    return newObject;
}

// Get object by id
const getObjectById = (id) => {
    id = parseInt(id);
    if (isNaN(id)) return null; // Return null if id is not a number
    return objects.find((object) => object.id === id); // // Ensure the id is a number with parseInt
}

// Delete object by id
const deleteObjectById = (id) => {
    id = parseInt(id); // Ensure the ID is a number
    if (isNaN(id)) return false; // Handle invalid IDs

    // makes index = id of movie
    const index = objects.findIndex((object) => object.id === id);

    // Check if index is not -1/does not exist | if it does exist, delete it by splicing. Splicing removes the element at the specified index
    if (index !== -1) {
        objects.splice(index, 1);
        return true;
    }
    return false;
}

// Update object by id
const updateObjectById = (id, updatedObject) => {
    id = parseInt(id); // Ensure the ID is a number
    if (isNaN(id)) return false; // Handle invalid IDs

    // makes index = id of object | check if id/object exists | if it does, update it.
    const index = objects.findIndex((object) => object.id === id);
    if (index !== -1) {
        objects[index] = { ...objects[index], ...updatedObject };
        return objects[index];
    }
    return null;
}


module.exports = {
    getAllObjects,
    addObject,
    getObjectById,
    deleteObjectById,
    updateObjectById
}