import React from "react"
import Header from "../components/header"
//import { Link } from "gatsby"
import * as styles from "./index.module.scss"
import { Modal } from "react-responsive-modal"
import "react-responsive-modal/styles.css"
import meme from "../styles/hotsingles.png"

export default function Home() {
  const [openFirst, setOpenFirst] = React.useState(false)
  const [openSecond, setOpenSecond] = React.useState(false)

  return (
    <div>
      <div className={styles.topnav}>
        <img
          src="https://source.unsplash.com/random/50x50"
          alt="random"
          align={"right"}
        />
        <a className="active" href="/">
          Home
        </a>
        <a href="/contact">Contact</a>
        <a href="/">Blah</a>
        <a href="/">Blah</a>
      </div>

      <div
        className={styles.text} //style={{ color: "lightblue" }}
      >
        <Header headerText="Company Name Here!" color={"darkgrey"} />
        <h1>...</h1>
        <div className={styles.boxy}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            risus ac quam rutrum porta ut vitae eros. Aenean posuere ante enim,
            at facilisis diam dignissim at. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Fusce
            ultricies, odio quis cursus iaculis, tortor dui bibendum dui, a
            luctus justo lacus non massa. Praesent blandit neque eget
            condimentum interdum. Nullam ex libero, hendrerit non ipsum vitae,
            rutrum eleifend sem. Nunc lacinia luctus sem eget placerat.
            Suspendisse tempus posuere condimentum. In vestibulum aliquam lorem
            non porttitor. Suspendisse porttitor id metus at rhoncus. Vivamus
            pellentesque augue venenatis turpis molestie eleifend. Morbi et
            risus vel enim tempor aliquet id in tellus. Nullam nec mattis ex.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            consectetur elementum iaculis. Aliquam at tellus id eros aliquam
            consectetur. Duis leo risus, sagittis in neque in, efficitur
            imperdiet diam. Vestibulum sit amet posuere enim. Ut id volutpat
            libero. Nam nunc libero, molestie vel dictum non, pulvinar at
            tortor. Proin posuere libero eu urna porttitor, vitae ultrices urna
            commodo. Aliquam mattis, libero nec vehicula tempus, velit augue
            bibendum ipsum, ac pretium massa sem eu dolor. Maecenas eget
            condimentum magna. Donec imperdiet erat sit amet nunc molestie, et
            blandit felis venenatis. In consequat, est sit amet imperdiet
            fringilla, nisl nunc tempor lectus, in aliquet risus libero eget
            purus. Vestibulum eu urna nec quam faucibus facilisis eu quis
            turpis. Cras nec vestibulum elit. Cras eleifend dui nec bibendum
            suscipit. Nam congue pulvinar tempus. Ut porttitor tempus justo id
            suscipit. Integer in odio et mi feugiat malesuada sit amet vitae
            quam. Sed euismod libero quis venenatis blandit. Pellentesque
            interdum eu nunc id condimentum. Vestibulum id mauris vestibulum,
            pellen
          </p>
        </div>
        <p> </p>
        <div className={styles.image}>
          <img src="https://source.unsplash.com/random/800x400" alt="random" />
          <p>Image By: No one lol</p>
        </div>

        <Header headerText="Cool Buttons!!" color={"#CAEBF2"} />
        <div className={styles.buttonHolder}>
          <div>
            <button
              className={styles.button}
              onClick={() => setOpenFirst(true)}
            >
              Dont Click!!!
            </button>
            <Modal
              open={openFirst}
              onClose={() => setOpenFirst(false)}
              center
              classNames={{
                overlay: styles.customOverlay,
                modal: styles.customModal,
              }}
            >
              <h2>wait </h2>
              <img src={meme} alt="singles meme" />
            </Modal>
          </div>
          <div>
            <button
              className={styles.button}
              onClick={() => setOpenSecond(true)}
            >
              Open modal
            </button>
            <Modal
              open={openSecond}
              onClose={() => setOpenSecond(false)}
              center
            >
              <h2>Look at this fucking popup bro </h2>
              <p>Absolutely Stellar Shit My Guy</p>
            </Modal>
          </div>
        </div>

        <div className={styles.foot}>
          <footer>
            <p>This is where copyright info would go if it existed</p>
          </footer>
        </div>
      </div>
    </div>
  )
}
