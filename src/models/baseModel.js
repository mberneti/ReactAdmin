class BaseModel {
  constructor(refs) {
    //in model this.Test=[];
    if (refs) {
      for (var key of Object.keys(refs)) {
        //is a array of inputs
        //like Test-1 , Test-2 , ...
        let labelArray = key.split('-');

        if (labelArray.length === 2) {

          this[labelArray[0]] = (typeof this[labelArray[0]] !== 'undefined' && this[labelArray[0]] instanceof Array) ? this[labelArray[0]] : [];

          this[labelArray[0]].push(refs[key].value);

        }
        else if (labelArray.length === 3) {

          let label = labelArray[0];

          this[label] = (typeof this[label] !== 'undefined' && this[label] instanceof Array) ? this[label] : [];

          let propName = labelArray[1];

          // let newItem={};

          // newItem[propName]=refs[key].value;
          //------------------------------------------------------
          let arrayLength = this[label].length;

          if (arrayLength > 0 &&
            typeof this[label][arrayLength - 1][propName] === "undefined") {

            this[label][arrayLength - 1] = { ...this[label][arrayLength - 1], [propName]: refs[key].value };

          } else {

            let newItem = {};

            newItem[propName] = refs[key].value;
            this[label].push(newItem);
          }

          //------------------------------------------------------



        } else {

          this[key] = refs[key].value;
        }

      }
    }
  }
}

export default BaseModel;