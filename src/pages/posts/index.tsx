import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return(
    <>
    <Head>
      <title>Posts | Ignews</title>
    </Head>

    <main className={styles.container}>
      <div className={styles.posts}>
        <a href="">
          <time>12 de março de 2022</time>
          <strong>Creating a monorepo with Lerna & Yarn Workspaces</strong>
          <p>Aqui entra o texto para os posts que contém o conteúdo e tudo mais, poderia ser um lorem ipsum mas não é</p>
        </a>
        <a href="">
          <time>12 de março de 2022</time>
          <strong>Creating a monorepo with Lerna & Yarn Workspaces</strong>
          <p>Aqui entra o texto para os posts que contém o conteúdo e tudo mais, poderia ser um lorem ipsum mas não é</p>
        </a>
        <a href="">
          <time>12 de março de 2022</time>
          <strong>Creating a monorepo with Lerna & Yarn Workspaces</strong>
          <p>Aqui entra o texto para os posts que contém o conteúdo e tudo mais, poderia ser um lorem ipsum mas não é</p>
        </a>
      </div>
    </main>
    </>
  );
}