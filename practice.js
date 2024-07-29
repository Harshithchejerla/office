
const callback = function (err, success) {
    if (err) {
        console.log("Geek is very sad!");
    }
    else {
        console.log("Geek is optimistic, "
            + "thus becomes successful");
    }
}

const caller = function (status, callback) {
    if (status === 'Happy')
        callback(null, true);
    else {
        callback(new Error(), false);
    }
}
caller('Happy', callback);
caller('Sad', callback);

  