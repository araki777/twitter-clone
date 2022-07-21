import { FirestoreDataConverter, DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore"
import { Posts } from "types";

export const PostsConverter: FirestoreDataConverter<Posts> = {
  toFirestore(posts: Posts): DocumentData {
    return {
      avatar: posts.avatar,
      displayName: posts.displayName,
      image: posts.image,
      text: posts.text,
      username: posts.username,
      verified: posts.verified
    }
  },

  fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Posts {
    const data = snapshot.data(options)
    return {
      avatar: data.avatar,
      displayName: data.displayName,
      image: data.image,
      text: data.text,
      username: data.username,
      verified: data.verified
    }
  },
}
