function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve();
        } else {
            reject();
        }
    });
}

// Simple async/await function
async function saveData() {
    try {
        await savetoDb("apna college");
        console.log("success : your data was saved");
        
        await savetoDb("hello world");
        console.log("success2: data2 saved");
        
        await savetoDb("shradha");
        console.log("success3: data3 saved");
        
    } catch {
        console.log("failure: weak connection, data not saved");
    }
}

// Call the function
saveData();