import styles from "./styles.module.css";
import { Comment } from "../Comment";
import { Star, Phone, ShieldPlus } from "@phosphor-icons/react";

export const Widget = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.drag}></div>
        <section>
          <div className={styles.header}>
            <h1>
              Encontre <span>Leandro</span> no local de partida
            </h1>
            <p>Chega em 3 minutos (800 metros)</p>
          </div>
        </section>
        <main>
          <div className={styles.body}>
            <div className={styles.left}>
              <div className={styles.driver}>
                <div className={styles.avatar}>
                  <img
                    src="https://github.com/lacerda234.png"
                    alt="motorista"
                  />
                </div>
                <div className={styles.stars}>
                  <div className={styles.star}>
                    <Star size={32} weight="fill" />
                  </div>
                  <strong>5.0</strong>
                </div>
                <div className={styles.name}>Leandro F.</div>
              </div>
              <div className={styles.car}>
                <img
                  src="https://i.ibb.co/PGc07vn/image-3709.png"
                  alt="carro roxo"
                />
              </div>
            </div>

            <div className={styles.right}>
              <div className={styles.plate}>BCD0D19</div>
              <div className={styles.model}>Honda Civic Roxo</div>
            </div>
          </div>
        </main>
        <section>
          <div className={styles.footer}>
            <div className={styles.wrapper}>
              <input
                type="text"
                id="message"
                placeholder="Enviar mensagem para Leandro..."
              />
            </div>
            <div className={styles.button}>Publicar</div>
            <div className={styles.icons}>
              <Phone weight="fill" />
            </div>
            <div className={styles.icons}>
              <ShieldPlus weight="fill" />
            </div>
          </div>
        </section>

        <div className={styles.coments}>
          <Comment />
        </div>
      </div>
    </>
  );
};
