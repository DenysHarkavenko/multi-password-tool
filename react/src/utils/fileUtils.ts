import Item from '../types/Item';

let fsPromises: typeof import('fs/promises');

if (typeof window === 'undefined') {
    fsPromises = require('fs/promises');
}

export const readItemsFile = async (): Promise<Item[]> => {
    if (fsPromises) {
        try {
            const data = await fsPromises.readFile('../items.json', 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error reading items.json file:', error);
            return [];
        }
    } else {
        console.error('fs/promises module is not available in browser environment');
        return [];
    }
};

export const writeItemsFile = async (items: Item[]): Promise<void> => {
    if (fsPromises) {
        try {
            await fsPromises.writeFile('../items.json', JSON.stringify(items, null, 2));
        } catch (error) {
            console.error('Error writing items.json file:', error);
        }
    } else {
        console.error('fs/promises module is not available in browser environment');
    }
};
