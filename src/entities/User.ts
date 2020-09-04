export default function buildMakeUser({ cuid }: any) {
    return function makeUser({
        name = '',
        id = cuid.slug(),
        password = '',
        email = ''
    } = {}) {
        // if (!Id.isValidId(id)) {
        //     throw new Error('Comment must have a valid id.')
        // }
        // if (!author) {
        //     throw new Error('Comment must have an author.')
        // }
        return Object.freeze({
            getName: (): string => name,
            getId: (): string => id,
            getPassword: (): String => password,
            email: (): String => email
        })

    }
}
