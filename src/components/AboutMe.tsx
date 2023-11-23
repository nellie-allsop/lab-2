import styles from "@/src/components/AboutMe.module.css"

export default function AboutMe(){
  return(
    <>
    <div className={`${styles.bubbleOuter1}`}>
    <p className={`${styles.bubbleText}`}>Welcome to my life</p>
    </div>
    <div className={`${styles.bubbleOuter2}`}>
      <p className={`${styles.bubbleText}`}>Bubbles are fun</p>
      </div>
    </>
  )

}