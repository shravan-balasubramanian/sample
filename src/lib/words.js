/* eslint-disable */
export default {
    getSampleWords : function () {
        return new Promise((resolve,reject) => {
            fetch('https://raw.githubusercontent.com/words/an-array-of-english-words/master/words.json')
                .then(res=>res.json())
                .then(resolve)
                .catch(reject);
        });
    }
}
