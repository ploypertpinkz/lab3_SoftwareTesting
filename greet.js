function greet(name){
    var nameIn = name
    if(nameIn == null){
        return `Hello, my friend.`;

    }
    
    if(nameIn.toString().substring(0,1) === "["){
        var arr = nameIn.split(',')

        if(arr.length === 2){
            var name1 = arr[0].split('"')
            var name2 = arr[1].split('"')
            var nameOut2 = name1[1] + " and " + name2[1];

            return `Hello, ${nameOut2}.`;

        }else if(arr.length === 3){
            var name1 = arr[0].split('"')
            var name2 = arr[1].split('"')
            var name3 = arr[2].split('"')
            var nameOut2 = name1[1] + ", " + name2[1] + ", and " + name3[1];

            return `Hello, ${nameOut2}.`;
        }
    }

    if(nameIn === nameIn.toString().toUpperCase()){
        var text = `Hello, ${nameIn}!`
        return text.toUpperCase();
    }

    return `Hello, ${nameIn}.`;
}

module.exports = greet;