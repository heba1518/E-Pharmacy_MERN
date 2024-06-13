import { readFileSync, writeFileSync } from 'fs';

const DealWithJson = {
  readFromJSON(fileName) {
    let result;
    try {
      result = JSON.parse(readFileSync(fileName));
      if (!Array.isArray(result)) result = [];
    } catch (e) {
      result = [];
    }
    return result;
  },
  writeToJSON(data, fileName) {
    writeFileSync(fileName, JSON.stringify(data));
  },
};


 export default DealWithJson 