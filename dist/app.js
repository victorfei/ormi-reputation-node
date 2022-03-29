import express from 'express';
const app = express();
const port = 5000;
app.get('/data', (req, res) => {
    var _a, _b;
    const id = (_a = req.query.id) === null || _a === void 0 ? void 0 : _a.toString();
    const id_type = (_b = req.query.type) === null || _b === void 0 ? void 0 : _b.toString();
    if (id == '0x0' && id_type == 'ETH') {
        return res.end(JSON.stringify({ 'id': id, 'type': id_type, 'reputation': 10 }));
    }
    else if (id == '0x1' && id_type == 'ETH') {
        return res.end(JSON.stringify({ 'id': id, 'type': id_type, 'reputation': 9 }));
    }
    else if (id == '0x2' && id_type == 'ETH') {
        return res.end(JSON.stringify({ 'id': id, 'type': id_type, 'reputation': 8 }));
    }
    return res.end(JSON.stringify({ 'id': -1, 'type': 'invalid', 'reputation': -1 }));
});
app.listen(port, () => {
    console.log(`Ormi Reputation Node server application is running on port ${port}.`);
});
