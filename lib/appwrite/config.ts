export const appwriteConfig = {

    endpointURL: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,

    projectID: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,

    databaseID: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,

    usersCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION!,

    filesCollectionId: process.env.NEXT_PUBLIC_APPWRITE_FILES_COLLECTION!,

    bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET!,

    secreteKey: process.env.NEXT_APPWRITE_KEY!,
}  