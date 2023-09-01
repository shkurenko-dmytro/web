import { BsFillBookmarkHeartFill } from "react-icons/bs"
import styles from "./Header.module.css"
import { useFavorites } from "../../hooks/useFavorites"

export default function Header() {
  const { favorites } = useFavorites()

  return (
    <header className={styles.header}>
      <BsFillBookmarkHeartFill fontSize={30} />
      <span>{favorites.length}</span>
    </header>
  )
}