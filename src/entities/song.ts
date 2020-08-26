

export default function buildMakeSong({ cuid }: any) {
    return function makeSong({
        name = 'a',
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
