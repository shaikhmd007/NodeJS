/* const express = require('express');
const vacancy = require('../Models/vacancy');
const router = express.Router()
//modelName

router.get('/all', async function (req, res) {
    try {
        const response = await vacancy.find()
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})
router.post('/create', async (req, res) => {
    try {

        const temp = await new vacancy(req.body)
        const response = await temp.save();
        // const response = await Batch.insertMany(salesclosureData)
        console.log(response);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
});
 */

