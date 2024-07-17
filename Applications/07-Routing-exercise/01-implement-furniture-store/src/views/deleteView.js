import { dataService } from "../service/dataService.js";

export async function deleteItem(ctx) {
    const id = ctx.params.id;

    await dataService.delFurniture(id);
    ctx.goTo('/');
}