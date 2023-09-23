class GET {
    static async getWords() {
        try{
            const resp = await fetch ('http://itgirlschool.justmakeit.ru/api/words');
            const wordsJSON = await resp.json();
            return wordsJSON
        } catch(e) {
            console.error(e);
        }       
    }
}

export default GET