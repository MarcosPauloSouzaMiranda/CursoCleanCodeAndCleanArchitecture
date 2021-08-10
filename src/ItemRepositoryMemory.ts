import Item from "./Item";
import ItemRepository from "./ItemRepository";

export default class ItemRepositoryMemory implements ItemRepository{
    private items: Item[];

    constructor() {
        this.items = [
            new Item('1', 'Manteiga', 3.58, 20, 15, 10, 0.5),
            new Item('2', 'Leite em Pó', 4.20, 50, 50, 50, 10),
            new Item('3', 'Leite condensado', 5.23, 50, 50, 50, 0.2)
        ];
    }

    public findById(id: string): Item {
        const itemSearch: Item | undefined = this.items.find(item => item.id === id);
        if (!itemSearch) throw new Error('Item not found');
        return itemSearch;
    }
}