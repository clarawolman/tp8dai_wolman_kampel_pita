import { Router } from "express";

const router = Router();

let provinces = [];
let nextId = 1;


// GET /api/province
router.get("/", (req, res) => {
    res.status(200).json(provinces);
});


// GET /api/province/:id
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const province = provinces.find(p => p.id === id);

    if (!province) {
        return res.status(404).send("Provincia no encontrada");
    }

    res.status(200).json(province);
});


// POST /api/province
router.post("/", (req, res) => {
    const { name, full_name, latitude, longitude, display_order } = req.body;

    if (!name || name.length < 3) {
        return res.status(400).send("Nombre inválido");
    }

    const newProvince = {
        id: nextId++,
        name,
        full_name,
        latitude,
        longitude,
        display_order
    };

    provinces.push(newProvince);

    res.status(201).json(newProvince);
});


// PUT /api/province
router.put("/", (req, res) => {
    const { id, name, full_name, latitude, longitude, display_order } = req.body;

    const province = provinces.find(p => p.id === id);

    if (!province) {
        return res.status(404).send("Provincia no encontrada");
    }

    if (!name || name.length < 3) {
        return res.status(400).send("Nombre inválido");
    }

    province.name = name;
    province.full_name = full_name;
    province.latitude = latitude;
    province.longitude = longitude;
    province.display_order = display_order;

    res.status(201).json(province);
});


// DELETE /api/province/:id
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = provinces.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).send("Provincia no encontrada");
    }

    provinces.splice(index, 1);

    res.status(200).send("Provincia eliminada");
});

export default router;