let express = require('express');
let router = express.Router();

const pavelPizzas = [
    {
        'name': 'Пепперони',
        'price': 655,
        'weight': 450,
        'components': 'Пицца соус, сыр моцарелла, колбаски пепперони',
        'image': 'https://ibb.co/XXN8QXd'
    },
    {
        'name': 'Барбекью',
        'price': 735,
        'weight': 610,
        'components': 'Пицца соус, соус барбекю, сыр моцарелла, сочная курочка, бекон, ветчина, шампиньоны',
        'image': 'https://ibb.co/GF86fgS'
    },
    {
        'name': 'Карбонара',
        'price': 725,
        'weight': 540,
        'components': 'Белый соус, сыр моцарелла, сыр пармезан, бекон, черри, орегано',
        'image': 'https://ibb.co/2vZhyqd'
    },
    {
        'name': 'Двойная пепперони',
        'price': 765,
        'weight': 510,
        'components': 'Пицца соус, сыр моцарелла, колбаски пепперони',
        'image': 'https://ibb.co/b6MG2WQ'
    },
    {
        'name': 'Четыре сыра',
        'price': 735,
        'weight': 480,
        'components': 'Пицца соус, сыр моцарелла, сыр чеддер, сыр эмменталь, сыр блю чиз',
        'image': 'https://ibb.co/dkVqVKV'
    },
    {
        'name': 'Гавайская',
        'price': 665,
        'weight': 520,
        'components': 'Пицца соус, соус кисло-сладкий, сыр моцарелла, кунжут, сочная курочка, ананас, болгарский перец',
        'image': 'https://ibb.co/5sfnNgJ'
    },
    {
        'name': 'Мясная',
        'price': 865,
        'weight': 655,
        'components': 'Соус 1000 островов, сыр моцарелла, сыр пармезан, колбаски чоризо, колбаски тоскана, свинина, говядина, сочная курочка, бекон',
        'image': 'https://ibb.co/jw4TkN3'
    },
    {
        'name': 'Маргарита',
        'price': 545,
        'weight': 480,
        'components': 'Пицца соус, сыр моцарелла, свежий помидор',
        'image': 'https://ibb.co/LNtSjxr'
    }
]

/* GET users listing. */
router.get('/get', function(req, res, next) {

    res.send("<h1>" + req.query.name + "</h1>");
});

module.exports = router;
