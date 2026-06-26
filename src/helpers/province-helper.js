class ProvinceHelper {

    validateProvince(province) {
        if (!province.name || province.name.length < 3) {
            return "Nombre inválido";
        }

        return null;
    }

    validateId(id) {
        if (isNaN(id)) {
            return "Id inválido";
        }

        return null;
    }
}


export default new ProvinceHelper();