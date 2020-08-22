import cuid from 'cuid'

export default function buildMakeSong({ }) {
    return function makeSong({
        name = '',
        id = cuid.slug()
    } = {}) {
        // if (!Id.isValidId(id)) {
        //     throw new Error('Comment must have a valid id.')
        // }
        // if (!author) {
        //     throw new Error('Comment must have an author.')
        // }
        return Object.freeze({
            getName: (): string => name,
            getId: (): string => id
        })

    }
}
