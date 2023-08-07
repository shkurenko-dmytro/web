import { ReactNode } from "react"
import styles from "./Modal.module.css"
import { GrClose } from "react-icons/gr"

interface IModal {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  children: ReactNode
}

const Modal: React.FC<IModal> = ({ open, setOpen, children }) => {
  return (
    <>
      {/* {open && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button
              className={styles.btn}
              type="button"
              onClick={() => setOpen(false)}
            >
              <GrClose style={{ padding: 1, width: 30, height: 30 }} />
            </button>

            <h1>Modal window</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique optio vitae, ad reprehenderit, libero, cum ratione
              provident odio enim dolorum minima. Atque voluptatibus ullam
              dignissimos repudiandae praesentium accusamus distinctio sed
              aspernatur similique, doloribus, officia odit quia ratione quasi
              aperiam eaque in perferendis nostrum fugiat quidem debitis
              eligendi iusto. Est a aliquam laboriosam, possimus, perspiciatis
              cum assumenda sed nemo, aspernatur laudantium sunt. Assumenda
              consequuntur possimus fugiat, quis dolorem maiores harum ullam
              omnis officia molestiae doloribus cupiditate cum alias!
              Consectetur aliquam sequi nobis doloremque labore neque ad
              placeat, vero reiciendis veniam vel molestias id beatae rem quidem
              quae impedit quos corporis tenetur.
            </p>
          </div>
        </div>
      )} */}
      <div
        className={`${styles.overlay} ${styles.animated} ${
          open ? `${styles.show}` : ""
        }`}
      >
        <div className={styles.modal}>
          <button
            className={styles.btn}
            type="button"
            onClick={() => setOpen(false)}
          >
            <GrClose style={{ padding: 1, width: 30, height: 30 }} />
          </button>

          <h1>Modal window</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            optio vitae, ad reprehenderit, libero, cum ratione provident odio
            enim dolorum minima. Atque voluptatibus ullam dignissimos
            repudiandae praesentium accusamus distinctio sed aspernatur
            similique, doloribus, officia odit quia ratione quasi aperiam eaque
            in perferendis nostrum fugiat quidem debitis eligendi iusto. Est a
            aliquam laboriosam, possimus, perspiciatis cum assumenda sed nemo,
            aspernatur laudantium sunt. Assumenda consequuntur possimus fugiat,
            quis dolorem maiores harum ullam omnis officia molestiae doloribus
            cupiditate cum alias! Consectetur aliquam sequi nobis doloremque
            labore neque ad placeat, vero reiciendis veniam vel molestias id
            beatae rem quidem quae impedit quos corporis tenetur.
          </p>
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal
