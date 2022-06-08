import { TagData } from 'src/utils/TagData'
const FindTag = (tagID) => {
    let findTag = TagData.filter((TagData) => TagData._id.$oid === tagID)

    return findTag[0]
}
export const FindAllTag = (curComic) => {
    let tag = []
    for (let i = 0; i < curComic.tagID.length; i++) {
        tag[i] = FindTag(curComic.tagID[i].$oid)
    }
    return tag
}
