var results = [];
for (var i=0; i < n; i++) {
    for (var j=0; j<n; j++) {
        var display = (n-j-1 <= i) ? "#" : " ";
        process.stdout.write(display);
    }
    process.stdout.write("\n")
}

return results;