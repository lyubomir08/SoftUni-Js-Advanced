import { html } from "../../node_modules/lit-html/lit-html.js";
import {classMap} from "../../node_modules/lit-html/directives/class-map.js";

import { dataService } from "../service/dataService.js";

const validResult = {make: true, model : true, year:true, description:true, price:true, img:true,isValid:true};

const editTemplate = (furniture, validationResult) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Edit Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <input type="hidden" name="_id" value=${furniture._id}>
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class=${classMap({
                        'form-control': true,
                        'is-valid': validationResult.make,
                        'is-invalid': !validationResult.make
                    })} id="new-make" type="text" name="make" value=${furniture.make}>
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class=${classMap({
                        'form-control': true,
                        'is-valid': validationResult.model,
                        'is-invalid': !validationResult.model
                    })} id="new-model" type="text" name="model" value=${furniture.model}>
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class=${classMap({
                        'form-control': true,
                        'is-valid': validationResult.year,
                        'is-invalid': !validationResult.year
                    })} id="new-year" type="number" name="year" value=${furniture.year}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class=${classMap({
                        'form-control': true,
                        'is-valid': validationResult.description,
                        'is-invalid': !validationResult.description
                    })} id="new-description" type="text" name="description" value=${furniture.description}>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class=${classMap({
                        'form-control': true,
                        'is-valid': validationResult.price,
                        'is-invalid': !validationResult.price
                    })} id="new-price" type="number" name="price" value=${furniture.price}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class=${classMap({
                        'form-control': true,
                        'is-valid': validationResult.img,
                        'is-invalid': !validationResult.img
                    })} id="new-image" type="text" name="img" value=${furniture.img}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material"
                           value=${furniture.material}>
                </div>
                <input type="submit" class="btn btn-info" value="Edit"/>
            </div>
        </div>
    </form>`;

let context = null;
export async function showEditView(ctx) {
    context = ctx;
    
    const details = await dataService.getDetailsFurniture(ctx.params.id);
    ctx.render(editTemplate(details, validResult));
}

async function onSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const furniture = Object.fromEntries(formData);

    const validationResult = validate(furniture);
    if (!validationResult.isValid) {
        context.render(editTemplate(furniture, validationResult));
        return;
    }

    const id = furniture._id;
    await dataService.updateFurniture(id, furniture);
    context.goTo('/');
}

function validate(furniture) {
    const result = {}
    result.make = furniture.make.length >= 4;
    result.model = furniture.model.length >= 4;
    result.year = (1950 <= furniture.year && furniture.year <= 2050);
    result.description = furniture.description.length >= 10;
    result.price = furniture.price > 0;
    result.img = furniture.img !== '';
    result.isValid = Object.values(result).every(v => v);
    return result;
}