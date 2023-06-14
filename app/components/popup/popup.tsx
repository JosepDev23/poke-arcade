import styles from './popup.module.css'

export interface PopupProps {
  open: boolean
  text: string
  leftBtnText: string
  leftBtnOnClick: () => void
  rightBtnText: string
  rightBtnOnClick: () => void
}

const Popup: React.FC<PopupProps> = (props) => {

  return <>
    {props.open &&
      <div className={styles.popup_backgroud}>
        <div className={styles.popup_box}>
          <h2 className={styles.popup_text}>{props.text}</h2>
          <div className={styles.popup_buttons_container}>
            <button
              style={{ "--clr": "#8A2BE2" } as React.CSSProperties}
              onClick={props.leftBtnOnClick}>
              <span>{props.leftBtnText}</span><i></i>
            </button>
            <button
              style={{ "--clr": "#39FF14" } as React.CSSProperties}
              onClick={props.rightBtnOnClick}>
              <span>{props.rightBtnText}</span><i></i>
            </button>
          </div>
        </div>
      </div>
    }
  </>

}

export default Popup