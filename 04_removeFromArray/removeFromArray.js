const removeFromArray = function(givenElements, ...removeable) {
    const emptyArray =[];
    
    givenElements.forEach(element => {   
        if(!removeable.includes(element)){
            emptyArray.push(element);
        }
    });
    return emptyArray;
};

// Do not edit below this line
module.exports = removeFromArray;
