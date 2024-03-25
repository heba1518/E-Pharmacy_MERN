import DealWithJson from './dealWithJson'

const CRUD = {
  getAll() {
    return DealWithJson.readFromJSON();
  },

  findById(id) {
    const allElements = DealWithJson.readFromJSON();
    return allElements.find(element => element.id === id);
  },

  deleteById(id) {
    let allElements = DealWithJson.readFromJSON();
    const index = allElements.findIndex(element => element.id === id);
    if (index !== -1) {
      allElements.splice(index, 1);
      DealWithJson.writeToJSON(allElements);
      return true;
    }
    return false;
  },

  add(elementData) {
    let allElements = DealWithJson.readFromJSON();
    const id = Date.now();
    const newElement = { id, ...elementData };
    allElements.push(newElement);
    DealWithJson.writeToJSON(allElements);
    return newElement;
  },

  updateById(id, elementData) {
    let allElements = DealWithJson.readFromJSON();
    const index = allElements.findIndex(element => element.id === id);
    if (index !== -1) {
      allElements[index] = { ...allElements[index], ...elementData };
      DealWithJson.writeToJSON(allElements);
      return true;
    }
    return false;
  }
};

export default CRUD;
