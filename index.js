function isArray(collection){
    let objectArray=[]
    if(Array.isArray(collection)==true){
        objectArray=[...collection]
    }else{
        objectArray = Object.values(collection)
    }
    return objectArray
}


function myEach(test,alert){
   let newCollection = isArray(test)


    for(let i=0;i<newCollection.length;i++){
        alert(newCollection[i])
    }
    return test
}

function myMap(array,callbackFunction){
    let newArray = isArray(array)
    let array1=[]
    for(let i=0;i<newArray.length;i++){        
        array1.push(callbackFunction(newArray[i]))
    }
    return array1
}

function myReduce(collection, callback, acc){
    let newArray=isArray(collection)
    if(acc==undefined){
        acc=newArray.shift()
    }
    for(let i=0;i<newArray.length;i++){
        acc=callback(acc,newArray[i],collection)
    }
    return acc
}

function myFind(collection,prediction){
    let newArray = isArray(collection)
    for(let i=0;i<newArray.length;i++){
        if(prediction(newArray[i])==true){
            return newArray[i]
        }
    }
}

function myFilter(collection,prediction){
    let newArray = isArray(collection)
    let functionArray=[]
    for(let i=0;i<newArray.length;i++){
        if(prediction(newArray[i])==true){
            functionArray.push(newArray[i])
        }
    }
    return functionArray
}

function mySize(collection){
    let newArray = isArray(collection)
    return newArray.length
}

function myFirst(array,n){
    if(n==undefined){
        return array[0]
    }else{
        return array.slice(0,n)
    }
}

function myLast(array,n){
    let lastIndex=array.length
    if(!n){
        return array[lastIndex-1]
    }else{
        return array.slice(-n)
    }
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}