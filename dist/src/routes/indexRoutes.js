import { Router } from "express";
import repositories from "../repositories/repositories";
var router = Router();
router.get('/check/:id', function (req, res) {
    var id = req.params.id;
    res.send(id);
});
router.post('/costumers', repositories.addCostumers);
router.get('/costumers', repositories.getCostumers);
export default router;
