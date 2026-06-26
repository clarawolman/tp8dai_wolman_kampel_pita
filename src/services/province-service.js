import ProvinceRepository from "../repositories/province-repository.js";
import ProvinceHelper from "../helpers/province-helper.js";

export default class ProvinceService {

    constructor() {
        this.repository = new ProvinceRepository();
    }

    getAllAsync = async () => {
        return await this.repository.getAllAsync();
    }

    getByIdAsync = async (id) => {
        return await this.repository.getByIdAsync(id);
    }

    createAsync = async (province) => {
        const error = ProvinceHelper.validateProvince(province);

        if (error) {
            throw new Error(error);
        }

        return await this.repository.createAsync(province);
    }

    updateAsync = async (province) => {
        const error = ProvinceHelper.validateProvince(province);

        if (error) {
            throw new Error(error);
        }

        return await this.repository.updateAsync(province);
    }

    deleteByIdAsync = async (id) => {
        return await this.repository.deleteByIdAsync(id);
    }
}