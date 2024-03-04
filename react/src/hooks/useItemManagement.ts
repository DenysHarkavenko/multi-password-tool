import { useState } from 'react';
import Item from '../types/Item';

const useItemManagement = () => {
    const [items, setItems]: [Item[], (items: Item[]) => void] = useState<Item[]>([])
    const [selectedItem, setSelectedItem] = useState<Item | null>(null)
    const [isEditing, setIsEditing]: any = useState(false)


    const addItem = (newItem: Item): void => {
        setItems([...items, newItem]);
    };

    const handleItemClick = (item: Item): void => {
        setSelectedItem(item);
        setIsEditing(false);
    };

    const handleEditClick = (): void => {
        setIsEditing(true);
    };

    const handleDeleteItem = (item: Item): void => {
        setItems(items.filter((i) => i !== item));
        setSelectedItem(null);
    };

    const handleEditItem = (editedItem: Item): void => {
        const updatedItems = items.map((item) => {
            if (item === selectedItem) {
                return editedItem;
            }
            return item;
        });
        setItems(updatedItems);
        setSelectedItem(editedItem);
        setIsEditing(false);
    };

    return {
        items,
        selectedItem,
        isEditing,
        addItem,
        handleItemClick,
        handleEditClick,
        handleDeleteItem,
        handleEditItem,
    };
};

export default useItemManagement;
