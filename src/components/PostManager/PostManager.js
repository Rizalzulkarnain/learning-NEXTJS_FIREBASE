import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firestore, auth } from '../../lib/firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import PostForm from './PostForm';
import DeletePostButton from '../DeletePostButton/DeletePostButton';

import styles from '../../styles/Admin.module.css';

const PostManager = () => {
  const [preview, setPreview] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  const postRef = firestore
    .collection('users')
    .doc(auth.currentUser.uid)
    .collection('posts')
    .doc(slug);

  const [post] = useDocumentData(postRef);

  return (
    <main className={styles.container}>
      {post && (
        <>
          <section>
            <h1>{post.title}</h1>
            <p>ID: {post.slug}</p>

            <PostForm
              postRef={postRef}
              defaultValues={post}
              preview={preview}
            />
          </section>

          <aside>
            <h3>Tools</h3>
            <button onClick={() => setPreview(!preview)}>
              {preview ? 'Edit' : 'Preview'}
            </button>
            <Link href={`/${post.username}/${post.slug}`}>
              <button className="btn-blue">Live View</button>
            </Link>

            <DeletePostButton postRef={postRef} />
          </aside>
        </>
      )}
    </main>
  );
};

export default PostManager;
