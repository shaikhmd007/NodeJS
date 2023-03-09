function callBack(name) {
    console.log('My Name Is - ', name);

}
function HOF(cb) {
    const name = "Shaikh_MD"
    cb(name)
}
HOF(callBack)
