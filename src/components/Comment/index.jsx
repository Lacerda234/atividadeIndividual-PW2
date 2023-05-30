import styles from "./styles.module.css";
import { Trash } from "@phosphor-icons/react";

export const Comment = () => {
  return (
    <>
      <div className={styles.commentCard}>
        <div className={styles.coment}>
          <img src="https://i.ibb.co/XpGtSSR/Rectangle-4234.png" alt="mulher" />
          <p>
            Leandro estou no local já lhe esperando. estou de blusa azul e calça
            jeans
          </p>
          <div className={styles.btn}>
            <Trash size={22} />
          </div>
        </div>

        <div className={styles.response}>
          <img src="https://i.ibb.co/nr5bLZm/image-3770.png" alt="resposta" />
          <p>Acabei de lhe ver. Vou estacionar o carro próximo.</p>
          <div className={styles.btn}>
            <Trash size={22} />
          </div>
        </div>
      </div>
      ;
    </>
  );
};
