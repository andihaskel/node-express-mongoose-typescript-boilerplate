export default function buildMakeComment({ }) {
    return function makeComment({} = {}) {
        if (!Id.isValidId(id)) {
            throw new Error('Comment must have a valid id.')
        }
        if (!author) {
            throw new Error('Comment must have an author.')
        }

        // return Object.freeze({
        //     getAuthor: () => author,
        //     getCreatedOn: () => createdOn,
        //     getHash: () => hash || (hash = makeHash()),
        //     getId: () => id,
        //     getModifiedOn: () => modifiedOn,
        //     getPostId: () => postId,
        //     getReplyToId: () => replyToId,
        //     getSource: () => validSource,
        //     getText: () => sanitizedText,
        //     isDeleted: () => sanitizedText === deletedText,
        //     isPublished: () => published,
        //     markDeleted: () => {
        //         sanitizedText = deletedText
        //         author = 'deleted'
        //     },
        //     publish: () => {
        //         published = true
        //     },
        //     unPublish: () => {
        //         published = false
        //     }
        // })
    }
}
