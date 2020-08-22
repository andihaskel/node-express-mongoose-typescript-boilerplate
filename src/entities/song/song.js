export default function buildMakeSong({ }) {
    return function makeSong({} = {}) {
        // if (!Id.isValidId(id)) {
        //     throw new Error('Comment must have a valid id.')
        // }
        // if (!author) {
        //     throw new Error('Comment must have an author.')
        // }
        return Object.freeze({
            getName: () => 'test',
            getId: () => 1
        })
      
    }
}
