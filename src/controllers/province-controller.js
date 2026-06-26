import { Router } from "express";
import ProvinceService from "../services/province-service.js";

const router = Router();
const service = new ProvinceService();


// GET /api/province
router.get("/", async (req, res) => {
    const provinces = await service.getAllAsync();

    res.status(200).json(provinces);
});


// GET /api/province/:id
router.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    const province = await service.getByIdAsync(id);

    if (!province) {
        return res.status(404).send("Provincia no encontrada");
    }

    res.status(200).json(province);
});


// POST /api/province
router.post("/", async (req, res) => {
    try {
        const newProvince = await service.createAsync(req.body);

        res.status(201).json(newProvince);
    } catch (error) {
        res.status(400).send(error.message);
    }
});


// PUT /api/province
router.put("/", async (req, res) => {
    try {
        const updatedProvince = await service.updateAsync(req.body);

        if (!updatedProvince) {
            return res.status(404).send("Provincia no encontrada");
        }

        res.status(201).json(updatedProvince);
    } catch (error) {
        res.status(400).send(error.message);
    }
});


// DELETE /api/province/:id
router.delete("/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    const deleted = await service.deleteByIdAsync(id);

    if (!deleted) {
        return res.status(404).send("Provincia no encontrada");
    }

    res.status(200).send("Provincia eliminada");
});

export default router;