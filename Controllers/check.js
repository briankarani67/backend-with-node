const checker = (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).send("I received NOTHING in the body!");
    }
    res.send("I received your data: " + JSON.stringify(req.body));
}

module.exports = {checker}