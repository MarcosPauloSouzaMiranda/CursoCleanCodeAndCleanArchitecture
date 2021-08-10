import Item from "../entities/Item";

export default interface ItemRepository{
    findById(id: string): Item;
}