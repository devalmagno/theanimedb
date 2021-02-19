import Head from 'next/head';
import { FiSearch } from 'react-icons/fi';

import styles from '../styles/home.module.css';

function HomePage() {
    return (
        <div className={styles.content}>
            <Head>
                <title>Banco de Dados de Anime</title>
            </Head>
            <header className={styles.header}>
                <h1>Banco de Dados de <strong>Anime</strong></h1>
                <div className={styles.form}>
                    <input
                        type="search"
                        name="search"
                        required
                        placeholder="Procure pelo anime aqui..."
                        autoComplete="off"
                    />
                    <label for="search" className={styles.search_icon}>
                        <FiSearch color="#C2C2C2" />
                    </label>
                    <label htmlFor="search" className={styles.search_bottom}></label>
                </div>
            </header>

            <main>
              {/* <a className={styles.searchResults}>
                <figure>
                    <img src="/images/SNK.jpg"/>
                </figure>
                <span>Shingeki</span>
              </a> */}
            </main>

            <aside>
                <div className={styles.sidebar_holder}></div>

                <div className={styles.sidebar}>
                    <h2>TOP 5 Animes</h2>
                    <div className={styles.item_top}>
                        <a>
                            <img src="/images/SNK.jpg" alt="Anime Image" />
                        </a>
                        <span>Shingeki no Kyojin</span>
                    </div>
                    <div className={styles.topbar_sidebar}></div>

                    <div className={styles.item_container}>
                        <div className={styles.item_sidebar}>
                            <div>
                                <img src="/images/SNK.jpg" alt="Anime Image" />
                            </div>

                            <a>Shingeki no Kyojin</a>
                        </div>

                        <div className={styles.item_sidebar}>
                            <div>
                                <img src="/images/SNK.jpg" alt="Anime Image" />
                            </div>

                            <a>Shingeki no Kyojin</a>
                        </div>

                        <div className={styles.item_sidebar}>
                            <div>
                                <img src="/images/SNK.jpg" alt="Anime Image" />
                            </div>

                            <a>Shingeki no Kyojin</a>
                        </div>

                        <div className={styles.item_sidebar}>
                            <div>
                                <img src="/images/SNK.jpg" alt="Anime Image" />
                            </div>

                            <a>Shingeki no Kyojin</a>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.sidebar_holder}></div>
            </aside>
        </div>
    );
}

export default HomePage;